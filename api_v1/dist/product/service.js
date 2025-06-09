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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const service_1 = require("../base/service");
const entity_1 = require("../color/entity");
let ProductService = class ProductService extends service_1.BaseService {
    productRepository;
    columns = ['id', 'name', 'short_name', 'code', 'description', 'color_id'];
    constructor(productRepository) {
        super(productRepository);
        this.productRepository = productRepository;
    }
    handleSelect() {
        return this.productRepository.createQueryBuilder('product')
            .select([
            'product.id as id',
            'product.name as name',
            'product.short_name as "shortName"',
            'product.code as code',
            'product.description as description',
            `case 
          when color.id is not null 
            then json_build_object('id', color.id, 'name', color.name) 
            else null 
          end as color`
        ])
            .leftJoin(entity_1.ColorEntity, 'color', 'color.id = product.colorId');
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PRODUCT_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProductService);
//# sourceMappingURL=service.js.map