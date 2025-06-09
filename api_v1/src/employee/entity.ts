import {Entity, Column, PrimaryGeneratedColumn, Table} from 'typeorm';
import { BaseEntity } from '../base/entity'

@Entity('employee')
export class EmployeeEntity extends BaseEntity {
  @Column()
  name: string

  @Column()
  age: number

  @Column()
  address: string

  @Column()
  salary: number

  @Column()
  position: string

  @Column()
  status: string
}