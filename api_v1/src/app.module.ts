import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ColorModule} from "./color/module";
import {EmployeeModule} from "./employee/module";
import {ProductModule} from "./product/module";
import {OrderModule} from "./order/module";
import {CustomerModule} from "./customer/module";

@Module({
  imports: [ColorModule, EmployeeModule, ProductModule, OrderModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
