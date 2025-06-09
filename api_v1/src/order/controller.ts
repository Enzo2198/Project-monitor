import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from "@nestjs/common";
import {OrderService} from './service';
import {CreateOrderDto, UpdateOrderDto} from "./dto";

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('/')
  get() {
    return this.orderService.getOrders();
  }

  @Post('')
  create(@Body() createDto: CreateOrderDto) {
    return this.orderService.create(createDto);
  }

  @Put('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateOrderDto) {
    return this.orderService.updateOne(id, updateDto);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.softDelete(id);
  }
}