import { type MyMovie } from 'backend/models/MyMovie'
import { TitleWrapper, Card, ItemsWrapper, MovieImage, Title, PlusWrapper } from './styles'
import playButton from 'assets/play-button.svg'
import plus from 'assets/plus.svg'
import tick from 'assets/ok-tickmark.svg'
import playFill from 'assets/play-button-fill.svg'
import likeFill from 'assets/like-fill.svg'
import like from 'assets/like.svg'
import { useState } from 'react'
import { updateMovie } from 'lib/axios'
import useMyMovies from '@/hooks/useMyMovies'
import { ClickableIcon } from 'components/Common/styles'

interface HoveredPreviewProps {
	movie: MyMovie
	show: boolean
}

interface HoveredIcons {
	play: boolean
	liked: boolean
}

const HoveredPreview = ({ movie, show }: HoveredPreviewProps): JSX.Element => {
	const [hoveredIcons, setHoveredIcons] = useState<HoveredIcons>({
		play: false,
		liked: false
	})
	const { changeIcon } = useMyMovies()

	const handleHover = (name: 'liked' | 'play'): void => {
		setHoveredIcons({ ...hoveredIcons, [name]: true })
	}

	const handleUnhover = (name: 'liked' | 'play'): void => {
		setHoveredIcons({ ...hoveredIcons, [name]: false })
	}

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
				<Card>
					<MovieImage imgs={movie.imagePaths}>
						<PlusWrapper>
							<ClickableIcon
								src={movie.added ? tick : plus}
								onClick={() => {
									toggleIcon('added')
								}}
								width={16}
								height={16}
								alt="icono de suma"
							/>
						</PlusWrapper>
						<ItemsWrapper>
							<TitleWrapper>
								<ClickableIcon
									src={hoveredIcons.play ? playFill : playButton}
									onMouseEnter={() => {
										handleHover('play')
									}}
									onMouseLeave={() => {
										handleUnhover('play')
									}}
									height={24}
									width={24}
									alt="boton de reproduccion"
								/>
								<Title>{movie.title}</Title>
							</TitleWrapper>
							<ClickableIcon
								src={movie.liked ? likeFill : hoveredIcons.liked ? likeFill : like}
								onMouseEnter={() => {
									handleHover('liked')
								}}
								onMouseLeave={() => {
									handleUnhover('liked')
								}}
								onClick={() => {
									toggleIcon('liked')
								}}
								width={20}
								height={20}
								alt="icono de me gusta"
							/>
						</ItemsWrapper>
					</MovieImage>
				</Card>
			)}
		</>
	)
}

export default HoveredPreview
