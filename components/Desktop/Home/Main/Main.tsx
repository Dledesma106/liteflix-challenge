import { StyledMain } from './styles'
import { type props } from 'components/interfaces'
import MoviesCarousel from './MoviesCarousel'
import HighlightedMovie from './HighlightedMovie'

const Main = ({ highlightedMovie, myMovies, popularMovies }: props): JSX.Element => {
  return (
        <StyledMain>
            <HighlightedMovie movie={highlightedMovie} />
            <MoviesCarousel myMovies={myMovies} popularMovies={popularMovies}/>
        </StyledMain>
  )
}

export default Main
