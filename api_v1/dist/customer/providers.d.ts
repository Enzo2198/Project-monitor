import { DataSource } from 'typeorm';
import { CustomerEntity } from './entity';
export declare const customerProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<CustomerEntity>;
    inject: string[];
}[];
