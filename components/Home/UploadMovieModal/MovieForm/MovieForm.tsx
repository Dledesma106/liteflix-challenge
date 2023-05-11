import FileInput from './FileInput'
import LoadingBar from './LoadingBar'
import { Button, Exit } from '../styles'
import { UploadForm, Title, TitleInput, ButtonWrapper, InputWrapper } from './styles'
import useUploadMovieModal from '@/hooks/useUploadMovieModal'

const MovieForm = (): JSX.Element => {
	const { handleSubmit, submitted, titleChange, movie, reset } = useUploadMovieModal()
	return (
		<>
			{!submitted && (
				<UploadForm onSubmit={handleSubmit}>
					<Title>Agregar Película</Title>
					<InputWrapper>
						<LoadingBar />
						<FileInput />
						<TitleInput placeholder="título" onChange={titleChange} name="title" value={movie.title} />
					</InputWrapper>
					<ButtonWrapper>
						<Button disabled={movie.imagePath === '' || movie.title === ''}> Subir Película </Button>
						<Exit onClick={reset}>Salir</Exit>
					</ButtonWrapper>
				</UploadForm>
			)}
		</>
	)
}

export default MovieForm
