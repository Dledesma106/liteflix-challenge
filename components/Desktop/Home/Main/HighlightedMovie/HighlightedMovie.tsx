import play from 'assets/play.svg'
import plus from 'assets/plus.svg'
import Image from 'next/image'
import { Wrapper, MovieTitle, ButtonWrapper, Button, LiteflixOriginal, Bold } from './styles'
import { Movie } from '@/lib/moviesApi'


const HighlightedMovie = ({movie}:{movie:Movie}) =>{
    return(
        <Wrapper>
            <LiteflixOriginal>Original de <Bold>LITEFLIX</Bold></LiteflixOriginal>
            <MovieTitle>{movie.title}</MovieTitle>
            <ButtonWrapper>
                <Button>
                    <Image src={play} width={9} height={12} alt='icono de reproduccion'/>
                    Reproducir
                </Button>
                <Button transparent>
                    <Image src={plus} width={14} height={14} alt='icono de suma'/>
                    Mi lista
                </Button>
            </ButtonWrapper>
        </Wrapper>
    )
}

export default HighlightedMovie