import  MovieFormContext from '../context/MovieFormContext/MovieFormContext'
import {useContext} from 'react'

export default function useMovieForm(){
    const context = useContext(MovieFormContext)
    return context
}