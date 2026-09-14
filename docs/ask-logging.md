# Optional private Ask logs

Logging is off unless both `ASK_LOG_URL` and `ASK_LOG_SECRET` are configured. The browser keeps conversation memory only for the current page visit. Refreshing clears it. Optional logging persists successful turns separately:

Netlify Ask function → Google Apps Script Web App → private Google Sheet.

## Setup

1. Create a Google Sheet. Keep sharing set to **Restricted**.
2. In that Sheet, open **Extensions → Apps Script**. Replace the starter code with the snippet below. Replace `YOUR_SHEET_ID` with the ID between `/d/` and `/edit` in the Sheet URL.
3. Generate a long random secret locally, for example `openssl rand -hex 32`. Do not commit it.
4. In Apps Script, open **Project Settings → Script Properties → Add script property**. Name it `ASK_LOG_SECRET`, paste the secret, and save. Never put the secret in a cell or browser code.
5. Save the script. Choose **Deploy → New deployment → Web app**. Set **Execute as: Me** and **Who has access: Anyone**. Deploy, authorize the Sheet access, and copy the Web app URL ending in `/exec`.
6. In Netlify's `tristan-de-halleux` project, open **Project configuration → Environment variables**. Add `ASK_LOG_URL` with that `/exec` URL and `ASK_LOG_SECRET` with the same secret. Use server/Functions scope and Production context. Mark the secret value as secret. Redeploy production after saving.
7. Complete a question on `/ask`. The `Ask Logs` tab should appear with one row for the completed turn. Additional turns on that page share a random session ID; refreshing generates a new one.

```javascript
function doPost(e) {
  const reply = value => ContentService.createTextOutput(value);
  try {
    const expected = PropertiesService.getScriptProperties().getProperty('ASK_LOG_SECRET');
    const payload = JSON.parse(e.postData.contents);
    if (!expected || payload.secret !== expected) return reply('failure');
    const values = [payload.timestamp, payload.sessionId, payload.user, payload.assistant];
    if (values.some(value => typeof value !== 'string')) return reply('failure');
    // Visitor/model text is untrusted: keep it literal, never a Sheet formula.
    const literal = value => /^[\s]*[=+@-]/.test(value) ? "'" + value : value;
    const lock = LockService.getScriptLock();
    lock.waitLock(5000);
    try {
      const book = SpreadsheetApp.openById('YOUR_SHEET_ID');
      const sheet = book.getSheetByName('Ask Logs') || book.insertSheet('Ask Logs');
      if (sheet.getLastRow() === 0) sheet.appendRow(['timestamp', 'session_id', 'user_message', 'assistant_response']);
      sheet.appendRow(values.map(literal));
    } finally { lock.releaseLock(); }
    return reply('success');
  } catch (_) { return reply('failure'); }
}
```

The endpoint is publicly reachable, but only requests with the shared server-side secret can append rows. The Sheet stays private. Payload fields are server timestamp, random per-page session ID, current question and completed answer, plus the authentication secret (which is never written to the Sheet). No IP, user agent, referrer, cookies, request headers, profile or provider IDs are logged by Ask. Google/Netlify may maintain their own infrastructure logs.

Logging failure never blocks Ask. Remove either Netlify variable to disable it, then redeploy. Periodically delete old conversations you no longer need. Visitors may type personal information into messages; treat these logs accordingly. Script updates require **Deploy → Manage deployments → Edit → New version → Deploy**.
