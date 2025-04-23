import { createMiddleware } from 'hono/factory';
import { trace } from '@opentelemetry/api';

import config from '../config.ts';
import logger from '../logger.ts';

// OpenTelemetry middleware adding route paths to spans (https://docs.deno.com/runtime/fundamentals/open_telemetry/)
export default () =>
  createMiddleware(async (c, next) => {
    await next();
    if (!config.enableOpenTelemetry) return;

    const { method, routePath } = c.req;
    const span = trace.getActiveSpan();
    if (!span) {
      return logger.warn('Active span not found', { routePath });
    }

    span.setAttribute('http.route', routePath);
    span.updateName(`${method} ${routePath}`);
  });
