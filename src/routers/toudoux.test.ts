import { testClient } from 'hono/testing';
import { describe, it } from '@std/testing/bdd';
import { expect } from '@std/expect';
import { toudouxRouter } from './toudoux.ts';

describe('Toudoux endpoints', () => {
  const client = testClient(toudouxRouter);

  describe('GET /toudoux', () => {
    it('should return list of toudoux', async () => {
      const res = await client.toudoux.$get();

      expect(res.status).toBe(200);
      expect(await res.json()).toStrictEqual([]);
    });
  });
});
