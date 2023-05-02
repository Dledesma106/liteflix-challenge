import play from 'assets/play.svg'
import plus from 'assets/plus.svg'
import { Wrapper, MovieTitle, ButtonWrapper, Button, LiteflixOriginal, Bold, PlayIcon, PlusIcon } from './styles'
import { type HighlightedMovie } from '@/lib/moviesApi'

const HighlightedMovieInfo = ({ movie }: { movie: HighlightedMovie }): JSX.Element => {
  return (
        <Wrapper>
            <LiteflixOriginal>Original de <Bold>LITEFLIX</Bold></LiteflixOriginal>
            <MovieTitle>{movie.title}</MovieTitle>
            <ButtonWrapper>
                <Button>
                    <PlayIcon src={play} width={9} height={12} alt='icono de reproduccion'/>
                    Reproducir
                </Button>
                <Button transparent>
                    <PlusIcon src={plus} width={16} height={16} alt='icono de suma'/>
                    Mi lista
                </Button>
            </ButtonWrapper>
        </Wrapper>
  )
}

export default HighlightedMovieInfo
