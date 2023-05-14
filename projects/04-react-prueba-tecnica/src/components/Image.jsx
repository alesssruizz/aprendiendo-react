import { useCatImage } from '../hooks/useCatImage'

export function Image() {
  const { imageUrl } = useCatImage({ fact: 'hello world'})
  console.log(imageUrl);
  return (
    <>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={'Image extracted using the first three words for "Random cat"'}
          className='max-w-xs h-auto'
        />
      )}
    </>
  )
}
