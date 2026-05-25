/**
 * Menyimpan data ke cookie dengan masa berlaku 1 jam.
 * @param {*} value - Data yang akan disimpan (akan di-stringify ke JSON).
 */
export const setCookie = (value) => {
  const expires = new Date(Date.now() + 3600 * 1000)
  const serialized = JSON.stringify(value)
  // toGMTString() sudah deprecated sejak ES2023, diganti toUTCString()
  document.cookie = `data=${serialized}; expires=${expires.toUTCString()}; path=/`
}

/**
 * Membaca dan mem-parse data dari cookie.
 * @returns {*} Data yang tersimpan, atau `false` jika tidak ada / gagal parse.
 */
export const getCookie = () => {
  try {
    const cookieArray = document.cookie.split('; ')
    const [, value] = cookieArray[0].split('=')
    return JSON.parse(value)
  } catch {
    return false
  }
}
