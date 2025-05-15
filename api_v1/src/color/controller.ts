import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from "@nestjs/common";
import {ColorService} from "./service";
import {CreateColorDto, UpdateColorDto} from "./dto";

@Controller('colors')
export class ColorController {
  constructor(private readonly colorService: ColorService) {}

  @Get('/')
  getColor() {
    return this.colorService.getList();
  }

  @Post('')
  createColor(@Body() createColorDto: CreateColorDto) {
    return this.colorService.create(createColorDto);
  }

  @Put('/:id')
  updateColor(@Param('id', ParseIntPipe) id: number, @Body() updateColorDto: UpdateColorDto) {
    return this.colorService.updateOne(id, updateColorDto);
  }

  @Delete('/:id')
  deleteColor(@Param('id', ParseIntPipe) id: number) {
    return this.colorService.softDelete(id);
  }
}