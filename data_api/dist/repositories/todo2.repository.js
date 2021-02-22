"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo2Repository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let Todo2Repository = class Todo2Repository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, todoListRepositoryGetter) {
        super(models_1.Todo2, dataSource);
        this.todoListRepositoryGetter = todoListRepositoryGetter;
        this.todoList = this.createBelongsToAccessorFor('todoList', todoListRepositoryGetter);
        this.registerInclusionResolver('todoList', this.todoList.inclusionResolver);
    }
    async findByCompleteStatus(completeStatus, filter) {
        return this.find({ where: { isComplete: { eq: completeStatus } }, limit: 100 });
    }
    async findByCompleteStatusWithSql(completeStatus, filter) {
        return this.execute('SELECT * FROM todo2 WHERE "isComplete"=$1 LIMIT 100', [
            completeStatus,
        ]);
    }
};
Todo2Repository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.dbpostgres')),
    tslib_1.__param(1, repository_1.repository.getter('TodoListRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbpostgresDataSource, Function])
], Todo2Repository);
exports.Todo2Repository = Todo2Repository;
//# sourceMappingURL=todo2.repository.js.map