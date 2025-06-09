"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerProviders = void 0;
const entity_1 = require("./entity");
exports.customerProviders = [
    {
        provide: 'CUSTOMER_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(entity_1.CustomerEntity),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=providers.js.map