import { MobileWrapper } from '../styles'
import React from 'react'
import { type props } from '../../interfaces'
import { Wrapper } from './styles'

export const Home = (props: props): JSX.Element => {
	return (
		<MobileWrapper>
			<Wrapper img={props.highlightedMovie.imagePath} style={{ color: '#FFF' }}>
				ESTO ES MOBILE
			</Wrapper>
			img={props.highlightedMovie.imagePath}
		</MobileWrapper>
	)
}

export default Home
