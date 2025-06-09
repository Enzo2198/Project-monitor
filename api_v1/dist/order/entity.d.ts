import { BaseEntity } from '../base/entity';
export declare class OrderEntity extends BaseEntity {
    employeeId: number;
    totalAmount: number;
    deliveryAddress: string;
    paymentStatus: string;
    comment: string;
}
