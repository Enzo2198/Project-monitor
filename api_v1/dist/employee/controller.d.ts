import { EmployeeService } from "./service";
import { CreateEmployeeDto, UpdateEmployeeDto } from "./dto";
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    get(): Promise<any[]>;
    create(createDto: CreateEmployeeDto): Promise<any>;
    update(id: number, updateDto: UpdateEmployeeDto): Promise<any>;
    delete(id: number): Promise<any>;
}
