import { LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';
export declare class DbpostgresDataSource extends juggler.DataSource implements LifeCycleObserver {
    static dataSourceName: string;
    static readonly defaultConfig: {
        debug: boolean;
        name: string;
        connector: string;
        url: string;
        host: string;
        port: number;
        user: string;
        password: string;
        database: string;
    };
    constructor(dsConfig?: object);
}
