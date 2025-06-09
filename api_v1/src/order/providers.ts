import { DataSource } from 'typeorm';
import { OrderEntity } from './entity';

export const orderProviders = [
  {
    provide: 'ORDER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(OrderEntity),
    inject: ['DATA_SOURCE'],
  },
];