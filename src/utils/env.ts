import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number()
    .min(1)
    .max(65535)
    .describe('Port number for HTTP server'),
  ENVIRONMENT: z.union([
    z.literal('development'),
    z.literal('production'),
    z.literal('test'),
  ]).default('development')
    .describe('Current environment'),
  OTEL_DENO: z.coerce.boolean()
    .default(true)
    .describe(
      'Enable OpenTelemetry tracing for Deno. To truly disable tracing, change the `deno task dev` command appropriately',
    ),
});

export default envSchema.parse(Deno.env.toObject());
