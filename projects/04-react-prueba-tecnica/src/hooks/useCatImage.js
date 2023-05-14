import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  const [imageLoading, setImageLoading] = useState(false)

  useEffect(() => {
    setImageLoading(true)
    if (!fact) return
    const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')
    fetch (`https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`)
      .then (response => response.json())
      .then (data => {
        const { url } = data
        setImageUrl(url)
        setImageLoading(false)
      })
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}`, imageLoading }
}