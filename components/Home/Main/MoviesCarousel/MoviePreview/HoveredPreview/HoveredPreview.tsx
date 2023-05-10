import { type Movie } from 'lib/moviesApi'
import {
	TitleWrapper,
	Card,
	Description,
	Detail,
	ItemsWrapper,
	MovieImage,
	RatingWrapper,
	Title,
	PlusWrapper
} from './styles'
import playButton from 'assets/play-button.svg'
import plus from 'assets/plus.svg'
import tick from 'assets/ok-tickmark.svg'
import playFill from 'assets/play-button-fill.svg'
import likeFill from 'assets/like-fill.svg'
import like from 'assets/like.svg'
import { useState } from 'react'
import { StarIcon, ClickableIcon } from '@/components/Common/styles'

interface HoveredPreviewProps {
	movie: Movie
	show: boolean
	changeIconState: (title: string, name: string, value: boolean) => void
	index: number
}

interface HoveredIcons {
	play: boolean
	liked: boolean
}

const HoveredPreview = ({ movie, show, changeIconState, index }: HoveredPreviewProps): JSX.Element => {
	const [hoveredIcons, setHoveredIcons] = useState<HoveredIcons>({
		play: false,
		liked: false
	})

	const handleHover = (name: 'liked' | 'play'): void => {
		setHoveredIcons({ ...hoveredIcons, [name]: true })
	}

	const handleUnhover = (name: 'liked' | 'play'): void => {
		setHoveredIcons({ ...hoveredIcons, [name]: false })
	}

	const toggleIcon = (name: 'added' | 'liked'): void => {
		changeIconState(movie.title, name, !movie[name])
	}

	return (
		<>
			{show && (
				<Card index={index}>
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
					<Detail>
						<Description>{movie.description}</Description>
						<ItemsWrapper>
							<RatingWrapper>
								<StarIcon width={12} height={12} />
								{movie.rating}
							</RatingWrapper>
							{movie.year}
						</ItemsWrapper>
					</Detail>
				</Card>
			)}
		</>
	)
}

export default HoveredPreview
