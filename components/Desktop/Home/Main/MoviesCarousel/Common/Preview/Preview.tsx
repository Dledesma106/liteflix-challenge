import { type Movie } from 'lib/moviesApi'
import { Card, MovieImage, Title, PlayButton } from './styles'
import { type MyMovie } from '@/backend/models/MyMovie'

interface PreviewProps {
	movie: Movie | MyMovie
	show: boolean
}
const Preview = ({ movie, show }: PreviewProps): JSX.Element => {
	return (
		<>
			{show && (
				<Card>
					<MovieImage img={movie.imagePath}>
						<PlayButton height={40} width={40}/>
						<Title>{movie.title}</Title>
					</MovieImage>
				</Card>
			)}
		</>
	)
}

export default Preview
