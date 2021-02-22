"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let User = class User extends repository_1.Entity {
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
], User.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "realm", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        postgresql: {
            columnName: 'email',
            dataType: 'character varying',
            dataLength: 100,
            nullable: 'NO',
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        postgresql: {
            columnName: 'password',
            dataType: 'character varying',
            dataLength: 100,
            nullable: 'NO',
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        postgresql: {
            columnName: 'emailVerified',
            dataType: 'boolean',
            nullable: 'YES',
        },
    }),
    tslib_1.__metadata("design:type", Boolean)
], User.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        postgresql: {
            columnName: 'verificationToken',
            dataType: 'character varying',
            dataLength: 500,
            nullable: 'YES',
        },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "verificationToken", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        postgresql: {
            columnName: 'randomDate',
            dataType: 'TIMESTAMP WITH TIME ZONE',
            nullable: 'YES',
        },
    }),
    tslib_1.__metadata("design:type", Date)
], User.prototype, "randomDate", void 0);
User = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map