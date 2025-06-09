import { Repository } from 'typeorm';
import { BaseEntity } from './entity';
export declare abstract class BaseService {
    private repository;
    abstract columns: string[];
    protected constructor(repository: Repository<BaseEntity>);
    handleFind(query: any, condition?: {
        active: boolean;
    }): any;
    handleSelect(): import("typeorm").SelectQueryBuilder<BaseEntity>;
    handleOrder(query: any): any;
    getList(condition?: any): Promise<any[]>;
    create(data: any): Promise<any>;
    updateOne(id: number, data: any): Promise<any>;
    softDelete(id: number): Promise<any>;
}
