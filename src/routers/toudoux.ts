import { Hono } from 'hono';

export const toudouxRouter = new Hono()
  .get('/toudoux', (c) => c.json([]));
