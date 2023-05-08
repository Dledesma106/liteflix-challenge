import type { HighlightedMovie } from '@/lib/moviesApi'
import { LiteflixOriginal, Bold, Button, PlayIcon, PlusIcon } from '@/components/Common/styles'
import { MovieTitle, ButtonWrapper, Wrapper } from './styles'

interface HighlightedProps {
	movie: HighlightedMovie
}

const HighlightedMovieInfo = ({ movie }: HighlightedProps): JSX.Element => {
	return (
		<Wrapper>
			<LiteflixOriginal>
				Original de <Bold>LITEFLIX</Bold>
			</LiteflixOriginal>
			<MovieTitle>{movie.title}</MovieTitle>
			<ButtonWrapper>
				<Button>
					<PlayIcon width={9} height={12} />
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
