import { useRef, type DragEvent } from 'react'
import { Input, FileDrop, ClipIcon } from './styles'
import useUploadMovieModal from '@/hooks/useUploadMovieModal'

const FileInput = (): JSX.Element => {
	const { isUploading, imageChange, onImageDrop } = useUploadMovieModal()
	const fileInputRef = useRef<HTMLInputElement>(null)
	const handleClick = (): void => {
		fileInputRef.current?.click()
	}

	const handleDragOver = (event: DragEvent<HTMLDivElement>): void => {
		event.preventDefault()
	}

	return (
		<>
			{!isUploading && (
				<>
					<Input onChange={imageChange} ref={fileInputRef} />
					<FileDrop onClick={handleClick} onDragOver={handleDragOver} onDrop={onImageDrop}>
						<ClipIcon height={16} width={16} />
					</FileDrop>
				</>
			)}
		</>
	)
}

export default FileInput
