"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorProviders = void 0;
const entity_1 = require("./entity");
exports.colorProviders = [
    {
        provide: 'COLOR_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(entity_1.ColorEntity),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=providers.js.map