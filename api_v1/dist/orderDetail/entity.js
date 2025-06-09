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
exports.OrderDetailEntity = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("../base/entity");
let OrderDetailEntity = class OrderDetailEntity extends entity_1.BaseEntity {
    orderId;
    productId;
    price;
    quantity;
    amount;
};
exports.OrderDetailEntity = OrderDetailEntity;
__decorate([
    (0, typeorm_1.Column)({
        name: 'order_id'
    }),
    __metadata("design:type", Number)
], OrderDetailEntity.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'product_id'
    }),
    __metadata("design:type", Number)
], OrderDetailEntity.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderDetailEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderDetailEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderDetailEntity.prototype, "amount", void 0);
exports.OrderDetailEntity = OrderDetailEntity = __decorate([
    (0, typeorm_1.Entity)('order_detail')
], OrderDetailEntity);
//# sourceMappingURL=entity.js.map