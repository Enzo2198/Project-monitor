import { ApiProperty } from '@nestjs/swagger';
import {IsIn, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class CreateProductDto {
  @ApiProperty()
  @IsString({
    message: 'name must be string'
  })
  @IsNotEmpty({
    message: 'name should not be null'
  })
  name: string;

  @ApiProperty()
  @IsString({
    message: 'shortName must be string'
  })
  @IsNotEmpty({
    message: 'shortName should not be null'
  })
  shortName: string;

  @ApiProperty()
  @IsString({
    message: 'code must be string'
  })
  @IsNotEmpty({
    message: 'code should not be null'
  })
  code: string;

  @ApiProperty()
  @IsString({
    message: 'description must be string'
  })
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsNumber({
    allowNaN: false,
    allowInfinity: false
  }, {
    message: 'colorId must be number'
  })
  @IsOptional()
  colorId: number;
}

export class UpdateProductDto extends CreateProductDto {}