import { type MyMovie } from 'backend/models/MyMovie'
import { type Movie } from 'lib/moviesApi'
import { type MovieType } from './Dropdown/Dropdown'
import MyMoviePreview from './MyMoviePreview'
import MoviePreview from './MoviePreview'
import { CarouselWrapper, ChevronUp, ChevronDown, MoviesWrapper } from './styles'
import { useState } from 'react'
import Dropdown from './Dropdown'
import useMyMovies from '@/hooks/useMyMovies'

interface MovieCarouselProps {
	popularMovies: Movie[]
}

const MovieCarousel = ({ popularMovies }: MovieCarouselProps): JSX.Element => {
	const [showMyMovies, setShowMyMovies] = useState<boolean>(false)
	const [popularMoviesState, setPopularMoviesState] = useState<Movie[]>(popularMovies)
	const [carouselOffset, setCarouselOffset] = useState<number>(0)
	const { myMovies } = useMyMovies()
	const hideChevrons = !(myMovies.length >= 4 || !showMyMovies)

	const setMoviesArray = (type: MovieType): void => {
		if (type === 'MIS PELICULAS') {
			setShowMyMovies(true)
			setCarouselOffset(0)
		} else {
			setShowMyMovies(false)
			setCarouselOffset(0)
		}
	}

	const changeIconsMovies = (title: string, name: string, value: boolean): void => {
		setPopularMoviesState(
			popularMoviesState.map((movie) => (movie.title === title ? { ...movie, [name]: value } : movie))
		)
	}

	const prevMovie = (): void => {
		setCarouselOffset(carouselOffset < 1 ? 0 : carouselOffset - 1)
	}

	const nextMovie = (): void => {
		if (myMovies.length <= 4) return
		setCarouselOffset(carouselOffset > myMovies.length - 5 ? myMovies.length - 4 : carouselOffset + 1)
	}

	return (
		<CarouselWrapper>
			<Dropdown setMovies={setMoviesArray} />
			<ChevronUp onClick={prevMovie} hidden={hideChevrons} width={20} height={8} />
			<MoviesWrapper>
				{showMyMovies
					? myMovies
							.slice(carouselOffset, carouselOffset + 4)
							.map((movie: MyMovie, index: number) => (
								<MyMoviePreview key={index} movie={movie}/>
							))
					: popularMovies
							.map((movie: Movie, index: number) => (
								<MoviePreview key={index} changeIconState={changeIconsMovies} movie={movie} />
							))}
			</MoviesWrapper>
			<ChevronDown onClick={nextMovie} hidden={hideChevrons} width={20} height={8} />
		</CarouselWrapper>
	)
}

export default MovieCarousel
