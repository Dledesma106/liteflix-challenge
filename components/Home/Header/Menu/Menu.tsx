import { Card, Item, ItemsWrapper } from './styles'
import UploadMovieButton from 'components/Common/UploadMovieButton'
import Header from './Header'

const menuItems = [
	'Inicio',
	'Series',
	'Peliculas',
	'Agregadas Recientemente',
	'Populares',
	'Mis Peliculas',
	'Mi Lista',
	'Agregar Pelicula',
	'Cerrar Sesion'
]

interface MenuProps {
	show: boolean
	toggle: () => void
}

const Menu = ({ show, toggle }: MenuProps): JSX.Element => {
	return (
		<>
			{show && (
				<Card>
					<Header toggle={toggle} />
					<ItemsWrapper>
						{menuItems.map((item, index) =>
							item === 'Agregar Pelicula' ? <UploadMovieButton menu key={index} /> : <Item key={index}>{item}</Item>
						)}
					</ItemsWrapper>
				</Card>
			)}
		</>
	)
}

export default Menu
