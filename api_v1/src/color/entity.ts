import {Entity, Column, PrimaryGeneratedColumn, Table} from 'typeorm';
import { BaseEntity } from '../base/entity'

@Entity('color')
export class ColorEntity extends BaseEntity {
  @Column()
  name: string;
}