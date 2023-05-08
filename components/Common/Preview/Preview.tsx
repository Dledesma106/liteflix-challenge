import { type Movie } from 'lib/moviesApi'
import { MovieImage, Title, PlayButton } from './styles'
import { type MyMovie } from '@/backend/models/MyMovie'

interface PreviewProps {
	movie: Movie | MyMovie
	show: boolean
}
const Preview = ({ movie, show }: PreviewProps): JSX.Element => {
	return (
		<>
			{show && (
				<MovieImage img={movie.imagePath}>
					<PlayButton height={40} width={40} />
					<Title>{movie.title}</Title>
				</MovieImage>
			)}
		</>
	)
}

export default Preview
