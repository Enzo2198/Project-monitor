"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeProviders = void 0;
const entity_1 = require("./entity");
exports.employeeProviders = [
    {
        provide: 'EMPLOYEE_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(entity_1.EmployeeEntity),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=providers.js.map