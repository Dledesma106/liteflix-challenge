import { createContext } from 'react'

interface MovieFormContextProps {
	toggleDesktopMovieForm: () => void
}

const MovieFormContext = createContext<MovieFormContextProps>({} as MovieFormContextProps)

export default MovieFormContext
