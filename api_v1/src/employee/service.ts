import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EmployeeEntity } from './entity';
import {BaseService} from "../base/service";

@Injectable()
export class EmployeeService extends BaseService {

  columns: string[] = ['id', 'name', 'age', 'salary', 'address', 'address', 'position', 'status']

  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private employeeRepository: Repository<EmployeeEntity>,
  ) {
    super(employeeRepository)
  }

  handleSelect() {
    return this.employeeRepository.createQueryBuilder()
      .select(this.columns)
  }

}