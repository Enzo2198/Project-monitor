"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderDetailProviders = void 0;
const entity_1 = require("./entity");
exports.orderDetailProviders = [
    {
        provide: 'ORDER_DETAIL_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(entity_1.OrderDetailEntity),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=providers.js.map