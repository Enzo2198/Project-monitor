import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { employeeProviders } from './providers';
import { EmployeeService } from './service';
import { EmployeeController } from './controller'

@Module({
  imports: [DatabaseModule],
  providers: [
    ...employeeProviders,
    EmployeeService,
  ],
  controllers: [EmployeeController]
})
export class EmployeeModule {}