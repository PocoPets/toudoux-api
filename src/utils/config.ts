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
  OTEL_DENO: z.union([
    z.literal('true'),
    z.literal('false'),
  ]).default('false')
    .transform((value) => value === 'true')
    .describe(
      'Enable OpenTelemetry tracing for Deno. To truly disable tracing, change the `deno task dev` command appropriately',
    ),
});

const env = envSchema.parse(Deno.env.toObject());

const config = {
  port: env.PORT,
  environment: env.ENVIRONMENT,
  enableOpenTelemetry: env.OTEL_DENO,
};

export default config;
