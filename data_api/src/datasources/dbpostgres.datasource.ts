import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  debug: true,
  name: 'dbpostgres',
  connector: 'postgresql',
  url: 'postgres://postgres:zA0re2lCoO+x@postgres_db_server:5432/loopback_app',
  host: 'postgres_db_server',
  port: 5432,
  user: 'postgres',
  password: 'zA0re2lCoO+x',
  database: 'loopback_app'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbpostgresDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dbpostgres';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dbpostgres', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
