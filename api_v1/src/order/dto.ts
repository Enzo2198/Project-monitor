import {ApiBody, ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsIn,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  minLength,
  ValidateNested
} from "class-validator";
import { CreateOrderDetailDto, UpdateOrderDetailDto } from "../orderDetail/dto";
import {Type} from "class-transformer";

class OrderDto {
  @ApiProperty({
    type: 'integer',
  })
  @IsNumber({
    allowNaN: false,
    allowInfinity: false
  }, {
    message: 'customerId must be number'
  })
  @IsNotEmpty({
    message: 'customerId should not be null'
  })
  customerId: number

  @ApiProperty({
    type: 'string',
    format: 'date',
    example: '2024-02-12',
  })
  @IsISO8601()
  saleDate: string

  @ApiProperty({type: 'string'})
  @IsString({
    message: 'deliveryAddress must be string'
  })
  @IsNotEmpty({
    message: 'deliveryAddress should not be null'
  })
  deliveryAddress: number

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