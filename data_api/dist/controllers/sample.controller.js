"use strict";
// Uncomment these imports to begin using these cool features!
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleController = exports.ResponseRunAccessibilityAuditOnlyForUrl = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const services_1 = require("../services");
// import {inject} from '@loopback/core';
let ResponseRunAccessibilityAuditOnlyForUrl = class ResponseRunAccessibilityAuditOnlyForUrl {
};
tslib_1.__decorate([
    repository_1.property(),
    tslib_1.__metadata("design:type", String)
], ResponseRunAccessibilityAuditOnlyForUrl.prototype, "auditedUrl", void 0);
tslib_1.__decorate([
    repository_1.property(),
    tslib_1.__metadata("design:type", Number)
], ResponseRunAccessibilityAuditOnlyForUrl.prototype, "accessibilityScore", void 0);
tslib_1.__decorate([
    repository_1.property(),
    tslib_1.__metadata("design:type", Boolean)
], ResponseRunAccessibilityAuditOnlyForUrl.prototype, "success", void 0);
tslib_1.__decorate([
    repository_1.property(),
    tslib_1.__metadata("design:type", Object)
], ResponseRunAccessibilityAuditOnlyForUrl.prototype, "friendlyMessage", void 0);
tslib_1.__decorate([
    repository_1.property(),
    tslib_1.__metadata("design:type", Object)
], ResponseRunAccessibilityAuditOnlyForUrl.prototype, "techMessage", void 0);
ResponseRunAccessibilityAuditOnlyForUrl = tslib_1.__decorate([
    repository_1.model()
], ResponseRunAccessibilityAuditOnlyForUrl);
exports.ResponseRunAccessibilityAuditOnlyForUrl = ResponseRunAccessibilityAuditOnlyForUrl;
let SampleController = class SampleController {
    constructor(pageSpeedService) {
        this.pageSpeedService = pageSpeedService;
    }
    async runAccessibilityAuditOnlyForUrl(urlToAudit) {
        var _a, _b;
        const response = {
            auditedUrl: urlToAudit,
            accessibilityScore: 0.0,
            success: true,
            friendlyMessage: null,
            techMessage: null,
        };
        let accessibilityScore = null;
        try {
            // accessibilityScore = await this.pageSpeedService.runAccessibilityAuditOnlyForUrl(urlToAudit);
        }
        catch (error) {
            console.log('SampleController runAccessibilityAuditOnlyForUrl error: ', error);
            response.success = false;
            if ((_b = (_a = error === null || error === void 0 ? void 0 : error.errors) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.message) {
                response.friendlyMessage = error.errors[0].message;
            }
            response.techMessage = error;
            return response;
        }
        response.success = true;
        // response.accessibilityScore = accessibilityScore;
        return response;
    }
};
tslib_1.__decorate([
    rest_1.get('/runAccessibilityAuditOnlyForUrl/{id}', {
        operationId: 'SampleController.runAccessibilityAuditOnlyForUrl',
        responses: {
            '200': {
                description: 'Example access the PageSpeed api Accessibility Audit',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(ResponseRunAccessibilityAuditOnlyForUrl, { includeRelations: false }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.string('urlToAudit')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], SampleController.prototype, "runAccessibilityAuditOnlyForUrl", null);
SampleController = tslib_1.__decorate([
    tslib_1.__param(0, core_1.service(services_1.PageSpeedService)),
    tslib_1.__metadata("design:paramtypes", [services_1.PageSpeedService])
], SampleController);
exports.SampleController = SampleController;
//# sourceMappingURL=sample.controller.js.map