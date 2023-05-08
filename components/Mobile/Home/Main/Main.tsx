import { StyledMain } from './styles'
import type { MoviesProps } from 'components/interfaces'
import HighlightedMovieInfo from './HighlightedMovieInfo'
import MovieCarousel from './MovieCarousel'

const Main = ({ highlightedMovie, popularMovies }: MoviesProps): JSX.Element => {
  return (
    <StyledMain>
        <HighlightedMovieInfo movie={highlightedMovie}/>
        <MovieCarousel popularMovies={popularMovies}/>
    </StyledMain>
  )
}

export default Main
