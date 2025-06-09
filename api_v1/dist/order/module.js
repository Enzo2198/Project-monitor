"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database.module");
const providers_1 = require("./providers");
const service_1 = require("./service");
const controller_1 = require("./controller");
const module_1 = require("../orderDetail/module");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, database_module_1.DatabaseModule, module_1.OrderDetailModule],
        providers: [
            ...providers_1.orderProviders,
            service_1.OrderService,
        ],
        controllers: [controller_1.OrderController]
    })
], OrderModule);
//# sourceMappingURL=module.js.map