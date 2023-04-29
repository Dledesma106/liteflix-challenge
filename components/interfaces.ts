import { Movie } from '@/lib/moviesApi'
import { MyMovie } from '@/backend/models/MyMovie'

export interface props{
    highlightedMovie:Movie
    popularMovies:Movie[]
    myMovies:MyMovie[]
}
