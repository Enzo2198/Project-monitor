import { Repository } from 'typeorm';
import { OrderDetailEntity } from './entity';
import { BaseService } from "../base/service";
export declare class OrderDetailService extends BaseService {
    private orderDetailRepository;
    columns: string[];
    constructor(orderDetailRepository: Repository<OrderDetailEntity>);
}
