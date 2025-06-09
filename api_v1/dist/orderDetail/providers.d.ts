import { DataSource } from 'typeorm';
import { OrderDetailEntity } from './entity';
export declare const orderDetailProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<OrderDetailEntity>;
    inject: string[];
}[];
