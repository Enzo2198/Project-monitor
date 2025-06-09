import { DataSource } from 'typeorm';
import { ColorEntity } from './entity';
export declare const colorProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<ColorEntity>;
    inject: string[];
}[];
