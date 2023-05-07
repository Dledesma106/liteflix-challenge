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

	const changeIcon = (_id: string, name: string, value: boolean): void => {
		console.log('changing icons')
		setMyMovies(myMovies.map((movie) => (movie._id === _id ? { ...movie, [name]: value } : movie)))
		console.log(myMovies)
	}

	return (
		<MyMoviesContext.Provider value={{ myMovies, addMovie, setMovies, changeIcon }}>
			{children}
		</MyMoviesContext.Provider>
	)
}

export default MyMoviesProvider
