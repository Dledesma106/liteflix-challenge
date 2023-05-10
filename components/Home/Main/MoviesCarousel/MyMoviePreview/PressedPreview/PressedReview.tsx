import { MovieImage, IconsWrapper, TitleWrapper, Title, Body } from './styles'
import Image from 'next/image'
import tick from 'assets/ok-tickmark.svg'
import plus from 'assets/plus.svg'
import like from 'assets/like.svg'
import likeFill from 'assets/like-fill.svg'
import playButton from 'assets/play-button.svg'
import type { MyMovie } from '@/backend/models/MyMovie'
import useMyMovies from '@/hooks/useMyMovies'
import { updateMovie } from '@/lib/axios'

interface PressedPreviewProps {
	movie: MyMovie
	show: boolean
	toggle: () => void
}

const PressedPreview = ({ movie, show, toggle }: PressedPreviewProps): JSX.Element => {
	const { changeIcon } = useMyMovies()
	const toggleIcon = (name: 'added' | 'liked'): void => {
		changeIcon(movie._id, name, !movie[name])
		try {
			void updateMovie({ ...movie, [name]: !movie[name] })
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			{show && (
				<MovieImage img={movie.imagePath}>
					<IconsWrapper>
						<Image
							src={movie.added ? tick : plus}
							onClick={() => {
								toggleIcon('added')
							}}
							width={16}
							height={16}
							alt="icono de suma"
						/>
						<Image
							src={movie.liked ? likeFill : like}
							onClick={() => {
								toggleIcon('liked')
							}}
							width={20}
							height={20}
							alt="icono de me gusta"
						/>
					</IconsWrapper>
					<Body onClick={toggle}>
						<TitleWrapper>
							<Image src={playButton} height={24} width={24} alt="boton de reproduccion" />
							<Title>{movie.title}</Title>
						</TitleWrapper>
					</Body>
				</MovieImage>
			)}
		</>
	)
}

export default PressedPreview
