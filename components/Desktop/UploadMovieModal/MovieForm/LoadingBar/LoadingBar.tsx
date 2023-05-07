import { Wrapper, EmptyBar, FilledBar, Percentage, ProgressButton } from './styles'

interface LoadingBarProps {
	percentage: number
	uploadFailed: boolean
	upload: () => void
	cancel: () => void
}

const LoadingBar = ({ percentage, uploadFailed, upload, cancel }: LoadingBarProps): JSX.Element => {
	const completed = percentage === 100
	const progressButtonClick = (): void => {
		if (uploadFailed) upload()
		if (!completed) cancel()
	}

	return (
		<>
			<Wrapper>
				<Percentage>{!uploadFailed ? `Cargando ${percentage}%` : '¡ERROR! NO SE PUDO CARGAR LA PELÍCULA'}</Percentage>
				<EmptyBar>
					<FilledBar percentage={percentage} failed={uploadFailed}></FilledBar>
				</EmptyBar>
				<ProgressButton completed={completed && !uploadFailed} onClick={progressButtonClick}>
					{uploadFailed ? 'reintentar' : completed ? '¡listo!' : 'cancelar'}
				</ProgressButton>
			</Wrapper>
		</>
	)
}

export default LoadingBar
