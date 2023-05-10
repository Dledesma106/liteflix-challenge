import { type MyMovie } from 'backend/models/MyMovie'
import { type Movie } from 'lib/moviesApi'
import MyMoviePreview from './MyMoviePreview'
import MoviePreview from './MoviePreview'
import { CarouselWrapper, MoviesWrapper } from './styles'
import { ChevronUp, ChevronDown } from 'components/Common/styles'
import Dropdown from './Dropdown'
import useCarousel from 'hooks/useCarousel'

interface MovieCarouselProps {
	popularMovies: Movie[]
}

const MovieCarousel = ({ popularMovies }: MovieCarouselProps): JSX.Element => {
	const {
		setMoviesArray,
		changeIconsMovie,
		prevMovie,
		nextMovie,
		showMyMovies,
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
							.map((movie: MyMovie, index: number) => <MyMoviePreview key={index} movie={movie} index={index} />)
					: movies.map((movie: Movie, index: number) => (
							<MoviePreview
								key={index}
								changeIconState={changeIconsMovie}
								movie={movie}
								press={pressMovie}
								index={index}
							/>
					  ))}
			</MoviesWrapper>
			<ChevronDown onClick={nextMovie} hidden={hideChevrons} width={20} height={8} />
		</CarouselWrapper>
	)
}

export default MovieCarousel
