"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo2TodoListController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let Todo2TodoListController = class Todo2TodoListController {
    constructor(todo2Repository) {
        this.todo2Repository = todo2Repository;
    }
    async getTodoList(id) {
        return this.todo2Repository.todoList(id);
    }
};
tslib_1.__decorate([
    rest_1.get('/todo2s/{id}/todo-list', {
        responses: {
            '200': {
                description: 'TodoList belonging to Todo2',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.TodoList) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Todo2TodoListController.prototype, "getTodoList", null);
Todo2TodoListController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.Todo2Repository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.Todo2Repository])
], Todo2TodoListController);
exports.Todo2TodoListController = Todo2TodoListController;
//# sourceMappingURL=todo-2-todo-list.controller.js.map