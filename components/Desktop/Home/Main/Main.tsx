import { StyledMain } from './styles'
import { type MoviesProps } from 'components/interfaces'
import MoviesCarousel from './MoviesCarousel'
import HighlightedMovie from './HighlightedMovieInfo'

const Main = ({ highlightedMovie, popularMovies }: MoviesProps): JSX.Element => {
	return (
		<StyledMain>
			<HighlightedMovie movie={highlightedMovie} />
			<MoviesCarousel popularMovies={popularMovies} />
		</StyledMain>
	)
}

export default Main
