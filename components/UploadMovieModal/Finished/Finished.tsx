import { Congratulations, Liteflix, Text, TextWrapper, Wrapper } from './styles'
import { Button } from '../styles'

interface FinishedProps {
	title: string
	reset: () => void
	show: boolean
}

const Finished = ({ title, reset, show }: FinishedProps): JSX.Element => {
	return (
		<>
			{show && (
				<Wrapper>
					<Liteflix height={34} width={113} />
					<TextWrapper>
						<Congratulations>¡Felicitaciones!</Congratulations>
						<Text>{title} fue correctamente subida.</Text>
					</TextWrapper>
					<Button onClick={reset}>Ir a home</Button>
				</Wrapper>
			)}
		</>
	)
}

export default Finished
