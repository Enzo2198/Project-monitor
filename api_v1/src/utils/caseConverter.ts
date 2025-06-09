import { snakeCase, camelCase, kebabCase, upperFirst, flow } from 'lodash'

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * deeply converts keys of an object from one case to another
 * @param {object} oldObject to convert
 * @param {function} converterFunction to convert key.
 * @return converted object
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const convertCase = (oldObject: any, converterFunction: Function): any => {
  let newObject

  if (!oldObject || typeof oldObject !== 'object' || !Object.keys(oldObject).length) {
    return oldObject
  }

  if (Array.isArray(oldObject)) {
    newObject = oldObject.map((element) => convertCase(element, converterFunction))
  } else {
    newObject = {}
    Object.keys(oldObject).forEach((oldKey) => {
      const newKey = converterFunction(oldKey)
      newObject[newKey] = convertCase(oldObject[oldKey], converterFunction)
    })
  }

  return newObject
}

export const toCamelCase: any = (obj: any) => convertCase(obj, camelCase)
export const toSnakeCase: any = (obj: any) => convertCase(obj, snakeCase)
export const toKebabCase: any = (obj: any) => convertCase(obj, kebabCase)
export const toPascalCase: any = (obj: any) => convertCase(obj, flow(camelCase, upperFirst))
