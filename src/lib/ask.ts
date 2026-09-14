// Shared SSE framing only. No profile, credentials or server instructions here.
export async function* readEvents(body: ReadableStream<Uint8Array>) {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  try {
    while (true) {
      const { value, done } = await reader.read();
      buffer += decoder.decode(value, { stream: !done });
      let boundary: RegExpExecArray | null;
      while ((boundary = /\r?\n\r?\n/.exec(buffer))) {
        const frame = buffer.slice(0, boundary.index);
        buffer = buffer.slice(boundary.index + boundary[0].length);
        const data = frame.split(/\r?\n/).filter(line => line.startsWith('data:'))
          .map(line => line.slice(5).trimStart()).join('\n');
        if (data && data !== '[DONE]') yield JSON.parse(data) as { type: string; delta?: string };
      }
      if (done) break;
    }
  } finally {
    await reader.cancel().catch(() => {});
    reader.releaseLock();
  }
}
