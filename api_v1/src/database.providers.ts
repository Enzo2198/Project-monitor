import { DataSource } from 'typeorm';
import {ColorEntity} from "./color/entity";
import {EmployeeEntity} from "./employee/entity";
import {ProductEntity} from "./product/entity";
import {OrderEntity} from "./order/entity";
import {OrderDetailEntity} from "./orderDetail/entity";
import {CustomerEntity} from "./customer/entity";

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'default',
        entities: [
          ColorEntity, EmployeeEntity, ProductEntity, OrderEntity, OrderDetailEntity, CustomerEntity
        ],
        synchronize: false,
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];