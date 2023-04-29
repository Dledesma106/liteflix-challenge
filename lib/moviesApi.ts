import axios from 'axios'

export type HighlightedMovie = {
    title:string,
    imagePath:string
}

export interface Movie {
    title:string,
    imagePath:string,
    rating:number,
    description:string,
    year:string,
    liked:boolean,
    added:boolean
}

const apiKey = process.env.MOVIES_API_KEY || ''

function trimHighlightedMovie(movie:any, imageBase:string):HighlightedMovie{
    return {
        title:movie.title, 
        imagePath:`${imageBase}original${movie.backdrop_path}`,
    }
}

function trimMovie(movie:any, imageBase:string):Movie{
    return {
        title:movie.title, 
        imagePath:`${imageBase}w500${movie.backdrop_path}`,
        rating:movie.vote_average,
        description:movie.overview.slice(0, 75),
        year:(movie.release_date as string).slice(0, 4),
        liked:false,
        added:false
    }
}

async function getMovies(url:string):Promise<any[]>{
    const res = await axios.get(url)
    return res.data.results
}

async function getBaseUrl():Promise<string>{
    const configRes = await axios.get(`https://api.themoviedb.org/3/configuration?api_key=${apiKey}`)
    return configRes.data.images.base_url
}

export async function getPopularMovies(){
    const movies = await getMovies(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    const popularMovies = movies.slice(0,4)
    const baseUrl = await getBaseUrl()
    return popularMovies.map(movie=>trimMovie(movie, baseUrl))
}

export async function getHighlightedMovie(){
    const movies = await getMovies(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
    const highlightedMovie = movies.shift()
    return trimHighlightedMovie(highlightedMovie, await getBaseUrl())
}