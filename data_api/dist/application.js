"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoopbackPocApplication = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
const boot_1 = require("@loopback/boot");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const rest_explorer_1 = require("@loopback/rest-explorer");
const service_proxy_1 = require("@loopback/service-proxy");
const path_1 = tslib_1.__importDefault(require("path"));
const datasources_1 = require("./datasources");
const repositories_1 = require("./repositories");
const sequence_1 = require("./sequence");
const custom_user_service_1 = require("./services/custom-user.service");
class LoopbackPocApplication extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Set up default home page
        this.static('/', path_1.default.join(__dirname, '../public'));
        // Customize @loopback/rest-explorer configuration here
        this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
        // Mount authentication system
        this.component(authentication_1.AuthenticationComponent);
        // Mount jwt component
        this.component(authentication_jwt_1.JWTAuthenticationComponent);
        // Bind datasource
        // this.dataSource(DbDataSource, UserServiceBindings.DATASOURCE_NAME);
        this.dataSource(datasources_1.DbpostgresDataSource, authentication_jwt_1.UserServiceBindings.DATASOURCE_NAME);
        // Bind user service
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.bind(authentication_jwt_1.UserServiceBindings.USER_SERVICE).toClass(custom_user_service_1.CustomUserService);
        // Bind user and credentials repository
        this.bind(authentication_jwt_1.UserServiceBindings.USER_REPOSITORY).toClass(repositories_1.UserRepository);
    }
}
exports.LoopbackPocApplication = LoopbackPocApplication;
//# sourceMappingURL=application.js.map