import { DataSource, Repository } from 'typeorm';
import { OrderEntity } from './entity';
import { BaseService } from "../base/service";
import { CreateOrderDto } from "./dto";
import { OrderDetailService } from "../orderDetail/service";
export declare class OrderService extends BaseService {
    private orderRepository;
    private orderDetailService;
    private dataSource;
    columns: string[];
    constructor(orderRepository: Repository<OrderEntity>, orderDetailService: OrderDetailService, dataSource: DataSource);
    getOrders(): Promise<any>;
    create(orderDto: CreateOrderDto): Promise<any>;
}
