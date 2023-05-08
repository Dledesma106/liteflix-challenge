import type { Movie } from 'lib/moviesApi'
import Dropdown from 'components/Common/Dropdown'
import { CarouselWrapper, MoviesWrapper } from './styles'
import useCarousel from '@/hooks/useCarousel'
import { ChevronUp, ChevronDown } from '@/components/Common/styles'
import MyMoviePreview from './MyMoviePreview/MyMoviePreview'
import MoviePreview from './MoviePreview/MoviePreview'
import type { MyMovie } from 'backend/models/MyMovie'

interface Props {
	popularMovies: Movie[]
}

const MovieCarousel = ({ popularMovies }: Props): JSX.Element => {
	const {
		setMoviesArray,
		prevMovie,
		nextMovie,
		showMyMovies,
		changeIconsMovie,
		myMovies,
		movies,
		carouselOffset,
		pressMovie
	} = useCarousel(popularMovies)
	const hideChevrons = !(myMovies.length >= 4 || !showMyMovies)

	return (
		<CarouselWrapper>
			<Dropdown setMovies={setMoviesArray} />
			<ChevronUp onClick={prevMovie} hidden={hideChevrons} width={20} height={8} />
			<MoviesWrapper>
				{showMyMovies
					? myMovies
							.slice(carouselOffset, carouselOffset + 4)
							.map((movie: MyMovie, index: number) => <MyMoviePreview key={index} movie={movie} />)
					: movies.map((movie: Movie, index: number) => (
							<MoviePreview key={index} movie={movie} changeIconState={changeIconsMovie} press={pressMovie} />
					  ))}
			</MoviesWrapper>
			<ChevronDown onClick={nextMovie} hidden={hideChevrons} width={20} height={8} />
		</CarouselWrapper>
	)
}

export default MovieCarousel
