import { useMemo, useState } from 'react'
import UploadMovieModalContext from './UploadMovieModalContext'
import DesktopUploadMovieModal from 'components/Desktop/UploadMovieModal'

export interface ProviderProps {
	children: JSX.Element | JSX.Element[]
}

const UploadMovieModalProvider = ({ children }: ProviderProps): JSX.Element => {
	const [show, setShow] = useState<boolean>(false)

	function toggleModal(): void {
		setShow(!show)
	}

	const value = useMemo(() => ({ toggleModal }), [show])

	return (
		<UploadMovieModalContext.Provider value={value}>
			{children}
			<DesktopUploadMovieModal show={show} toggle={toggleModal} />
		</UploadMovieModalContext.Provider>
	)
}

export default UploadMovieModalProvider