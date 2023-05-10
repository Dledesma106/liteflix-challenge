import Head from 'next/head'
import { dbConnect, dbDisconnect } from 'lib/dbConnect'
import MyMovieModel from 'backend/models/MyMovie'
import { buildMovies } from 'lib/utils'
import { getHighlightedMovie, getPopularMovies } from 'lib/moviesApi'
import { type GetServerSidePropsContext } from 'next'
import Home from 'components/Home'
import { type MoviesProps } from 'components/interfaces'
import useMyMovies from '@/hooks/useMyMovies'
import { useEffect } from 'react'

const HomePage = (props: MoviesProps): JSX.Element => {
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
			<Home {...props} />
		</>
	)
}

export default HomePage

export async function getServerSideProps(ctx: GetServerSidePropsContext): Promise<{ props: MoviesProps }> {
	ctx.res.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=59')
	await dbConnect()
	const dbMovies = await MyMovieModel.find()
	const highlightedMovie = await getHighlightedMovie()
	const popularMovies = (await getPopularMovies()).filter((movie) => movie.title !== highlightedMovie.title)
	const myMovies = buildMovies(dbMovies)
	await dbDisconnect()
	return { props: { highlightedMovie, popularMovies, myMovies } }
}
