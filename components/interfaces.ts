import { type HighlightedMovie, type Movie } from 'lib/moviesApi'

export interface MoviesProps {
	highlightedMovie: HighlightedMovie
	popularMovies: Movie[]
}
