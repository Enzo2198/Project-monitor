import { BaseEntity } from '../base/entity';
export declare class OrderDetailEntity extends BaseEntity {
    orderId: number;
    productId: number;
    price: number;
    quantity: number;
    amount: number;
}
