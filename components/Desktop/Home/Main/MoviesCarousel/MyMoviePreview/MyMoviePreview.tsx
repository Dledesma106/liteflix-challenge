import { type MyMovie } from 'backend/models/MyMovie'
import Preview from '../Common/Preview'
import HoveredPreview from './HoveredPreview'
import { Wrapper } from './styles'
import { useState } from 'react'

interface MyMoviePreviewProps {
	movie: MyMovie
}

export default function MyMoviePreview({ movie }: MyMoviePreviewProps): JSX.Element {
	const [hovered, setHovered] = useState<boolean>(false)
	const handleHover = (): void => {
		setHovered(true)
	}

	const handleUnhover = (): void => {
		setHovered(false)
	}

	return (
		<Wrapper hovered={hovered} onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
			<HoveredPreview show={hovered} movie={movie} />
			<Preview show={!hovered} movie={movie} />
		</Wrapper>
	)
}
