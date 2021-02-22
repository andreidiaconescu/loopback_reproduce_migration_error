"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let TodoListRepository = class TodoListRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, todo2RepositoryGetter) {
        super(models_1.TodoList, dataSource);
        this.todo2RepositoryGetter = todo2RepositoryGetter;
        this.todo2s = this.createHasManyRepositoryFactoryFor('todo2s', todo2RepositoryGetter);
        this.registerInclusionResolver('todo2s', this.todo2s.inclusionResolver);
    }
    findByTitle(title) {
        return this.findOne({ where: { title } });
    }
    async todoListAndSubEntitiesWithSqlJoin(todoId) {
        const dbData = (await this.execute(`SELECT "tdl"."id" AS todo_list_id, "tdl"."title" as todo_list_title, "tdl"."color" as todo_list_color,
        "td"."id" AS todo_id, "td"."title" AS todo_title, "td"."desc" AS todo_desc, "td"."isComplete" AS todo_is_complete
      FROM "todolist" AS tdl
        INNER JOIN "todo2" AS td ON "tdl"."id"="td"."todoListId"
      WHERE "tdl"."id"=$1`, [todoId]));
        console.log('TodoListRepository todoListAndSubEntitiesWithSqlJoin dbData', dbData);
        let todoList = null;
        const todo2s = [];
        if (Array.isArray(dbData) && dbData.length) {
            let index = -1;
            for (const dbDataItem of dbData) {
                index += 1;
                if (index === 0) {
                    todoList = new models_1.TodoList({
                        id: dbDataItem.todo_list_id,
                        title: dbDataItem.todo_list_title,
                        color: dbDataItem.todo_list_color,
                        todo2s: todo2s,
                    });
                }
                todo2s.push(new models_1.Todo2({
                    id: dbDataItem.todo_id,
                    title: dbDataItem.todo_title,
                    desc: dbDataItem.todo_desc,
                    isComplete: dbDataItem.todo_is_complete,
                }));
            }
        }
        console.log('TodoListRepository todoListAndSubEntitiesWithSqlJoin todoList', todoList);
        return todoList;
    }
};
TodoListRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.dbpostgres')),
    tslib_1.__param(1, repository_1.repository.getter('Todo2Repository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbpostgresDataSource, Function])
], TodoListRepository);
exports.TodoListRepository = TodoListRepository;
//# sourceMappingURL=todo-list.repository.js.map