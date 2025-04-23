import { showRoutes } from 'hono/dev';
import { compress } from 'hono/compress';
import { logger as honoLogger } from 'hono/logger';

import config from './utils/config.ts';
import api from './routers/api.ts';
import logger from './utils/logger.ts';

function start() {
  if (config.environment === 'development') {
    showRoutes(api, {
      verbose: true,
      colorize: true,
    });
  }

  if (config.environment !== 'production') {
    api.use('*', honoLogger());
    api.use('*', compress());
  }

  if (config.enableOpenTelemetry) {
    logger.info('🔭 OpenTelemetry tracing is enabled');
  }

  Deno.serve({
    port: config.port,
  }, api.fetch);
}

start();
