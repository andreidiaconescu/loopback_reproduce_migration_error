# loopback_reproduce_migration_error
# steps to reproduce:
1. docker-compose -f docker-compose.development.yml build
2. docker-compose -f docker-compose.development.yml up

relevant Output:
```
.......
data_api_1            | Cannot start the application. Error: Cannot migrate models not attached to this datasource: TodoList Todo2
data_api_1            |     at /home/node/app/node_modules/loopback-datasource-juggler/lib/datasource.js:1146:12
data_api_1            |     at processTicksAndRejections (internal/process/task_queues.js:75:11)
.......
```
