import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { productProviders } from './providers';
import { ProductService } from './service';
import { ProductController } from './controller'

@Module({
  imports: [DatabaseModule],
  providers: [
    ...productProviders,
    ProductService,
  ],
  controllers: [ProductController]
})
export class ProductModule {}