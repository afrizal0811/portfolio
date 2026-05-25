import { privateImagePaths } from '../../../constants/imagePaths';

/**
 * Sebelumnya: help.js
 * Rename ke privateProjectUtils.js agar jelas ini utility untuk PrivateProject.
 */

/**
 * Mengubah string URL param (misal: "bank-artatama") menjadi camelCase
 * (misal: "bankArtatama") agar bisa dicocokkan dengan key di privateImagePaths.
 * @param {string} str
 * @returns {string}
 */
export const toCamelCase = (str) =>
  str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());

/**
 * Mencari gambar-gambar yang sesuai dengan nama proyek dari URL param.
 * @param {string} name - Nama dari URL param (misal: "bank-artatama").
 * @returns {Record<string, string[]>}
 */
export const getFilteredImages = (name) => {
  const camelCaseName = toCamelCase(name);
  return Object.keys(privateImagePaths)
    .filter((key) => camelCaseName.includes(key))
    .reduce((acc, key) => {
      acc[key] = privateImagePaths[key];
      return acc;
    }, {});
};

/**
 * Mengecek apakah sebuah objek kosong (tidak punya property apapun).
 * @param {object} obj
 * @returns {boolean}
 */
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;
