import { StyledMain} from './styles'
import { props } from '../../interfaces'
import MoviesCarousel from './MoviesCarousel'
import HighlightedMovie from './HighlightedMovie'

const Main = ({highlightedMovie, myMovies, popularMovies}:props) =>{
 
    return (
        <StyledMain>
            <HighlightedMovie movie={highlightedMovie} />
            <MoviesCarousel myMovies={myMovies} popularMovies={popularMovies}/>
        </StyledMain>
    )
}

export default Main