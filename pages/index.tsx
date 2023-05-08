import Head from 'next/head'
import { dbConnect, dbDisconnect } from 'lib/dbConnect'
import MyMovieModel, { type MyMovie } from 'backend/models/MyMovie'
import { formatIds } from 'lib/utils'
import { getHighlightedMovie, getPopularMovies } from 'lib/moviesApi'
import { type GetServerSidePropsContext } from 'next'
import Desktop from 'components/Desktop/Home'
import Mobile from 'components/Mobile/Home'
import { type MoviesProps } from 'components/interfaces'
import useMyMovies from '@/hooks/useMyMovies'
import { useEffect } from 'react'

const Home = (props: MoviesProps): JSX.Element => {
	const { setMovies } = useMyMovies()

	useEffect(() => {
		setMovies(props.myMovies)
	}, [props.myMovies])
	return (
		<>
			<Head>
				<title>LiteFlix</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Desktop {...props} />
			<Mobile {...props} />
		</>
	)
}

export default Home

export async function getServerSideProps(ctx: GetServerSidePropsContext): Promise<{ props: MoviesProps }> {
	ctx.res.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=59')
	await dbConnect()
	const dbMovies = await MyMovieModel.find()
	const highlightedMovie = await getHighlightedMovie()
	const popularMovies = (await getPopularMovies()).filter((movie) => movie.title !== highlightedMovie.title)
	const myMovies = formatIds(dbMovies).map((movie: MyMovie) => { return { ...movie, pressed: false } }) // Hago esto porque el ObjectId de MongoDB no es serializable en React
	await dbDisconnect()
	return { props: { highlightedMovie, popularMovies, myMovies } }
}
