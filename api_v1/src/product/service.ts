import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductEntity } from './entity';
import {BaseService} from "../base/service";
import {ColorEntity} from "../color/entity";

@Injectable()
export class ProductService extends BaseService {

  columns: string[] = ['id', 'name', 'short_name', 'code', 'description', 'color_id']

  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<ProductEntity>,
  ) {
    super(productRepository)
  }

  handleSelect() {
    return this.productRepository.createQueryBuilder('product')
      .select([
        'product.id as id',
        'product.name as name',
        'product.short_name as "shortName"',
        'product.code as code',
        'product.description as description',
        `case 
          when color.id is not null 
            then json_build_object('id', color.id, 'name', color.name) 
            else null 
          end as color`
      ])
      .leftJoin(
        ColorEntity, 'color', 'color.id = product.colorId'
      )
  }
}