import { privateImagePaths } from '../../../constants/imagePaths'

export const camelize = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
}

export const filteredImages = (name) => {
  const camelCaseParam = camelize(name)
  const filtered = Object.keys(privateImagePaths)
    .filter((key) => camelCaseParam.includes(key))
    .reduce((obj, key) => {
      obj[key] = privateImagePaths[key]
      return obj
    }, {})
  return filtered
}

export const isEmpty = (obj) => {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false
    }
  }
  return true
}
