import { DataSource } from 'typeorm';
import { ColorEntity } from './entity';

export const colorProviders = [
  {
    provide: 'COLOR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ColorEntity),
    inject: ['DATA_SOURCE'],
  },
];