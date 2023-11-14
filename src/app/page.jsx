import Image from 'next/image'
import AnimeList from '@/components/AnimeList'
import Header from '@/components/AnimeList/Header'
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from '../libs/api-libs'

const Page = async () => {

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  // const topAnime = await response.json()

  const topAnime = await getAnimeResponse("top/anime", "limit=8") 
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry") 
  recommendedAnime = reproduce(recommendedAnime, 10)
  

  return (
    <>
    
    <section>
      <Header title='Paling Populer' linkTitle="Lihat Semua" linkHref="/Populer" />
      <AnimeList api={topAnime} />
    </section>
    

    
    <section>
      <Header title='Rekomendasi'/>
      <AnimeList api={recommendedAnime} />
    </section>
    
    </>



  )
}

export default Page
