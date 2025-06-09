"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderEntity = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../base/entity");
let OrderEntity = class OrderEntity extends entity_1.BaseEntity {
    employeeId;
    totalAmount;
    deliveryAddress;
    paymentStatus;
    comment;
};
exports.OrderEntity = OrderEntity;
__decorate([
    (0, typeorm_1.Column)({
        name: 'employee_id',
    }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "employeeId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'total_amount'
    }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "totalAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'delivery_address'
    }),
    __metadata("design:type", String)
], OrderEntity.prototype, "deliveryAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'payment_status'
    }),
    __metadata("design:type", String)
], OrderEntity.prototype, "paymentStatus", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderEntity.prototype, "comment", void 0);
exports.OrderEntity = OrderEntity = __decorate([
    (0, typeorm_1.Entity)('order')
], OrderEntity);
//# sourceMappingURL=entity.js.map