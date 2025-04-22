import { Hono } from 'hono';
import { showRoutes } from 'hono/dev';
import { compress } from 'hono/compress';
import { logger } from 'hono/logger';
import { requestId } from 'hono/request-id';

import env from './env.ts';
import { toudouxRouter } from './routers/index.ts';

const api = new Hono()
  .use('*', requestId())
  .use('*', logger())
  .use('*', compress())
  .get('/', (c) => c.text('Hello Toudoux !'))
  .route('/', toudouxRouter);

if (env.ENVIRONMENT === 'development') {
  showRoutes(api, {
    verbose: true,
    colorize: true,
  });
}

Deno.serve({
  port: env.PORT,
}, api.fetch);

export default api;
