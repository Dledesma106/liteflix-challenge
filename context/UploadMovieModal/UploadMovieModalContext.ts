import { type MyMovie } from '@/backend/models/MyMovie'
import { type ChangeEvent, type DragEvent, type FormEvent, createContext } from 'react'

export interface UploadMovieModalContextProps {
	toggle: () => void
	uploadProgress: number
	uploadFailed: boolean
	movie: MyMovie
	submitted: boolean
	isUploading: boolean
	titleChange: (e: ChangeEvent<HTMLInputElement>) => void
	imageChange: (e: ChangeEvent<HTMLInputElement>) => void
	onImageDrop: (e: DragEvent<HTMLDivElement>) => void
	retryUpload: () => void
	handleCancel: () => void
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void
	reset: () => void
}

export const initialMovie = {
	_id: '',
	imagePath: '',
	imagePaths: {
		desktop: '',
		mobile: ''
	},
	title: '',
	added: false,
	liked: false,
	pressed: false
}

const initialState: UploadMovieModalContextProps = {
	toggle: (): void => {},
	uploadProgress: 0,
	uploadFailed: false,
	movie: initialMovie,
	submitted: false,
	isUploading: false,
	titleChange: (): void => {},
	imageChange: (): void => {},
	onImageDrop: (): void => {},
	retryUpload: (): void => {},
	handleCancel: (): void => {},
	handleSubmit: (): void => {},
	reset: (): void => {}
}

const UploadMovieModalContext = createContext<UploadMovieModalContextProps>(initialState)

export default UploadMovieModalContext
