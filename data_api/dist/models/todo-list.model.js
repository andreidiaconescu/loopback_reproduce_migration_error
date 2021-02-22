"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const todo2_model_1 = require("./todo2.model");
let TodoList = class TodoList extends repository_1.Entity {
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
], TodoList.prototype, "id", void 0);
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
], TodoList.prototype, "title", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        postgresql: {
            columnName: 'color',
            dataType: 'character varying',
            dataLength: 100,
            nullable: 'YES',
        },
    }),
    tslib_1.__metadata("design:type", String)
], TodoList.prototype, "color", void 0);
tslib_1.__decorate([
    repository_1.hasMany(() => todo2_model_1.Todo2),
    tslib_1.__metadata("design:type", Array)
], TodoList.prototype, "todo2s", void 0);
TodoList = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], TodoList);
exports.TodoList = TodoList;
//# sourceMappingURL=todo-list.model.js.map