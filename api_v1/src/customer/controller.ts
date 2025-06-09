import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from "@nestjs/common";
import {CustomerService} from "./service";
import {CreateCustomerDto, UpdateCustomerDto} from "./dto";

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('/')
  get() {
    return this.customerService.getList();
  }

  @Post('')
  create(@Body() createDto: CreateCustomerDto) {
    return this.customerService.create(createDto);
  }

  @Put('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateCustomerDto) {
    return this.customerService.updateOne(id, updateDto);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.softDelete(id);
  }
}