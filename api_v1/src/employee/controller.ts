import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from "@nestjs/common";
import {EmployeeService} from "./service";
import {CreateEmployeeDto, UpdateEmployeeDto} from "./dto";

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('/')
  get() {
    return this.employeeService.getList();
  }

  @Post('')
  create(@Body() createDto: CreateEmployeeDto) {
    console.log(createDto)
    return this.employeeService.create(createDto);
  }

  @Put('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateEmployeeDto) {
    console.log(updateDto)
    return this.employeeService.updateOne(id, updateDto);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.employeeService.softDelete(id);
  }
}