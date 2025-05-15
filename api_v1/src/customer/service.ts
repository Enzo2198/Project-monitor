import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CustomerEntity } from './entity';
import { BaseService } from "../base/service";

@Injectable()
export class CustomerService extends BaseService {

  columns: string[] = ['id', 'name', 'company_name', 'address', 'description']

  constructor(
    @Inject('CUSTOMER_REPOSITORY')
    private customerRepository: Repository<CustomerEntity>,
  ) {
    super(customerRepository)
  }

  handleSelect() {
    return this.customerRepository.createQueryBuilder('customer')
      .select([
        'customer.id as id',
        'customer.name as name',
        'customer.address as address',
        'customer.company_name as "companyName"',
        'customer.description as description',
      ])
  }
}