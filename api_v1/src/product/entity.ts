import {Entity, Column, PrimaryGeneratedColumn, Table} from 'typeorm';
import { BaseEntity } from '../base/entity'

@Entity('product')
export class ProductEntity extends BaseEntity {
  @Column()
  name: string

  @Column({
    name: 'short_name'
  })
  shortName: string

  @Column()
  code: number

  @Column()
  description: string

  @Column({
    name: 'color_id'
  })
  colorId: number
}