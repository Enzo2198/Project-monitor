import { CustomerService } from "./service";
import { CreateCustomerDto, UpdateCustomerDto } from "./dto";
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    get(): Promise<any[]>;
    create(createDto: CreateCustomerDto): Promise<any>;
    update(id: number, updateDto: UpdateCustomerDto): Promise<any>;
    delete(id: number): Promise<any>;
}
