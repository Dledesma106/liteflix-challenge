import { type ChangeEvent, type DragEvent, type FormEvent, type MutableRefObject, useMemo, useRef, useState } from 'react'
import UploadMovieModalContext from './UploadMovieModalContext'
import UploadMovieModal from 'components/Home/UploadMovieModal'
import type { MyMovie } from 'backend/models/MyMovie'
import useMyMovies from 'hooks/useMyMovies'
import { uploadFileRequest, uploadMovie } from '@/lib/axios'
import type { CancelTokenSource } from 'axios'

export interface ProviderProps {
	children: JSX.Element | JSX.Element[]
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

const UploadMovieModalProvider = ({ children }: ProviderProps): JSX.Element => {
	const [show, setShow] = useState<boolean>(false)
	const [uploadProgress, setUploadProgress] = useState<number>(0)
	const [uploadFailed, setUploadFailed] = useState<boolean>(false)
	const [submitted, setSubmitted] = useState<boolean>(false)
	const [movie, setMovie] = useState<MyMovie>(initialMovie)
	const [isUploading, setIsUploading] = useState<boolean>(false)
	const [file, setFile] = useState<File | null>(null)
	const { addMovie } = useMyMovies()
	const fieldName = 'image'
	const cancelTokenSourceRef = useRef<CancelTokenSource>(null) as MutableRefObject<CancelTokenSource | null>
	const resetUpload = (): void => {
		setFile(null)
		setUploadFailed(false)
		setUploadProgress(0)
		setIsUploading(false)
	}
	const titleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target
		setMovie({ ...movie, [name]: value })
	}

	const imageChange = (e: ChangeEvent<HTMLInputElement>): void => {
		console.log('added file')
		if (e.target.files?.length === undefined) return
		void handleUpload(e.target.files[0])
		setFile(e.target.files[0])
	}

	const onImageDrop = (e: DragEvent<HTMLDivElement>): void => {
		e.preventDefault()
		void handleUpload(e.dataTransfer.files[0])
		setFile(e.dataTransfer.files[0])
	}

	const retryUpload = (): void => {
		if (file === null) return
		setUploadFailed(false)
		setUploadProgress(0)
		void handleUpload(file)
	}

	const setCancelTokenSourceRef = (cancel: CancelTokenSource): void => {
		cancelTokenSourceRef.current = cancel
	}

	const handleCancel = (): void => {
		if (cancelTokenSourceRef.current !== null) {
			cancelTokenSourceRef.current.cancel('Upload canceled by user.')
			setUploadFailed(false)
		}
	}

	const handleUpload = async (file: File): Promise<void> => {
		try {
			setIsUploading(true)
			const imagePath = await uploadFileRequest(
				file,
				fieldName,
				setUploadProgress,
				setCancelTokenSourceRef,
				setUploadFailed,
				resetUpload
			)
			setMovie({ ...movie, imagePath, imagePaths: { desktop: imagePath, mobile: imagePath } })
		} catch (error) {}
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		setIsUploading(false)
		setSubmitted(true)
		addMovie(movie)
		void uploadMovie(movie)
	}

	const reset = (): void => {
		toggle()
		setUploadProgress(0)
		setUploadFailed(false)
		setSubmitted(false)
		setMovie(initialMovie)
	}

	function toggle(): void {
		setShow(!show)
	}

	const value = useMemo(() => ({ toggle, uploadProgress, uploadFailed, movie, submitted, isUploading, titleChange, imageChange, onImageDrop, retryUpload, handleCancel, handleSubmit, reset }), [show, isUploading, uploadFailed, uploadProgress, submitted, movie])

	return (
		<UploadMovieModalContext.Provider value={value}>
			{children}
			<UploadMovieModal show={show} />
		</UploadMovieModalContext.Provider>
	)
}

export default UploadMovieModalProvider
