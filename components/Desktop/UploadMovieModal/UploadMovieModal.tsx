import { type MyMovie } from 'backend/models/MyMovie'
import { useState } from 'react'
import { Card, Overlay, Cross } from './styles'
import Finished from './Finished'
import MovieForm from './MovieForm'

interface UploadMovieModalProps {
	show: boolean
	toggle: () => void
}

export const initialMovie = {
	_id: '',
	imagePath: '',
	title: '',
	added: false,
	liked: false
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
						<Cross onClick={reset} width={20} height={20}/>
						{!submitted
						? <MovieForm
								movie={myMovie}
								setMovie={setMyMovie}
								uploadProgress={uploadProgress}
								setUploadProgress={setUploadProgress}
								uploadFailed={uploadFailed}
								setUploadFailed={setUploadFailed}
								setSubmitted={setSubmitted}
							/>
						: <Finished title={myMovie.title} reset={reset} />
						}
					</Card>
				</Overlay>
			)}
		</>
	)
}

export default UploadMovieModal
