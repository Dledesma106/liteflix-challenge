import { type MoviesProps } from '../../interfaces'
import { DesktopWrapper } from '../styles'
import Header from './Header'
import Main from './Main'
import { Wrapper } from './styles'

const Home = (props: MoviesProps): JSX.Element => {
	return (
		<DesktopWrapper>
			<Wrapper img={props.highlightedMovie.imagePath}>
				<Header />
				<Main {...props} />
			</Wrapper>
		</DesktopWrapper>
	)
}

export default Home
