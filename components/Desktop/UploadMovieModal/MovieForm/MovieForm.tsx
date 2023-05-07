import { type ChangeEvent, type DragEvent, type FormEvent, type MutableRefObject, useState, useRef } from 'react'
import { type MyMovie } from 'backend/models/MyMovie'
import FileInput from './FileInput'
import LoadingBar from './LoadingBar'
import { uploadFileRequest, uploadMovie } from 'lib/axios'
import { Button } from '../styles'
import { UploadForm, Title, TitleInput } from './styles'
import { type CancelTokenSource } from 'axios'
import useMyMovies from '@/hooks/useMyMovies'

interface MovieFormProps {
	movie: MyMovie
	setMovie: (movie: MyMovie) => void
	uploadProgress: number
	setUploadProgress: (progress: number) => void
	uploadFailed: boolean
	setUploadFailed: (failed: boolean) => void
	setSubmitted: (submitted: boolean) => void
}

const MovieForm = ({
	setMovie,
	setSubmitted,
	movie,
	uploadProgress,
	setUploadProgress,
	uploadFailed,
	setUploadFailed
}: MovieFormProps): JSX.Element => {
	const [isUploading, setIsUploading] = useState<boolean>(false)
	const [file, setFile] = useState<File | null>(null)
	const { addMovie } = useMyMovies()
	const fieldName = 'image'
	const uploadComplete = uploadProgress === 100
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
				resetUpload
			)
			setMovie({ ...movie, imagePath })
		} catch (error) {
			setUploadFailed(true)
		}
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		setIsUploading(false)
		setSubmitted(true)
		addMovie(movie)
		void uploadMovie(movie)
	}
	return (
		<UploadForm onSubmit={handleSubmit}>
			<Title>Agregar Película</Title>
			{isUploading
			? <LoadingBar
					percentage={uploadProgress}
					uploadFailed={uploadFailed}
					upload={retryUpload}
					cancel={handleCancel}
				/>
			: <FileInput onChange={imageChange} onDrop={onImageDrop} />
			}
			<TitleInput placeholder="título" onChange={titleChange} name="title" value={movie.title} />
			<Button disabled={!uploadComplete || movie.title === ''}> Subir Película </Button>
		</UploadForm>
	)
}

export default MovieForm
