import { Wrapper, ButtonText } from './styles'
import plus from 'assets/plus.svg'
import Image from 'next/image'
import useMovieForm from '@/hooks/useMovieForm'

const AddMovieButton = ({ menu }: { menu?: boolean }): JSX.Element => {
  const { toggleDesktopMovieForm } = useMovieForm()

  return (
        <Wrapper menu={menu as boolean} onClick={toggleDesktopMovieForm}>
            <Image src={plus} width={14} height={14} alt='Icono de suma'/>
            <ButtonText menu={menu as boolean}>Agregar Pelicula</ButtonText>
        </Wrapper>
  )
}

export default AddMovieButton
