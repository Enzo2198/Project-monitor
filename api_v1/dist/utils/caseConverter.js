"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPascalCase = exports.toKebabCase = exports.toSnakeCase = exports.toCamelCase = void 0;
const lodash_1 = require("lodash");
const convertCase = (oldObject, converterFunction) => {
    let newObject;
    if (!oldObject || typeof oldObject !== 'object' || !Object.keys(oldObject).length) {
        return oldObject;
    }
    if (Array.isArray(oldObject)) {
        newObject = oldObject.map((element) => convertCase(element, converterFunction));
    }
    else {
        newObject = {};
        Object.keys(oldObject).forEach((oldKey) => {
            const newKey = converterFunction(oldKey);
            newObject[newKey] = convertCase(oldObject[oldKey], converterFunction);
        });
    }
    return newObject;
};
const toCamelCase = (obj) => convertCase(obj, lodash_1.camelCase);
exports.toCamelCase = toCamelCase;
const toSnakeCase = (obj) => convertCase(obj, lodash_1.snakeCase);
exports.toSnakeCase = toSnakeCase;
const toKebabCase = (obj) => convertCase(obj, lodash_1.kebabCase);
exports.toKebabCase = toKebabCase;
const toPascalCase = (obj) => convertCase(obj, (0, lodash_1.flow)(lodash_1.camelCase, lodash_1.upperFirst));
exports.toPascalCase = toPascalCase;
//# sourceMappingURL=caseConverter.js.map