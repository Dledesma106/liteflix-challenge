import { MobileWrapper } from '../styles'
import React from 'react'
import { type MoviesProps } from '../../interfaces'
import { Wrapper } from './styles'
import Header from './Header'
import Main from './Main'

export const Home = (props: MoviesProps): JSX.Element => {
	return (
		<MobileWrapper>
			<Wrapper img={props.highlightedMovie.imagePath} style={{ color: '#FFF' }}>
				<Header />
				<Main {...props} />
			</Wrapper>
		</MobileWrapper>
	)
}

export default Home
