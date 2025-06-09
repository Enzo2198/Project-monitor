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
exports.UpdateEmployeeDto = exports.CreateEmployeeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateEmployeeDto {
    name;
    age;
    salary;
    address;
    position;
    status;
}
exports.CreateEmployeeDto = CreateEmployeeDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({
        message: 'name must be string'
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'name should not be null'
    }),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)({
        allowNaN: false,
        allowInfinity: false
    }, {
        message: 'age must be number'
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateEmployeeDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)({
        allowNaN: false,
        allowInfinity: false
    }, {
        message: 'salary must be number'
    }),
    __metadata("design:type", Number)
], CreateEmployeeDto.prototype, "salary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({
        message: 'address must be string'
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: ['saler', 'director', 'accountant']
    }),
    (0, class_validator_1.IsString)({
        message: 'position must be string',
    }),
    (0, class_validator_1.IsIn)(['saler', 'director', 'accountant'], {
        message: 'position must be one of: saler, director, accountant',
    }),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({
        message: 'status must be string'
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEmployeeDto.prototype, "status", void 0);
class UpdateEmployeeDto extends CreateEmployeeDto {
}
exports.UpdateEmployeeDto = UpdateEmployeeDto;
//# sourceMappingURL=dto.js.map