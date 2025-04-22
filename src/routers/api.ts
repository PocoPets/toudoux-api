import { Hono } from 'hono';
import { compress } from 'hono/compress';
import { logger } from 'hono/logger';
import { requestId } from 'hono/request-id';

import otelRoutePath from '../utils/middlewares/otel-routepath.ts';
import { toudouxRouter } from './toudoux.ts';

const api = new Hono()
  .use('*', otelRoutePath())
  .use('*', requestId())
  .use('*', logger())
  .use('*', compress())
  .get('/', (c) => c.text('Hello Toudoux !'))
  .route('/', toudouxRouter);

export default api;
