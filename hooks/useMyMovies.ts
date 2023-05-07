import MyMoviesContext from '../context/MyMovies/MyMoviesContext'
import { useContext } from 'react'
import { type MyMoviesContextProps } from '../context/MyMovies/MyMoviesContext'

export default function useMyMovies(): MyMoviesContextProps {
	const context = useContext(MyMoviesContext)
	return context
}
