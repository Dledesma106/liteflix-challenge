import { type MyMovie } from '@/backend/models/MyMovie'
import { type Movie } from '@/lib/moviesApi'
import MyMoviePreview from './MyMoviePreview'
import MoviePreview from './MoviePreview'
import { CarouselWrapper, Chevron, MoviesWrapper } from './styles'
import { useState } from 'react'
import Dropdown from './Dropdown'
import Image from 'next/image'
import up from 'assets/up-arrow.svg'
import down from 'assets/down-arrow.svg'
import { type MovieType } from './Dropdown/Dropdown'

interface props {
	myMovies: MyMovie[]
	popularMovies: Movie[]
}

const MovieCarousel = ({ myMovies, popularMovies }: props): JSX.Element => {
	const [showMyMovies, setShowMyMovies] = useState<boolean>(false)
	const [popularMoviesState, setPopularMoviesState] = useState<Movie[]>(popularMovies)
	const [movies, setMovies] = useState<MyMovie[] | Movie[]>(popularMovies)
	const [movieOffset, setMovieOffset] = useState<number>(0)

	const setMoviesArray = (type: MovieType): void => {
		if (type === 'MIS PELICULAS') {
			setMovies(myMovies)
			setShowMyMovies(true)
		} else {
			setMovies(popularMoviesState)
			setShowMyMovies(false)
		}
	}

	const changeIconState = (title: string, name: string, value: boolean): void => {
		setPopularMoviesState(
			popularMoviesState.map((movie) => (movie.title === title ? { ...movie, [name]: value } : movie))
		)
		setMovies(popularMoviesState.map((movie) => (movie.title === title ? { ...movie, [name]: value } : movie)))
	}

	const prevMovie = (): void => {
		setMovieOffset(movieOffset < 1 ? 0 : movieOffset - 1)
	}

	const nextMovie = (): void => {
		if (movies.length <= 4) return
		setMovieOffset(movieOffset > 3 ? 4 : movieOffset + 1)
	}

	return (
		<CarouselWrapper>
			<Dropdown setMovies={setMoviesArray} />
			<Chevron onClick={prevMovie} show={movies.length >= 4}>
				<Image src={up} width={20} height={8} alt="chevron arriba" />
			</Chevron>
			<MoviesWrapper>
				{showMyMovies
					? movies
							.slice(movieOffset, movieOffset + 4)
							.map((movie: MyMovie | Movie, index: number) => <MyMoviePreview key={index} movie={movie as MyMovie} />)
					: movies
							.slice(movieOffset, movieOffset + 4)
							.map((movie: Movie | MyMovie, index: number) => (
								<MoviePreview key={index} changeIconState={changeIconState} movie={movie as Movie} />
							))}
			</MoviesWrapper>
			<Chevron onClick={nextMovie} show={movies.length >= 4}>
				<Image src={down} width={20} height={8} alt="chevron arriba" />
			</Chevron>
		</CarouselWrapper>
	)
}

export default MovieCarousel
