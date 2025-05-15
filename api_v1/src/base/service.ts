import { Repository } from 'typeorm';
import { BaseEntity } from './entity'
import {NotFoundException} from "@nestjs/common";
import { toCamelCase } from "../utils";

export abstract class BaseService {
  abstract columns: string[]

  protected constructor(private repository: Repository<BaseEntity>) {}

  handleFind(query, condition = {active: true}) {
    query.where(condition)
    return query
  }

  handleSelect() {
    return this.repository.createQueryBuilder().select(this.columns)
  }

  handleOrder(query) {
    query.orderBy({'id': 'asc'})
    return query
  }

  async getList(condition: any = {active: true}) {
    let query = this.handleSelect()
    query = this.handleFind(query, condition)
    query = this.handleOrder(query)
    return (await query.getRawMany()).map(obj => obj);
  }

  async create(data: any) {
    const newData = await this.repository
      .createQueryBuilder()
      .insert()
      .values(data)
      .returning(this.columns.join(', '))
      .execute()

    if (data.length > 1) return toCamelCase(newData.raw)
    return toCamelCase(newData.raw[0])
  }

  async updateOne(id: number, data: any) {
    const newData = await this.repository
      .createQueryBuilder()
      .update()
      .set(data)
      .where("id = :id", { id })
      .returning(this.columns.join(', '))
      .execute()
    if (newData.affected === 0) {
      throw new NotFoundException(`Color with id ${id} not found`);
    }

    return toCamelCase(newData.raw[0])
  }

  softDelete(id: number) {
    return this.updateOne(id, {active: false})
  }
}