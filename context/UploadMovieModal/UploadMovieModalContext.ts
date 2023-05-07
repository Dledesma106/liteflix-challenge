import { createContext } from 'react'

export interface UploadMovieModalContextProps {
	toggleModal: () => void
}

const initialState: UploadMovieModalContextProps = { toggleModal: (): void => {} }

const UploadMovieModalContext = createContext<UploadMovieModalContextProps>(initialState)

export default UploadMovieModalContext
