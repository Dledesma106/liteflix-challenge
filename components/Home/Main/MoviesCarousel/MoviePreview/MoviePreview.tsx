import { type Movie } from 'lib/moviesApi'
import { Wrapper } from './styles'
import HoveredPreview from './HoveredPreview/HoveredPreview'
import Preview from '../Preview'
import PressedPreview from './PressedPreview/PressedReview'

interface MoviePreviewProps {
	movie: Movie
	changeIconState: (title: string, name: string, value: boolean) => void
	press: (title: string) => void
	index: number
}
export default function MoviePreview({ movie, changeIconState, press, index }: MoviePreviewProps): JSX.Element {
	const handleHover = (): void => {
		press(movie.title)
	}

	return (
		<Wrapper hovered={movie.pressed} onMouseLeave={handleHover}>
			<Preview movie={movie} show={!movie.pressed} hover={handleHover} />
			<HoveredPreview movie={movie} show={movie.pressed} changeIconState={changeIconState} index={index} />
			<PressedPreview movie={movie} show={movie.pressed} changeIconState={changeIconState} toggle={handleHover} />
		</Wrapper>
	)
}
