import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { colorProviders } from './providers';
import { ColorService } from './service';
import { ColorController } from './controller'

@Module({
  imports: [DatabaseModule],
  providers: [
    ...colorProviders,
    ColorService,
  ],
  controllers: [ColorController]
})
export class ColorModule {}