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
exports.BaseEntity = void 0;
const typeorm_1 = require("typeorm");
class BaseEntity {
    id;
    createdAt;
    createdBy;
    modifiedAt;
    modifiedBy;
    deletedAt;
    deletedBy;
    active;
}
exports.BaseEntity = BaseEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BaseEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        nullable: true,
        default: () => "CURRENT_TIMESTAMP(6)"
    }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_by',
        nullable: true
    }),
    __metadata("design:type", Number)
], BaseEntity.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'modified_at',
        nullable: true
    }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "modifiedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'modified_by',
        nullable: true
    }),
    __metadata("design:type", Number)
], BaseEntity.prototype, "modifiedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'deleted_at',
        nullable: true
    }),
    __metadata("design:type", Date)
], BaseEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'deleted_by',
        nullable: true
    }),
    __metadata("design:type", Number)
], BaseEntity.prototype, "deletedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: true
    }),
    __metadata("design:type", Boolean)
], BaseEntity.prototype, "active", void 0);
//# sourceMappingURL=entity.js.map