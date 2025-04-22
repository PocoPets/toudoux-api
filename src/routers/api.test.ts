import { testClient } from 'hono/testing';
import { describe, it } from '@std/testing/bdd';
import { expect } from '@std/expect';
import api from './api.ts';

describe('Root endpoint', () => {
  const client = testClient(api);

  it('should return hello toudoux', async () => {
    const res = await client.index.$get();

    expect(res.status).toBe(200);
    expect(await res.text()).toEqual('Hello Toudoux !');
  });
});
