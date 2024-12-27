import { createServer } from 'node:http';
import { parse } from 'node:url';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const hostname = process.env.hostname ?? 'lefog.xyz'
const port = process.env.port ?? 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

async function start() {
  try {
    await app.prepare();
    createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error('Error occurred handling', req.url, err);
        res.statusCode = 500;
        res.end('Error 500: Internal Server Error')
      }
    }).listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
  } catch (err) {
    console.error('Error occurred starting the server', err);
  }
}

start();

