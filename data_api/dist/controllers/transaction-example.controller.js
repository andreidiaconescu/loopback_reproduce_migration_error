"use strict";
// Uncomment these imports to begin using these cool features!
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionExampleController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
// import {inject} from '@loopback/core';
let TransactionExampleController = class TransactionExampleController {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async transactionUpdateUser(id) {
        return this.userRepository.transactionUpdateUser(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/transaction-update-user/{id}', {
        responses: {
            '200': {
                description: 'Updated User model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.User, { includeRelations: false }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionExampleController.prototype, "transactionUpdateUser", null);
TransactionExampleController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository])
], TransactionExampleController);
exports.TransactionExampleController = TransactionExampleController;
//# sourceMappingURL=transaction-example.controller.js.map