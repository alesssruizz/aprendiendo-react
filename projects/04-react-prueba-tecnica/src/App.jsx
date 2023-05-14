import PrimaryButton from './components/PrimaryButton'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { Image } from './components/Image'

function App() {
  const { fact, refreshFact } = useCatFact('hello world')
  const { imageUrl, imageLoading } = useCatImage({fact})

  const handleClick = async () => {
    await refreshFact()
  }

  return (
    <main className='flex flex-col justify-center items-center max-w-3xl mx-auto my-0 gap-7 mt-5 relative'>
      <h1 className='text-3xl font-semibold text-center'>App de Gatos!</h1>
      {fact && <p className='text-xl'>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for "${fact}"`} className="max-w-xs h-auto" />}
      <PrimaryButton onClick={handleClick} loading={imageLoading} disabled={imageLoading} className='fixed bottom-10'>Mas gatos!</PrimaryButton>
      <Image />
    </main>
  )
}

export default App
