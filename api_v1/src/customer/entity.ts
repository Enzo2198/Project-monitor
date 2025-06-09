import {Entity, Column, PrimaryGeneratedColumn, Table} from 'typeorm';
import { BaseEntity } from '../base/entity'

@Entity('customer')
export class CustomerEntity extends BaseEntity {
  @Column()
  name: string

  @Column({
    name: 'company_name'
  })
  companyName: string

  @Column()
  address: string

  @Column()
  description: string
}