import { type Movie } from 'lib/moviesApi'
import { Wrapper } from './styles'
import { useState } from 'react'
import HoveredPreview from './HoveredPreview/HoveredPreview'
import Preview from '../../../../../Common/Preview/Preview'

interface MoviePreviewProps {
	movie: Movie
	changeIconState: (title: string, name: string, value: boolean) => void
}
export default function MoviePreview({ movie, changeIconState }: MoviePreviewProps): JSX.Element {
	const [hovered, setHovered] = useState<boolean>(false)

	const handleHover = (): void => {
		setHovered(true)
	}

	const handleUnhover = (): void => {
		setHovered(false)
	}

	return (
		<Wrapper hovered={hovered} onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
			<Preview movie={movie} show={!hovered} />
			<HoveredPreview movie={movie} show={hovered} changeIconState={changeIconState} />
		</Wrapper>
	)
}
