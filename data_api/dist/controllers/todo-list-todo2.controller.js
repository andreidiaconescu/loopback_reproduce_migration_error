"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoListTodo2Controller = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let TodoListTodo2Controller = class TodoListTodo2Controller {
    constructor(todoListRepository) {
        this.todoListRepository = todoListRepository;
    }
    async find(id, filter) {
        return this.todoListRepository.todo2s(id).find(filter);
    }
    async create(id, todo2) {
        return this.todoListRepository.todo2s(id).create(todo2);
    }
    async patch(id, todo2, where) {
        return this.todoListRepository.todo2s(id).patch(todo2, where);
    }
    async delete(id, where) {
        return this.todoListRepository.todo2s(id).delete(where);
    }
};
tslib_1.__decorate([
    rest_1.get('/todo-lists/{id}/todo2s', {
        responses: {
            '200': {
                description: 'Array of TodoList has many Todo2',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: rest_1.getModelSchemaRef(models_1.Todo2) },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('filter')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListTodo2Controller.prototype, "find", null);
tslib_1.__decorate([
    rest_1.post('/todo-lists/{id}/todo2s', {
        responses: {
            '200': {
                description: 'TodoList model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Todo2) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Todo2, {
                    title: 'NewTodo2InTodoList',
                    exclude: ['id'],
                    optional: ['todoListId'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListTodo2Controller.prototype, "create", null);
tslib_1.__decorate([
    rest_1.patch('/todo-lists/{id}/todo2s', {
        responses: {
            '200': {
                description: 'TodoList.Todo2 PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Todo2, { partial: true }),
            },
        },
    })),
    tslib_1.__param(2, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Todo2))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListTodo2Controller.prototype, "patch", null);
tslib_1.__decorate([
    rest_1.del('/todo-lists/{id}/todo2s', {
        responses: {
            '200': {
                description: 'TodoList.Todo2 DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Todo2))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TodoListTodo2Controller.prototype, "delete", null);
TodoListTodo2Controller = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.TodoListRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TodoListRepository])
], TodoListTodo2Controller);
exports.TodoListTodo2Controller = TodoListTodo2Controller;
//# sourceMappingURL=todo-list-todo2.controller.js.map