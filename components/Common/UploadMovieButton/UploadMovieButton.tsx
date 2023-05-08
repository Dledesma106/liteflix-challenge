import { Wrapper, ButtonText, PlusIcon } from './styles'
import useUploadMovieModal from 'hooks/useUploadMovieModal'

const UploadMovieButton = ({ menu }: { menu?: boolean }): JSX.Element => {
	const { toggleModal } = useUploadMovieModal()

	return (
		<Wrapper menu={menu as boolean} onClick={toggleModal}>
			<PlusIcon width={14} height={14} />
			<ButtonText menu={menu as boolean}>Agregar Pelicula</ButtonText>
		</Wrapper>
	)
}

export default UploadMovieButton
