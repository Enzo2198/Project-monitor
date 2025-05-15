import {Entity, Column, PrimaryGeneratedColumn, Table} from 'typeorm';
import { BaseEntity } from '../base/entity'

@Entity('order')
export class OrderEntity extends BaseEntity {
  @Column({
    name: 'employee_id',
  })
  employeeId: number

  @Column({
    name: 'total_amount'
  })
  totalAmount: number

  @Column({
    name: 'delivery_address'
  })
  deliveryAddress: string

  @Column({
    name: 'payment_status'
  })
  paymentStatus: string

  @Column()
  comment: string
}