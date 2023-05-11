import useUploadMovieModal from '@/hooks/useUploadMovieModal'
import { Wrapper, EmptyBar, FilledBar, Percentage, ProgressButton } from './styles'

const LoadingBar = (): JSX.Element => {
	const { uploadProgress, uploadFailed, retryUpload, handleCancel, isUploading } = useUploadMovieModal()
	const completed = uploadProgress === 100
	const progressButtonClick = (): void => {
		if (uploadFailed) retryUpload()
		if (!completed) handleCancel()
	}

	return (
		<>
			{isUploading && (
				<Wrapper>
					<Percentage>
						{!uploadFailed ? `Cargando ${uploadProgress}%` : '¡ERROR! NO SE PUDO CARGAR LA PELÍCULA'}
					</Percentage>
					<EmptyBar>
						<FilledBar percentage={uploadProgress} failed={uploadFailed}></FilledBar>
					</EmptyBar>
					<ProgressButton completed={completed && !uploadFailed} onClick={progressButtonClick}>
						{uploadFailed ? 'reintentar' : completed ? '¡listo!' : 'cancelar'}
					</ProgressButton>
				</Wrapper>
			)}
		</>
	)
}

export default LoadingBar
