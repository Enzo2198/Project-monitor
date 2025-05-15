import { ApiProperty } from '@nestjs/swagger';
import {IsIn, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {IsNull} from "typeorm";

export class CreateEmployeeDto {
  @ApiProperty()
  @IsString({
    message: 'name must be string'
  })
  @IsNotEmpty({
    message: 'name should not be null'
  })
  name: string;

  @ApiProperty()
  @IsNumber({
    allowNaN: false,
    allowInfinity: false
  }, {
    message: 'age must be number'
  })
  @IsOptional()
  age: number;

  @ApiProperty()
  @IsNumber({
    allowNaN: false,
    allowInfinity: false
  }, {
    message: 'salary must be number'
  })
  salary: number;

  @ApiProperty()
  @IsString({
    message: 'address must be string'
  })
  @IsOptional()
  address: string;

  @ApiProperty({
    enum: ['saler', 'director', 'accountant']
  })
  @IsString({
    message: 'position must be string',
  })
  @IsIn(['saler', 'director', 'accountant'], {
    message: 'position must be one of: saler, director, accountant',
  })
  position: string;

  @ApiProperty()
  @IsString({
    message: 'status must be string'
  })
  @IsOptional()
  status: string;
}

export class UpdateEmployeeDto extends CreateEmployeeDto {}