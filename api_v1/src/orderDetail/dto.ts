import { ApiProperty } from '@nestjs/swagger';
import {IsIn, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class CreateOrderDetailDto {
  @ApiProperty({
    type: 'integer',
    nullable: false
  })
  @IsNumber({
    allowNaN: false,
    allowInfinity: false
  }, {
    message: 'productId must be number'
  })
  @IsNotEmpty({
    message: 'productId should not be null'
  })
  productId: number

  @ApiProperty({
    type: 'integer',
    nullable: false
  })
  @IsNumber({
    allowNaN: false,
    allowInfinity: false
  }, {
    message: 'price should be number'
  })
  @IsNotEmpty({
    message: 'price should not be null'
  })
  price: number

  @ApiProperty({
    type: 'integer',
    nullable: false
  })
  @IsNumber({
    allowNaN: false,
    allowInfinity: false
  }, {
    message: 'quantity should be number'
  })
  @IsNotEmpty({
    message: 'quantity should not be null'
  })
  quantity: number
}

export class UpdateOrderDetailDto extends CreateOrderDetailDto {}