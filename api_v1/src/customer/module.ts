import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { customerProviders } from './providers';
import { CustomerService } from './service';
import { CustomerController } from './controller'

@Module({
  imports: [DatabaseModule],
  providers: [
    ...customerProviders,
    CustomerService,
  ],
  controllers: [CustomerController]
})
export class CustomerModule {}