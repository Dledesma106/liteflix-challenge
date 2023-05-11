import { type MoviesProps } from 'components/interfaces'
import Header from './Header'
import Main from './Main'
import { Wrapper } from './styles'

const Home = (props: MoviesProps): JSX.Element => {
	return (
		<Wrapper imgs={props.highlightedMovie.imagePaths}>
			<Header />
			<Main {...props} />
		</Wrapper>
	)
}

export default Home
