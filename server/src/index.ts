
import { initTRPC } from '@trpc/server';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import 'dotenv/config';
import cors from 'cors';
import superjson from 'superjson';
import { getHelloPage } from './handlers/get_hello_page';

const t = initTRPC.create({
  transformer: superjson,
});

const publicProcedure = t.procedure;
const router = t.router;

const appRouter = router({
  healthcheck: publicProcedure.query(() => {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }),
  getHelloPage: publicProcedure
    .query(() => getHelloPage()),
});

export type AppRouter = typeof appRouter;

async function start() {
  const port = process.env['SERVER_PORT'] || 2022;
  const server = createHTTPServer({
    middleware: (req, res, next) => {
      // Handle HTML page requests
      if (req.url === '/' || req.url === '/hello') {
        getHelloPage().then(pageResponse => {
          res.writeHead(200, { 'Content-Type': pageResponse.contentType });
          res.end(pageResponse.html);
        }).catch(err => {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        });
        return;
      }
      cors()(req, res, next);
    },
    router: appRouter,
    createContext() {
      return {};
    },
  });
  server.listen(port);
  console.log(`Server listening at port: ${port}`);
  console.log(`Visit http://localhost:${port}/ to see the hello button page`);
}

start();
