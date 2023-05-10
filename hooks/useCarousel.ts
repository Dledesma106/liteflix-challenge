import { useState } from 'react'
import type { MovieType } from 'components/Home/Main/MoviesCarousel/Dropdown/Dropdown'
import useMyMovies from './useMyMovies'
import type { Movie } from '@/lib/moviesApi'
import type { MyMovie } from 'backend/models/MyMovie'

interface Carousel {
	setMoviesArray: (type: MovieType) => void
	changeIconsMovie: (title: string, name: string, value: boolean) => void
	prevMovie: () => void
	nextMovie: () => void
	showMyMovies: boolean
	myMovies: MyMovie[]
	movies: Movie[]
	carouselOffset: number
	pressMovie: (title: string) => void
}

const useCarousel = (popularMovies: Movie[]): Carousel => {
	const [showMyMovies, setShowMyMovies] = useState<boolean>(false)
	const [movies, setMovies] = useState<Movie[]>(popularMovies)
	const [carouselOffset, setCarouselOffset] = useState<number>(0)
	const { myMovies } = useMyMovies()
	const setMoviesArray = (type: MovieType): void => {
		if (type === 'MIS PELICULAS') {
			setShowMyMovies(true)
			setCarouselOffset(0)
		} else {
			setShowMyMovies(false)
			setCarouselOffset(0)
		}
	}

	const pressMovie = (title: string): void => {
		setMovies(
			movies.map((movie) => {
				return { ...movie, pressed: movie.title === title ? !movie.pressed : false }
			})
		)
	}

	const changeIconsMovie = (title: string, name: string, value: boolean): void => {
		setMovies(movies.map((movie) => (movie.title === title ? { ...movie, [name]: value } : movie)))
	}

	const prevMovie = (): void => {
		setCarouselOffset(carouselOffset < 1 ? 0 : carouselOffset - 1)
	}

	const nextMovie = (): void => {
		if (myMovies.length <= 4) return
		setCarouselOffset(carouselOffset > myMovies.length - 5 ? myMovies.length - 4 : carouselOffset + 1)
	}

	return {
		setMoviesArray,
		changeIconsMovie,
		prevMovie,
		nextMovie,
		showMyMovies,
		myMovies,
		movies,
		carouselOffset,
		pressMovie
	}
}

export default useCarousel
