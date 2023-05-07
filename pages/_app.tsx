import 'styles/globals.css'
import type { AppProps } from 'next/app'
import UploadMovieModalProvider from 'context/UploadMovieModal/UploadMovieModalProvider'
import MyMoviesProvider from '@/context/MyMovies/MyMoviesProvider'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<MyMoviesProvider>
				<UploadMovieModalProvider>
					<Component {...pageProps} />
				</UploadMovieModalProvider>
			</MyMoviesProvider>
		</>
	)
}

export default App
