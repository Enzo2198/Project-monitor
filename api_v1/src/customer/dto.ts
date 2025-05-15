import { ApiProperty } from '@nestjs/swagger';
import {IsIn, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class CreateCustomerDto {
  @ApiProperty({
    type: 'string'
  })
  @IsString({
    message: 'name must be string'
  })
  @IsNotEmpty({
    message: 'name should not be null'
  })
  name: string;

  @ApiProperty({
    type: 'string',
    nullable: true
  })
  @IsString({
    message: 'company name must be string'
  })
  @IsOptional()
  companyName: string;

  @ApiProperty({
    type: 'string',
    nullable: true
  })
  @IsString({
    message: 'address must be string'
  })
  @IsOptional()
  address: string;

  @ApiProperty({
    type: 'string',
    nullable: true
  })
  @IsString({
    message: 'description must be string'
  })
  @IsOptional()
  description: string;
}

export class UpdateCustomerDto extends CreateCustomerDto {}