import UploadMovieModalContext from '../context/UploadMovieModal/UploadMovieModalContext'
import { useContext } from 'react'
import { type UploadMovieModalContextProps } from '../context/UploadMovieModal/UploadMovieModalContext'

export default function useUploadMovieModal(): UploadMovieModalContextProps {
	const context = useContext(UploadMovieModalContext)
	return context
}
