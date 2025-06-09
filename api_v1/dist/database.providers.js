"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const entity_1 = require("./color/entity");
const entity_2 = require("./employee/entity");
const entity_3 = require("./product/entity");
const entity_4 = require("./order/entity");
const entity_5 = require("./orderDetail/entity");
const entity_6 = require("./customer/entity");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'postgres',
                host: 'db',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'default',
                entities: [
                    entity_1.ColorEntity, entity_2.EmployeeEntity, entity_3.ProductEntity, entity_4.OrderEntity, entity_5.OrderDetailEntity, entity_6.CustomerEntity
                ],
                synchronize: false,
                logging: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map