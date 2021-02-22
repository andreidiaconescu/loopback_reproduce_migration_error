"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let UserRepository = class UserRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.User, dataSource);
    }
    async transactionUpdateUser(id) {
        const transaction = await this.dataSource.beginTransaction(repository_1.IsolationLevel.READ_COMMITTED);
        const foundUser = await this.findOne({
            where: { id },
        });
        if (!foundUser) {
            throw new Error('User with id: ' + id + ' not found');
        }
        console.log('UserRepository transactionUpdateUser process.env.TZ', process.env.TZ);
        const now = new Date();
        console.log('UserRepository transactionUpdateUser now', now);
        foundUser.randomDate = now;
        await this.update(foundUser, { transaction });
        await transaction.commit();
        const upadtedUser = await this.findOne({
            where: { id },
        });
        return upadtedUser;
    }
};
UserRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.dbpostgres')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.DbpostgresDataSource])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map