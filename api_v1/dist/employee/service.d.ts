import { Repository } from 'typeorm';
import { EmployeeEntity } from './entity';
import { BaseService } from "../base/service";
export declare class EmployeeService extends BaseService {
    private employeeRepository;
    columns: string[];
    constructor(employeeRepository: Repository<EmployeeEntity>);
    handleSelect(): import("typeorm").SelectQueryBuilder<EmployeeEntity>;
}
