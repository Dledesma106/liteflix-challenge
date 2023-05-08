
import { Wrapper, MovieTitle, ButtonWrapper } from './styles'
import { Button, PlayIcon, PlusIcon, LiteflixOriginal, Bold } from 'components/Common/styles'
import { type HighlightedMovie } from 'lib/moviesApi'

const HighlightedMovieInfo = ({ movie }: { movie: HighlightedMovie }): JSX.Element => {
	return (
		<Wrapper>
			<LiteflixOriginal>
				Original de <Bold>LITEFLIX</Bold>
			</LiteflixOriginal>
			<MovieTitle>{movie.title}</MovieTitle>
			<ButtonWrapper>
				<Button>
					<PlayIcon width={9} height={12}/>
					Reproducir
				</Button>
				<Button transparent>
					<PlusIcon width={16} height={16} />
					Mi lista
				</Button>
			</ButtonWrapper>
		</Wrapper>
	)
}

export default HighlightedMovieInfo
