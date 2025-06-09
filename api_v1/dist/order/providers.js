"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderProviders = void 0;
const entity_1 = require("./entity");
exports.orderProviders = [
    {
        provide: 'ORDER_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(entity_1.OrderEntity),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=providers.js.map