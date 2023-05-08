import { createContext } from 'react'
import { type MyMovie } from 'backend/models/MyMovie'

export interface MyMoviesContextProps {
	setMovies: (movies: MyMovie[]) => void
	addMovie: (movie: MyMovie) => void
	myMovies: MyMovie[]
	changeIcon: (_id: string, name: string, value: boolean) => void
	pressMovie: (_id: string) => void
}

const initialState: MyMoviesContextProps = {
	setMovies: (movies: MyMovie[]): void => {},
	addMovie: (movies: MyMovie): void => {},
	myMovies: [] as MyMovie[],
	changeIcon: (_id: string, name: string, value: boolean): void => {},
	pressMovie: (_id: string): void => {}
}

const MyMoviesContext = createContext<MyMoviesContextProps>(initialState)

export default MyMoviesContext
