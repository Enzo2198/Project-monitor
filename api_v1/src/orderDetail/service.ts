import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrderDetailEntity } from './entity';
import { BaseService } from "../base/service";

@Injectable()
export class OrderDetailService extends BaseService {

  columns: string[] = ['id', 'order_id', 'product_id', 'price', 'quantity', 'amount']

  constructor(
    @Inject('ORDER_DETAIL_REPOSITORY')
    private orderDetailRepository: Repository<OrderDetailEntity>,
  ) {
    super(orderDetailRepository)
  }
}