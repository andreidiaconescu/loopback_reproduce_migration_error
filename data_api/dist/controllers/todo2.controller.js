"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo2Controller = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let Todo2Controller = class Todo2Controller {
    constructor(todo2Repository) {
        this.todo2Repository = todo2Repository;
    }
    async create(todo2) {
        return this.todo2Repository.create(todo2);
    }
    async count(where) {
        return this.todo2Repository.count(where);
    }
    async find(filter) {
        return this.todo2Repository.find(filter);
    }
    async updateAll(todo2, where) {
        return this.todo2Repository.updateAll(todo2, where);
    }
    async findById(id, filter) {
        return this.todo2Repository.findById(id, filter);
    }
    async updateById(id, todo2) {
        await this.todo2Repository.updateById(id, todo2);
    }
    async replaceById(id, todo2) {
        await this.todo2Repository.replaceById(id, todo2);
    }
    async deleteById(id) {
        await this.todo2Repository.deleteById(id);
    }
    async findByCompleteStatus(completeStatus, filter) {
        return this.todo2Repository.findByCompleteStatus(completeStatus, filter);
    }
    async findByCompleteStatusWithSql(completeStatus, filter) {
        return this.todo2Repository.findByCompleteStatusWithSql(completeStatus, filter);
    }
};
tslib_1.__decorate([
    rest_1.post('/todo2s', {
        responses: {
            '200': {
                description: 'Todo2 model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Todo2) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Todo2, {
                    title: 'NewTodo2',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Todo2Controller.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/todo2s/count', {
        responses: {
            '200': {
                description: 'Todo2 model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Todo2)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Todo2Controller.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/todo2s', {
        responses: {
            '200': {
                description: 'Array of Todo2 model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Todo2, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Todo2)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Todo2Controller.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/todo2s', {
        responses: {
            '200': {
                description: 'Todo2 PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Todo2, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Todo2)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Todo2, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Todo2Controller.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/todo2s/{id}', {
        responses: {
            '200': {
                description: 'Todo2 model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Todo2, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Todo2, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Todo2Controller.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/todo2s/{id}', {
        responses: {
            '204': {
                description: 'Todo2 PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Todo2, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Todo2]),
    tslib_1.__metadata("design:returntype", Promise)
], Todo2Controller.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/todo2s/{id}', {
        responses: {
            '204': {
                description: 'Todo2 PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')), tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Todo2]),
    tslib_1.__metadata("design:returntype", Promise)
], Todo2Controller.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/todo2s/{id}', {
        responses: {
            '204': {
                description: 'Todo2 DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], Todo2Controller.prototype, "deleteById", null);
tslib_1.__decorate([
    rest_1.get('/todo2s/findByCompleteStatus/{completeStatus}', {
        responses: {
            '200': {
                description: 'Array of Todo2 models instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Todo2, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.boolean('completeStatus')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Todo2, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Boolean, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Todo2Controller.prototype, "findByCompleteStatus", null);
tslib_1.__decorate([
    rest_1.get('/todo2s/findByCompleteStatusWithSql/{completeStatus}', {
        responses: {
            '200': {
                description: 'Array of Todo2 models instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Todo2, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.boolean('completeStatus')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Todo2, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Boolean, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Todo2Controller.prototype, "findByCompleteStatusWithSql", null);
Todo2Controller = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.Todo2Repository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.Todo2Repository])
], Todo2Controller);
exports.Todo2Controller = Todo2Controller;
//# sourceMappingURL=todo2.controller.js.map