import Preview from 'components/Common/Preview'
import { Wrapper } from './styles'
import PressedPreview from './PressedPreview'
import type { MyMovie } from 'backend/models/MyMovie'
import useMyMovies from '@/hooks/useMyMovies'
interface MyMoviePreviewProps {
	movie: MyMovie
}

const MyMoviePreview = ({ movie }: MyMoviePreviewProps): JSX.Element => {
	const { pressMovie } = useMyMovies()
	return (
		<Wrapper>
			<div onClick={() => pressMovie(movie._id)}>
				<Preview show={!movie.pressed} movie={movie} />
			</div>
			<PressedPreview show={movie.pressed} movie={movie} />
		</Wrapper>
	)
}

export default MyMoviePreview
