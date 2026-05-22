import type { IncomingMessage, ServerResponse } from "node:http";
import path from "node:path";
import { pathToFileURL } from "node:url";

let server: { default: { fetch: (request: Request) => Promise<Response> } } | undefined;

async function getServer() {
  if (!server) {
    const serverPath = path.join(process.cwd(), "dist/server/index.js");
    server = await import(pathToFileURL(serverPath).href);
  }
  return server;
}

function toRequest(req: IncomingMessage) {
  const host = req.headers.host ?? "localhost";
  const url = new URL(req.url ?? "/", `https://${host}`);

  return new Request(url.toString(), {
    method: req.method,
    headers: req.headers as HeadersInit,
    body:
      req.method && req.method !== "GET" && req.method !== "HEAD"
        ? req
        : undefined,
  });
}

function pipeResponse(res: Response, out: ServerResponse) {
  out.statusCode = res.status;
  res.headers.forEach((value, key) => {
    out.setHeader(key, value);
  });

  return res.arrayBuffer().then((buffer) => {
    out.end(Buffer.from(buffer));
  });
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  const serverBundle = await getServer();
  const request = toRequest(req);
  const response = await serverBundle.default.fetch(request);
  await pipeResponse(response, res);
}
