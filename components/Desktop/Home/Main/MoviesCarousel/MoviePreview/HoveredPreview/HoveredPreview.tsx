import { type Movie } from '@/lib/moviesApi'
import { TitleWrapper, Card, Description, Detail, ItemsWrapper, MovieImage, RatingWrapper, Title, PlusWrapper } from './styles'
import playButton from 'assets/play-button.svg'
import star from 'assets/star.svg'
import plus from 'assets/plus.svg'
import tick from 'assets/ok-tickmark.svg'
import playFill from 'assets/play-button-fill.svg'
import likeFill from 'assets/like-fill.svg'
import like from 'assets/like.svg'
import Image from 'next/image'
import { useState } from 'react'

interface props {
  movie: Movie
  show: boolean
  changeIconState: (title: string, name: string, value: boolean) => void
  unhover: () => void
}

interface HoveredIcons {
  play: boolean
  liked: boolean
}

const HoveredPreview = ({ movie, unhover, show, changeIconState }: props): JSX.Element => {
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
        {show &&
            <Card onMouseLeave={unhover}>
                <MovieImage img={movie.imagePath}>
                    <PlusWrapper>
                        <Image
                            src={movie.added ? tick : plus}
                            onClick={() => { toggleIcon('added') }}
                            width={16}
                            height={16}
                            alt="icono de suma"/>
                    </PlusWrapper>
                    <ItemsWrapper>
                        <TitleWrapper>
                            <Image
                                src={hoveredIcons.play ? playFill : playButton}
                                onMouseEnter={() => { handleHover('play') }}
                                onMouseLeave={() => { handleUnhover('play') }}
                                height={24}
                                width={24}
                                alt='boton de reproduccion' />
                            <Title>
                                {movie.title}
                            </Title>
                        </TitleWrapper>
                        <Image
                            src={movie.liked ? likeFill : hoveredIcons.liked ? likeFill : like}
                            onMouseEnter={() => { handleHover('liked') }}
                            onMouseLeave={() => { handleUnhover('liked') }}
                            onClick={() => { toggleIcon('liked') }}
                            width={20}
                            height={20}
                            alt='icono de me gusta'/>
                    </ItemsWrapper>
                </MovieImage>
                <Detail>
                    <Description>
                        {movie.description}
                    </Description>
                    <ItemsWrapper>
                        <RatingWrapper>
                            <Image src={star} width={12} height={12} alt='icono de estrella'/>
                            {movie.rating}
                        </RatingWrapper>
                        {movie.year}
                    </ItemsWrapper>
                </Detail>
            </Card>
        }
        </>
  )
}

export default HoveredPreview
