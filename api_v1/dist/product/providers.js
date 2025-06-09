"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productProviders = void 0;
const entity_1 = require("./entity");
exports.productProviders = [
    {
        provide: 'PRODUCT_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(entity_1.ProductEntity),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=providers.js.map