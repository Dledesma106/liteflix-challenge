import { type HighlightedMovie, type Movie } from 'lib/moviesApi'
import { type MyMovie } from 'backend/models/MyMovie'

export interface MoviesProps {
	highlightedMovie: HighlightedMovie
	popularMovies: Movie[]
	myMovies: MyMovie[]
}
