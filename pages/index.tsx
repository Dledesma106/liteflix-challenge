import Head from 'next/head'
import dbConnect from 'lib/dbConnect'
import MyMovieModel from '@/backend/models/MyMovie'
import { formatIds } from 'lib/utils'
import { getHighlightedMovie, getPopularMovies } from 'lib/moviesApi'
import { type GetServerSidePropsContext } from 'next'
import Desktop from 'components/Desktop/Home'
import Mobile from 'components/Mobile/Home'
import { type props } from '@/components/interfaces'

const Home = (props: props): JSX.Element => {
  return (
    <>
      <Head>
        <title>LiteFlix</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Desktop {...props}/>
      <Mobile {...props}/>
    </>
  )
}

export default Home

export async function getServerSideProps (ctx: GetServerSidePropsContext): Promise<{ props: props }> {
  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=1800, stale-while-revalidate=59'
  )
  await dbConnect()
  const dbMovies = await MyMovieModel.find()
  const highlightedMovie = await getHighlightedMovie()
  const popularMovies = await getPopularMovies()
  const myMovies = formatIds(dbMovies) // Hago esto porque el ObjectId de MongoDB no es serializable en React
  return { props: { highlightedMovie, popularMovies, myMovies } }
}
