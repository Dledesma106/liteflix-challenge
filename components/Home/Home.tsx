import { type MoviesProps } from 'components/interfaces'
import Header from './Header'
import Main from './Main'
import { Wrapper } from './styles'

const Home = (props: MoviesProps): JSX.Element => {
	return (
		<Wrapper img={props.highlightedMovie.imagePath}>
			<Header />
			<Main {...props} />
		</Wrapper>
	)
}

export default Home
