import { Injectable, Inject } from '@nestjs/common';
import {DataSource, Repository} from 'typeorm';
import { OrderEntity } from './entity';
import { BaseService } from "../base/service";
import { EmployeeEntity } from "../employee/entity";
import { CreateOrderDto } from "./dto";
import { OrderDetailService } from "../orderDetail/service";
import { CreateOrderDetailDto } from "../orderDetail/dto";
import { toCamelCase } from "../utils";
import {OrderDetailEntity} from "../orderDetail/entity";

@Injectable()
export class OrderService extends BaseService {

  columns: string[] = ['id', 'employee_id', 'total_amount', 'delivery_address', 'payment_status', 'comment']

  constructor(
    @Inject('ORDER_REPOSITORY')
    private orderRepository: Repository<OrderEntity>,

    private orderDetailService: OrderDetailService,

    @Inject('DATA_SOURCE')
    private dataSource: DataSource
  ) {
    super(orderRepository)
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
    `)

    return dataSource
  }

  // getOrder() {
  //
  // }

  async create(orderDto: CreateOrderDto): Promise<any> {
    console.log(orderDto)
    const order = toCamelCase(await super.create({
      employeeId: orderDto.employeeId,
      comment: orderDto.comment
    }))
    console.log(order)
    // insert order details
    let orderDetails = orderDto.details.map((detail: CreateOrderDetailDto) => {
      return { ...detail, orderId: order.id }
    })
    orderDetails = toCamelCase(await this.orderDetailService.create(orderDetails))

    order.details = orderDetails
    return order
  }
}