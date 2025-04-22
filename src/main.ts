import { showRoutes } from 'hono/dev';

import env from './utils/env.ts';
import api from './routers/api.ts';
import logger from './utils/logger.ts';

function start() {
  if (env.ENVIRONMENT === 'development') {
    showRoutes(api, {
      verbose: true,
      colorize: true,
    });
  }

  if (env.OTEL_DENO === true) {
    logger.info('🔭 OpenTelemetry tracing is enabled');
  }

  Deno.serve({
    port: env.PORT,
  }, api.fetch);
}

start();
