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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const service_1 = require("../base/service");
const service_2 = require("../orderDetail/service");
const utils_1 = require("../utils");
let OrderService = class OrderService extends service_1.BaseService {
    orderRepository;
    orderDetailService;
    dataSource;
    columns = ['id', 'employee_id', 'total_amount', 'delivery_address', 'payment_status', 'comment'];
    constructor(orderRepository, orderDetailService, dataSource) {
        super(orderRepository);
        this.orderRepository = orderRepository;
        this.orderDetailService = orderDetailService;
        this.dataSource = dataSource;
    }
    getOrders() {
        const dataSource = this.dataSource.query(`
      with
        order_detail_tmp as (
          select order_detail.id,
                 order_detail.order_id,
                 order_detail.price,
                 order_detail.amount,
                 json_build_object(
                      'id', product.id,
                      'name', product.name
                 ) as product
          from order_detail
          join product on product.id = order_detail.product_id
          where order_detail.active
        )
    
        select
          "order".id,
          "order".delivery_address,
          "order".comment,
          json_agg(
            json_build_object(
              'id', order_detail_tmp.id,
              'product', order_detail_tmp.product,
              'price', order_detail_tmp.price,
              'amount', order_detail_tmp.amount
            )
          ) as details
        
        from "order"
        join order_detail_tmp on "order".id = order_detail_tmp.order_id
        group by "order".id
    `);
        return dataSource;
    }
    async create(orderDto) {
        console.log(orderDto);
        const order = (0, utils_1.toCamelCase)(await super.create({
            employeeId: orderDto.employeeId,
            comment: orderDto.comment
        }));
        console.log(order);
        let orderDetails = orderDto.details.map((detail) => {
            return { ...detail, orderId: order.id };
        });
        orderDetails = (0, utils_1.toCamelCase)(await this.orderDetailService.create(orderDetails));
        order.details = orderDetails;
        return order;
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ORDER_REPOSITORY')),
    __param(2, (0, common_1.Inject)('DATA_SOURCE')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        service_2.OrderDetailService,
        typeorm_1.DataSource])
], OrderService);
//# sourceMappingURL=service.js.map