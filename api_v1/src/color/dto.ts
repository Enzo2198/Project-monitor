import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty, IsString} from "class-validator";

export class CreateColorDto {
  @ApiProperty()
  @IsString({
    message: 'name have to be number'
  })
  @IsNotEmpty({
    message: 'name should not be null'
  })
  name: string;
}

export class UpdateColorDto extends CreateColorDto {}