import type { Movie } from '@/lib/moviesApi'
import { MovieImage, IconsWrapper, TitleWrapper, Title, Description, Footer, Rating } from './styles'
import { StarIcon, ClickableIcon } from 'components/Common/styles'
import tick from 'assets/ok-tickmark.svg'
import plus from 'assets/plus.svg'
import like from 'assets/like.svg'
import likeFill from 'assets/like-fill.svg'
import playButton from 'assets/play-button.svg'

interface Props {
	movie: Movie
	show: boolean
	changeIconState: (title: string, name: string, value: boolean) => void
	toggle: () => void
}

const PressedPreview = ({ movie, show, changeIconState, toggle }: Props): JSX.Element => {
	const toggleIcon = (name: 'added' | 'liked'): void => {
		changeIconState(movie.title, name, !movie[name])
	}
	return (
		<>
			{show && (
				<MovieImage imgs={movie.imagePaths}>
					<IconsWrapper>
						<ClickableIcon
							src={movie.added ? tick : plus}
							onClick={() => {
								toggleIcon('added')
							}}
							width={16}
							height={16}
							alt="icono de suma"
						/>
						<ClickableIcon
							src={movie.liked ? likeFill : like}
							onClick={() => {
								toggleIcon('liked')
							}}
							width={20}
							height={20}
							alt="icono de me gusta"
						/>
					</IconsWrapper>
					<div onClick={toggle}>
						<TitleWrapper>
							<ClickableIcon src={playButton} height={24} width={24} alt="boton de reproduccion" />
							<Title>{movie.title}</Title>
						</TitleWrapper>
						<Description>{movie.description}</Description>
						<Footer>
							<Rating>
								<StarIcon width={12} height={12} />
								{movie.rating}
							</Rating>
							{movie.year}
						</Footer>
					</div>
				</MovieImage>
			)}
		</>
	)
}

export default PressedPreview
