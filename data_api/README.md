# loopback-poc

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

## Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

## Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application
- `npm run docker:run`: Run this application inside a Docker container

## Tests

```sh
npm test
```

## What's next

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

[![LoopBack](<https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png>)](http://loopback.io/)

## Dump Database when Postgres is running in a docker container

docker exec -it loopback-poc*postgres_db_server_1 pg_dump -c -U postgres loopback_app >loopback_poc*`date +%d.%m.%Y"_"%H.%M.%S`.dump

- where
  - poc_postgres_db_server_1 is the name of the container
  - loopback_app=the name of the database to dump

## Restore Database when Postgres is running in a docker container

cat loopback_poc_21.01.2021_13.32.11.dump | docker exec -i loopback-poc_postgres_db_server_1 psql loopback_app -U postgres

- where
  - loopback_poc_21.01.2021_13.32.11.dump is the name of the dump file
  - poc_postgres_db_server_1 is the name of the container
  - loopback_app=the name of the database to dump

## URL Query for an entity and it's sub-entities

```
curl -X GET "http://127.0.0.1:3000/todo-lists?filter=%7B%0A%20%20%22offset%22%3A%200%2C%0A%20%20%22limit%22%3A%20100%2C%0A%20%20%22skip%22%3A%200%2C%0A%20%20%22fields%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20true%2C%0A%20%20%20%20%22title%22%3A%20true%2C%0A%20%20%20%20%22color%22%3A%20true%0A%20%20%7D%2C%0A%20%20%22include%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22relation%22%3A%20%22todo2s%22%2C%0A%20%20%20%20%20%20%22scope%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22offset%22%3A%200%2C%0A%20%20%20%20%20%20%20%20%22limit%22%3A%20100%2C%0A%20%20%20%20%20%20%20%20%22skip%22%3A%200%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D" -H  "accept: application/json"

where the formatted value of the filter is:
{
  "offset": 0,
  "limit": 100,
  "skip": 0,
  "fields": {
    "id": true,
    "title": true,
    "color": true
  },
  "include": [
    {
      "relation": "todo2s",
      "scope": {
        "offset": 0,
        "limit": 100,
        "skip": 0
      }
    }
  ]
}
```
