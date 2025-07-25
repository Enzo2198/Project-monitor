import { CreateOrderDetailDto, UpdateOrderDetailDto } from "../orderDetail/dto";
declare class OrderDto {
    customerId: number;
    saleDate: string;
    deliveryAddress: number;
    employeeId: number;
    comment: string;
}
export declare class CreateOrderDto extends OrderDto {
    details: CreateOrderDetailDto[];
}
export declare class UpdateOrderDto extends OrderDto {
    details: UpdateOrderDetailDto[];
}
export {};
