import { type MyMovie } from '@/backend/models/MyMovie'
import * as SC from './styles'

export default function MyMoviePreview({ movie }: { movie: MyMovie }): JSX.Element {
	return (
		<>
			<SC.Card img={movie.imagePath}>
				<SC.Title>{movie.title}</SC.Title>
			</SC.Card>
		</>
	)
}
