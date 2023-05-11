import { Congratulations, Liteflix, Text, TextWrapper, Wrapper } from './styles'
import { Button } from '../styles'
import useUploadMovieModal from '@/hooks/useUploadMovieModal'

const Finished = (): JSX.Element => {
	const { submitted, movie, reset } = useUploadMovieModal()
	return (
		<>
			{submitted && (
				<Wrapper>
					<Liteflix height={34} width={113} />
					<TextWrapper>
						<Congratulations>¡Felicitaciones!</Congratulations>
						<Text>{movie.title} fue correctamente subida.</Text>
					</TextWrapper>
					<Button onClick={reset}>Ir a home</Button>
				</Wrapper>
			)}
		</>
	)
}

export default Finished
