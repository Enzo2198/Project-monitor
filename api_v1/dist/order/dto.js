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
exports.UpdateOrderDto = exports.CreateOrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const dto_1 = require("../orderDetail/dto");
const class_transformer_1 = require("class-transformer");
class OrderDto {
    employeeId;
    comment;
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'integer',
        nullable: false
    }),
    (0, class_validator_1.IsNumber)({
        allowNaN: false,
        allowInfinity: false
    }, {
        message: 'employeeId must be number'
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'employeeId should not be null'
    }),
    __metadata("design:type", Number)
], OrderDto.prototype, "employeeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        nullable: true
    }),
    (0, class_validator_1.IsString)({
        message: 'comment should be string'
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], OrderDto.prototype, "comment", void 0);
class CreateOrderDto extends OrderDto {
    details;
}
exports.CreateOrderDto = CreateOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: dto_1.CreateOrderDetailDto,
        isArray: true,
        minLength: 1
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => dto_1.CreateOrderDetailDto),
    __metadata("design:type", Array)
], CreateOrderDto.prototype, "details", void 0);
class UpdateOrderDto extends OrderDto {
    details;
}
exports.UpdateOrderDto = UpdateOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: dto_1.UpdateOrderDetailDto,
        isArray: true,
        minLength: 1
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => dto_1.UpdateOrderDetailDto),
    __metadata("design:type", Array)
], UpdateOrderDto.prototype, "details", void 0);
//# sourceMappingURL=dto.js.map