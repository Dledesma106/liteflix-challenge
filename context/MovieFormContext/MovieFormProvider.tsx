import { useState } from 'react'
import MovieFormContext from './MovieFormContext'
import DesktopMovieForm from 'components/Desktop/MovieForm'

export interface ProviderProps {
	children: JSX.Element | JSX.Element[]
}

const MovieFormProvider = ({ children }: ProviderProps): JSX.Element => {
	const [show, setShow] = useState<boolean>(false)

	function toggleDesktopMovieForm(): void {
		setShow(!show)
	}

	return (
		<MovieFormContext.Provider value={{ toggleDesktopMovieForm }}>
			{children}
			<DesktopMovieForm show={show} toggle={toggleDesktopMovieForm} />
		</MovieFormContext.Provider>
	)
}

export default MovieFormProvider
