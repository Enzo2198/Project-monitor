import {ApiBody, ApiProperty } from '@nestjs/swagger';
import {IsArray, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, minLength, ValidateNested} from "class-validator";
import { CreateOrderDetailDto, UpdateOrderDetailDto } from "../orderDetail/dto";
import {Type} from "class-transformer";

class OrderDto {
  @ApiProperty({
    type: 'integer',
    nullable: false
  })
  @IsNumber({
    allowNaN: false,
    allowInfinity: false
  }, {
    message: 'employeeId must be number'
  })
  @IsNotEmpty({
    message: 'employeeId should not be null'
  })
  employeeId: number

  @ApiProperty({
    type: 'string',
    nullable: true
  })
  @IsString({
    message: 'comment should be string'
  })
  @IsOptional()
  comment: string
}

export class CreateOrderDto extends OrderDto {
  @ApiProperty({
    type: CreateOrderDetailDto,
    isArray: true,
    minLength: 1
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderDetailDto)
  details: CreateOrderDetailDto[];
}

export class UpdateOrderDto extends OrderDto {
  @ApiProperty({
    type: UpdateOrderDetailDto,
    isArray: true,
    minLength: 1
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateOrderDetailDto)
  details: UpdateOrderDetailDto[];
}