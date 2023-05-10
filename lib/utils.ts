import type { MyMovie } from 'backend/models/MyMovie'

export function formatIds(doc: any): any {
	return JSON.parse(JSON.stringify(doc))
}

export function buildMovies(movies: MyMovie[]): MyMovie[] {
	const builtMovies = movies.map((movie) => {
		return {
			_id: movie._id,
			title: movie.title,
			imagePaths: {
				desktop: movie.imagePath,
				mobile: movie.imagePath
			},
			added: movie.added,
			liked: movie.liked,
			pressed: false
		}
	})
	return formatIds(builtMovies) // This is necessary for React, since MongoDB's ObjectID is not serializable in React
}
