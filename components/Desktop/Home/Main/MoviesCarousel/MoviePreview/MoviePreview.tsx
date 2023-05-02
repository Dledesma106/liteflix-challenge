import { type Movie } from '@/lib/moviesApi'
import Image from 'next/image'
import playButton from 'assets/play-button.svg'
import { ButtonWrapper, Card, Title, MovieImage } from './styles'
import { useState } from 'react'
import HoveredPreview from './HoveredPreview/HoveredPreview'

interface props {
  movie: Movie
  changeIconState: (title: string, name: string, value: boolean) => void
}

export default function MoviePreview ({ movie, changeIconState }: props): JSX.Element {
  const [hovered, setHovered] = useState<boolean>(false)

  const handleHover = (): void => {
    setHovered(true)
  }

  const handleUnhover = (): void => {
    setHovered(false)
  }

  return (
        <>
        {
            !hovered &&
            <Card onMouseEnter={handleHover}>
                <MovieImage img={movie.imagePath}>
                    <ButtonWrapper>
                        <Image src={playButton} height={40} width={40} alt='boton de reproduccion' />
                    </ButtonWrapper>
                    <Title>
                        {movie.title}
                    </Title>
                </MovieImage>
            </Card>
        }
        <HoveredPreview movie={movie} show={hovered} changeIconState={changeIconState} unhover={handleUnhover}/>

        </>
  )
}
