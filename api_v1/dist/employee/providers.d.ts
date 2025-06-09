import { DataSource } from 'typeorm';
import { EmployeeEntity } from './entity';
export declare const employeeProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<EmployeeEntity>;
    inject: string[];
}[];
