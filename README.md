# Toudoux API

## Setup

This project requires Deno.
Install Deno by following the instructions on the [Deno website](https://docs.deno.com/runtime/#install-deno).

## Development

- Copy `sample.env` to `.env` and fill in the values if necessary.
- Run `deno task dev` to start the development server.
- Run `deno task test` to run the tests.
- View other available tasks by running `deno task`.

## OpenTelemetry

- Run `deno task lgtm` to start a local instance of Grafana, Prometheus, and Loki.
- Make sure the OTEL_DENO environment variable is set to `true`.
- You should now be able to access the Grafana dashboard at http://localhost:3000.
- You can view the logs [here](http://localhost:3000/a/grafana-lokiexplore-app/explore/service/unknown_service/logs?patterns=%5B%5D&from=now-30m&to=now&var-ds=loki&var-filters=service_name%7C%3D%7Cunknown_service&var-fields=&var-levels=&var-metadata=&var-patterns=&var-lineFilterV2=&var-lineFilters=&timezone=browser&var-all-fields=&urlColumns=%5B%5D&visualizationType=%22logs%22&displayedFields=%5B%5D&sortOrder=%22Descending%22&wrapLogMessage=false), the traces [here](http://localhost:3000/explore?schemaVersion=1&panes=%7B%223xo%22%3A%7B%22datasource%22%3A%22tempo%22%2C%22queries%22%3A%5B%7B%22refId%22%3A%22A%22%2C%22datasource%22%3A%7B%22type%22%3A%22tempo%22%2C%22uid%22%3A%22tempo%22%7D%2C%22queryType%22%3A%22traceqlSearch%22%2C%22limit%22%3A20%2C%22tableType%22%3A%22traces%22%2C%22filters%22%3A%5B%7B%22id%22%3A%22f558fbc3%22%2C%22operator%22%3A%22%3D%22%2C%22scope%22%3A%22span%22%7D%5D%7D%5D%2C%22range%22%3A%7B%22from%22%3A%22now-1h%22%2C%22to%22%3A%22now%22%7D%7D%7D&orgId=1), and the metrics [here](http://localhost:3000/explore/metrics/trail?from=now-1h&to=now&timezone=browser&var-ds=prometheus&var-deployment_environment=&var-otel_resources=&var-filters=&metricPrefix=all)
