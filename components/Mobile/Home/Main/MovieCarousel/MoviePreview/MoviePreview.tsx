import type { Movie } from '@/lib/moviesApi'
import Preview from 'components/Common/Preview'
import { Wrapper } from './styles'
import PressedPreview from './PressedPreview/PressedReview'
interface MyMoviePreviewProps {
	movie: Movie
	changeIconState: (title: string, name: string, value: boolean) => void
	press: (title: string) => void
}

const MyMoviePreview = ({ movie, changeIconState, press }: MyMoviePreviewProps): JSX.Element => {
	return (
		<Wrapper>
			<div onClick={() => press(movie.title)}>
				<Preview show={!movie.pressed} movie={movie} />
			</div>
			<PressedPreview
				show={movie.pressed}
				movie={movie}
				changeIconState={changeIconState}
				toggle={() => press(movie.title)}
			/>
		</Wrapper>
	)
}

export default MyMoviePreview
