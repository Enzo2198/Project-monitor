import { OrderService } from './service';
import { CreateOrderDto, UpdateOrderDto } from "./dto";
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    get(): Promise<any>;
    create(createDto: CreateOrderDto): Promise<any>;
    update(id: number, updateDto: UpdateOrderDto): Promise<any>;
    delete(id: number): Promise<any>;
}
