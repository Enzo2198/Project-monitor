import { Repository } from 'typeorm';
import { ProductEntity } from './entity';
import { BaseService } from "../base/service";
export declare class ProductService extends BaseService {
    private productRepository;
    columns: string[];
    constructor(productRepository: Repository<ProductEntity>);
    handleSelect(): import("typeorm").SelectQueryBuilder<ProductEntity>;
}
