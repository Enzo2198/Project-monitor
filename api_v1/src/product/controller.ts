import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from "@nestjs/common";
import {ProductService} from "./service";
import {CreateProductDto, UpdateProductDto} from "./dto";

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  get() {
    return this.productService.getList();
  }

  @Post('')
  create(@Body() createDto: CreateProductDto) {
    return this.productService.create(createDto);
  }

  @Put('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateProductDto) {
    return this.productService.updateOne(id, updateDto);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.softDelete(id);
  }
}