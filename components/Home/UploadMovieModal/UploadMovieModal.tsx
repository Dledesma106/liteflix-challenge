import { Card, Overlay, ResponsiveCross } from './styles'
import Finished from './Finished'
import MovieForm from './MovieForm'
import Header from './Header/Header'
import useUploadMovieModal from '@/hooks/useUploadMovieModal'

interface UploadMovieModalProps {
	show: boolean
}

const UploadMovieModal = ({ show }: UploadMovieModalProps): JSX.Element => {
	const { reset } = useUploadMovieModal()

	return (
		<>
			{show && (
				<Overlay>
					<Card>
						<ResponsiveCross onClick={reset} width={20} height={20} />
						<Header reset={reset} />
						<MovieForm	/>
						<Finished />
					</Card>
				</Overlay>
			)}
		</>
	)
}

export default UploadMovieModal
