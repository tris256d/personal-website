// Imported only by Astro frontmatter: credentials never enter the client bundle.
import type { FeatureCollection, LineString } from 'geojson';
export type Activity = { id: number; name: string; sportType: string; startDate: string; distance: number; movingTime: number };
function decode(encoded: string): number[][] {
  let index = 0, lat = 0, lng = 0;
  const coordinates: number[][] = [];
  function value() {
    let result = 0, shift = 0, byte: number;
    do {
      if (index >= encoded.length || shift > 30) throw new Error('Invalid route polyline');
      byte = encoded.charCodeAt(index++) - 63;
      if (byte < 0 || byte > 63) throw new Error('Invalid route polyline');
      result |= (byte & 31) << shift; shift += 5;
    } while (byte >= 32);
    return result & 1 ? ~(result >> 1) : result >> 1;
  }
  while (index < encoded.length) {
    lat += value(); lng += value();
    if (Math.abs(lat) > 9000000 || Math.abs(lng) > 18000000) throw new Error('Invalid route coordinates');
    coordinates.push([lng / 1e5, lat / 1e5]);
  }
  return coordinates;
}
export async function loadActivities(): Promise<FeatureCollection<LineString, Activity>> {
  const data: FeatureCollection<LineString, Activity> = { type: 'FeatureCollection', features: [] };
  const client_id = import.meta.env.STRAVA_CLIENT_ID || process.env.STRAVA_CLIENT_ID;
  const client_secret = import.meta.env.STRAVA_CLIENT_SECRET || process.env.STRAVA_CLIENT_SECRET;
  const refresh_token = import.meta.env.STRAVA_REFRESH_TOKEN || process.env.STRAVA_REFRESH_TOKEN;
  if (!client_id || !client_secret || !refresh_token) {
    console.warn('[visualizer] Strava credentials missing; no activity data.');
    return data;
  }
  const tokenResponse = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST', body: new URLSearchParams({ client_id, client_secret, refresh_token, grant_type: 'refresh_token' }), signal: AbortSignal.timeout(30000),
  });
  if (!tokenResponse.ok) throw new Error(`Strava token exchange failed (${tokenResponse.status}).`);
  const token = await tokenResponse.json();
  if (!token.access_token) throw new Error('Strava returned no access token.');
  // Strava can rotate refresh tokens. Never print either token.
  if (token.refresh_token && token.refresh_token !== refresh_token) console.warn('[visualizer] Strava refresh token rotated; update the Netlify credential before the next build.');
  for (let page = 1; ; page++) {
    const response = await fetch(`https://www.strava.com/api/v3/athlete/activities?per_page=200&page=${page}`, {
      headers: { Authorization: `Bearer ${token.access_token}` }, signal: AbortSignal.timeout(30000),
    });
    if (!response.ok) throw new Error(`Strava activities request failed (${response.status}, page ${page}).`);
    const activities = await response.json();
    if (!Array.isArray(activities)) throw new Error('Invalid Strava activities response.');
    for (const activity of activities) {
      if (!activity.map?.summary_polyline) continue;
      const coordinates = decode(activity.map.summary_polyline);
      if (coordinates.length < 2) continue;
      data.features.push({ type: 'Feature', id: activity.id, properties: {
        id: activity.id, name: activity.name, sportType: activity.sport_type || activity.type,
        startDate: activity.start_date, distance: activity.distance, movingTime: activity.moving_time,
      }, geometry: { type: 'LineString', coordinates } });
    }
    if (activities.length < 200) break;
  }
  return data;
}
