import axios from 'axios'

interface MovieDTO {
	backdrop_path: string
	title: string
	vote_average: number
	overview: string
	release_date: string
}

export interface HighlightedMovie {
	title: string
	imagePath: string
}

export interface Movie {
	title: string
	imagePath: string
	rating: number
	description: string
	year: string
	liked: boolean
	added: boolean
}

const apiKey = process.env.MOVIES_API_KEY ?? ''
const moviesCount = 4

function trimHighlightedMovie(movie: MovieDTO, imageBase: string): HighlightedMovie {
	return {
		title: movie.title,
		imagePath: `${imageBase}original${movie.backdrop_path}`
	}
}

function trimMovie(movie: MovieDTO, imageBase: string): Movie {
	return {
		title: movie.title,
		imagePath: `${imageBase}w500${movie.backdrop_path}`,
		rating: movie.vote_average,
		description: movie.overview.slice(0, 90),
		year: movie.release_date.slice(0, moviesCount),
		liked: false,
		added: false
	}
}

async function getMovies(url: string): Promise<MovieDTO[]> {
	const res = await axios.get(url)
	return res.data.results
}

async function getBaseUrl(): Promise<string> {
	const configRes = await axios.get(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`)
	return configRes.data.images.base_url
}

export async function getPopularMovies(): Promise<Movie[]> {
	const movies = await getMovies(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
	const popularMovies = movies.slice(0, 5)
	const baseUrl = await getBaseUrl()
	return popularMovies.map((movie) => trimMovie(movie, baseUrl))
}

export async function getHighlightedMovie(): Promise<HighlightedMovie> {
	const movies = await getMovies(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
	const highlightedMovie = movies.shift()
	return trimHighlightedMovie(highlightedMovie as MovieDTO, await getBaseUrl())
}
