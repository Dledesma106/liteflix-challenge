import { useState } from 'react'
import MyMoviesContext from './MyMoviesContext'
import type { MyMovie } from '@/backend/models/MyMovie'
export interface ProviderProps {
	children: JSX.Element | JSX.Element[]
}

const MyMoviesProvider = ({ children }: ProviderProps): JSX.Element => {
	const [myMovies, setMyMovies] = useState<MyMovie[]>([])

	const addMovie = (movie: MyMovie): void => {
		setMyMovies([...myMovies, movie])
	}

	const setMovies = (movies: MyMovie[]): void => {
		setMyMovies(movies)
	}

	const pressMovie = (_id: string): void => {
		setMyMovies(
			myMovies.map((movie) => {
				return { ...movie, pressed: movie._id === _id ? !movie.pressed : false }
			})
		)
	}

	const changeIcon = (_id: string, name: string, value: boolean): void => {
		setMyMovies(myMovies.map((movie) => (movie._id === _id ? { ...movie, [name]: value } : movie)))
	}

	return (
		<MyMoviesContext.Provider value={{ myMovies, addMovie, setMovies, changeIcon, pressMovie }}>
			{children}
		</MyMoviesContext.Provider>
	)
}

export default MyMoviesProvider
