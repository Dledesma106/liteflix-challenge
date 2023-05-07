import { MobileWrapper } from '../styles'
import React from 'react'
import { type MoviesProps } from '../../interfaces'
import { Wrapper } from './styles'

export const Home = (props: MoviesProps): JSX.Element => {
	return (
		<MobileWrapper>
			<Wrapper img={props.highlightedMovie.imagePath} style={{ color: '#FFF' }}>
				ESTO ES MOBILE
			</Wrapper>
		</MobileWrapper>
	)
}

export default Home
