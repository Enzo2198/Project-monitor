import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { orderDetailProviders } from './providers';
import { OrderDetailService } from './service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...orderDetailProviders,
    OrderDetailService,
  ],
  exports: [OrderDetailService]
})
export class OrderDetailModule {}