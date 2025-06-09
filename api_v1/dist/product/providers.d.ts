import { DataSource } from 'typeorm';
import { ProductEntity } from './entity';
export declare const productProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<ProductEntity>;
    inject: string[];
}[];
