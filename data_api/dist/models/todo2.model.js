"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo2 = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const todo_list_model_1 = require("./todo-list.model");
let Todo2 = class Todo2 extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: true,
        postgresql: {
            columnName: 'id',
            dataType: 'uuid',
            nullable: 'NO',
        },
    }),
    tslib_1.__metadata("design:type", String)
], Todo2.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        postgresql: {
            columnName: 'title',
            dataType: 'character varying',
            dataLength: 500,
            nullable: 'NO',
        },
    }),
    tslib_1.__metadata("design:type", String)
], Todo2.prototype, "title", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        postgresql: {
            columnName: 'desc',
            dataType: 'character varying',
            dataLength: 500,
            nullable: 'YES',
        },
    }),
    tslib_1.__metadata("design:type", String)
], Todo2.prototype, "desc", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        postgresql: {
            columnName: 'isComplete',
            dataType: 'boolean',
            nullable: 'YES',
        },
    }),
    tslib_1.__metadata("design:type", Boolean)
], Todo2.prototype, "isComplete", void 0);
tslib_1.__decorate([
    repository_1.belongsTo(() => todo_list_model_1.TodoList, undefined, {
        type: 'string',
        postgresql: {
            columnName: 'todoListId',
            dataType: 'uuid',
            nullable: 'NO',
        },
    }),
    tslib_1.__metadata("design:type", String)
], Todo2.prototype, "todoListId", void 0);
Todo2 = tslib_1.__decorate([
    repository_1.model({
        settings: {
            foreignKeys: {
                fk_todo2_todolist: {
                    name: 'fk_todo2_todolist',
                    entity: 'TodoList',
                    entityKey: 'id',
                    foreignKey: 'todoListId',
                },
            },
        },
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Todo2);
exports.Todo2 = Todo2;
//# sourceMappingURL=todo2.model.js.map