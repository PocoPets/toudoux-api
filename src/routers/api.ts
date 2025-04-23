import { Hono } from 'hono';

import otelRoutePath from '../utils/middlewares/otel-routepath.ts';
import { toudouxRouter } from './toudoux.ts';

const api = new Hono()
  .use('*', otelRoutePath())
  .get('/', (c) => c.text('Hello Toudoux !'))
  .route('/', toudouxRouter);

export default api;
