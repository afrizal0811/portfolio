import { useEffect, useState } from 'react'

/**
 * Hook untuk mendeteksi apakah lebar layar di bawah batas tertentu.
 *
 * Sebelumnya bernama `IsMobile` (PascalCase) yang menyerupai nama komponen.
 * Custom hook harus diawali dengan `use` agar ESLint dan React DevTools
 * bisa mendeteksinya dengan benar.
 *
 * @param {number} maxWidth - Batas lebar layar dalam pixel.
 * @returns {boolean} `true` jika lebar layar ≤ maxWidth.
 */
function useIsMobile(maxWidth) {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width <= maxWidth
}

export default useIsMobile
