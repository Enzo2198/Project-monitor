import { Repository } from 'typeorm';
import { CustomerEntity } from './entity';
import { BaseService } from "../base/service";
export declare class CustomerService extends BaseService {
    private customerRepository;
    columns: string[];
    constructor(customerRepository: Repository<CustomerEntity>);
    handleSelect(): import("typeorm").SelectQueryBuilder<CustomerEntity>;
}
