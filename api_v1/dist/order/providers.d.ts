import { DataSource } from 'typeorm';
import { OrderEntity } from './entity';
export declare const orderProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<OrderEntity>;
    inject: string[];
}[];
