import { useRef, type ChangeEvent, type DragEvent } from 'react'
import { Input, FileDrop, ClipIcon } from './styles'

interface FileInputProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	onDrop: (e: DragEvent<HTMLDivElement>) => void
	show: boolean
}

const FileInput = ({ onChange, onDrop, show }: FileInputProps): JSX.Element => {
	const fileInputRef = useRef<HTMLInputElement>(null)

	const handleClick = (): void => {
		fileInputRef.current?.click()
	}

	const handleDragOver = (event: DragEvent<HTMLDivElement>): void => {
		event.preventDefault()
	}

	return (
		<>
			{show && (
				<>
					<Input onChange={onChange} ref={fileInputRef} />
					<FileDrop onClick={handleClick} onDragOver={handleDragOver} onDrop={onDrop}>
						<ClipIcon height={16} width={16} />
					</FileDrop>
				</>
			)}
		</>
	)
}

export default FileInput
