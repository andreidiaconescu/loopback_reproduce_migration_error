"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const tslib_1 = require("tslib");
const application_1 = require("./application");
const repositories_1 = require("./repositories");
tslib_1.__exportStar(require("./application"), exports);
async function main(options = {}) {
    const app = new application_1.LoopbackPocApplication(options);
    await app.boot();
    const todoRepo = await app.getRepository(repositories_1.Todo2Repository);
    await todoRepo.execute(`SET TIME ZONE 'Europe/London'`);
    await todoRepo.execute('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await app.migrateSchema({ existingSchema: 'alter', models: ['TodoList', 'Todo2'] });
    // await app.migrateSchema({existingSchema: 'alter'});
    await app.start();
    const url = app.restServer.url;
    console.log(`Server is running at ${url}`);
    console.log(`Try ${url}/ping`);
    return app;
}
exports.main = main;
if (require.main === module) {
    // Run the application
    const config = {
        rest: {
            port: +((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000),
            host: process.env.HOST,
            // The `gracePeriodForClose` provides a graceful close for http/https
            // servers with keep-alive clients. The default value is `Infinity`
            // (don't force-close). If you want to immediately destroy all sockets
            // upon stop, set its value to `0`.
            // See https://www.npmjs.com/package/stoppable
            gracePeriodForClose: 5000,
            openApiSpec: {
                // useful when used with OpenAPI-to-GraphQL to locate your application
                setServersFromRequest: true,
            },
        },
    };
    main(config).catch(err => {
        console.error('Cannot start the application.', err);
        process.exit(1);
    });
}
//# sourceMappingURL=index.js.map