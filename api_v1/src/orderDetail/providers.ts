import { DataSource } from 'typeorm';
import { OrderDetailEntity } from './entity';

export const orderDetailProviders = [
  {
    provide: 'ORDER_DETAIL_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(OrderDetailEntity),
    inject: ['DATA_SOURCE'],
  },
];