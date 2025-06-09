import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { orderProviders } from './providers';
import { OrderService } from './service';
import { OrderController } from "./controller";
import {OrderDetailModule} from "../orderDetail/module";

@Module({
  imports: [DatabaseModule, DatabaseModule, OrderDetailModule],
  providers: [
    ...orderProviders,
    OrderService,
  ],
  controllers: [OrderController]
})
export class OrderModule {}