import { BaseEntity } from '../base/entity';
export declare class OrderEntity extends BaseEntity {
    saleDate: string;
    employeeId: number;
    customerId: number;
    totalAmount: number;
    deliveryAddress: string;
    paymentStatus: string;
    comment: string;
}
