import { type MyMovie } from 'backend/models/MyMovie'
import { useState } from 'react'
import { Card, Overlay, ResponsiveCross } from './styles'
import Finished from './Finished'
import MovieForm from './MovieForm'
import Header from './Header/Header'

interface UploadMovieModalProps {
	show: boolean
	toggle: () => void
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

const UploadMovieModal = ({ show, toggle }: UploadMovieModalProps): JSX.Element => {
	const [uploadProgress, setUploadProgress] = useState<number>(0)
	const [uploadFailed, setUploadFailed] = useState<boolean>(false)
	const [submitted, setSubmitted] = useState<boolean>(false)
	const [myMovie, setMyMovie] = useState<MyMovie>(initialMovie)
	const reset = (): void => {
		toggle()
		setUploadProgress(0)
		setUploadFailed(false)
		setSubmitted(false)
		setMyMovie(initialMovie)
	}

	return (
		<>
			{show && (
				<Overlay>
					<Card>
						<ResponsiveCross onClick={reset} width={20} height={20} />
						<Header reset={reset} />
						<MovieForm
							movie={myMovie}
							setMovie={setMyMovie}
							uploadProgress={uploadProgress}
							setUploadProgress={setUploadProgress}
							uploadFailed={uploadFailed}
							setUploadFailed={setUploadFailed}
							setSubmitted={setSubmitted}
							show={!submitted}
							reset={reset}
						/>
						<Finished title={myMovie.title} reset={reset} show={submitted} />
					</Card>
				</Overlay>
			)}
		</>
	)
}

export default UploadMovieModal
