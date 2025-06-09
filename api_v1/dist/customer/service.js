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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const service_1 = require("../base/service");
let CustomerService = class CustomerService extends service_1.BaseService {
    customerRepository;
    columns = ['id', 'name', 'company_name', 'address', 'description'];
    constructor(customerRepository) {
        super(customerRepository);
        this.customerRepository = customerRepository;
    }
    handleSelect() {
        return this.customerRepository.createQueryBuilder('customer')
            .select([
            'customer.id as id',
            'customer.name as name',
            'customer.address as address',
            'customer.company_name as "companyName"',
            'customer.description as description',
        ]);
    }
};
exports.CustomerService = CustomerService;
exports.CustomerService = CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CUSTOMER_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CustomerService);
//# sourceMappingURL=service.js.map