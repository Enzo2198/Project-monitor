import {Entity, Column, PrimaryGeneratedColumn, Table} from 'typeorm';
import { BaseEntity } from '../base/entity'

@Entity('order_detail')
export class OrderDetailEntity extends BaseEntity {
  @Column({
    name: 'order_id'
  })
  orderId: number

  @Column({
    name: 'product_id'
  })
  productId: number

  @Column()
  price: number

  @Column()
  quantity: number

  @Column()
  amount: number
}