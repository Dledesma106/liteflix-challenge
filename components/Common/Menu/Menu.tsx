import { Card, Item, ItemsWrapper } from './styles'
import UploadMovieButton from 'components/Common/UploadMovieButton'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

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
	mobile?: boolean
}

const Menu = ({ show, toggle, mobile = false }: MenuProps): JSX.Element => {
	return (
		<>
			{show && (
				<Card>
					<DesktopHeader show={!mobile} toggle={toggle} />
					<MobileHeader show={mobile} toggle={toggle} />
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
