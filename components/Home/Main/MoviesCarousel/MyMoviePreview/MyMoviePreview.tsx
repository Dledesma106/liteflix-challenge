import { type MyMovie } from 'backend/models/MyMovie'
import Preview from '../Preview'
import HoveredPreview from './HoveredPreview'
import { Wrapper } from './styles'
import PressedPreview from './PressedPreview/PressedReview'
import useMyMovies from '@/hooks/useMyMovies'

interface MyMoviePreviewProps {
	movie: MyMovie
	index: number
}

export default function MyMoviePreview({ movie, index }: MyMoviePreviewProps): JSX.Element {
	const { pressMovie } = useMyMovies()
	const handleHover = (): void => {
		pressMovie(movie._id)
	}

	return (
		<Wrapper hovered={movie.pressed} onMouseLeave={handleHover}>
			<Preview show={!movie.pressed} movie={movie} hover={handleHover} />
			<HoveredPreview show={movie.pressed} movie={movie} />
			<PressedPreview show={movie.pressed} movie={movie} toggle={handleHover} />
		</Wrapper>
	)
}
