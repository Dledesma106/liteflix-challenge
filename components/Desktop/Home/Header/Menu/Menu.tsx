import { Card, Item, MenuHeader, RightWrapper, ItemsWrapper } from './styles'
import { NotificationIcon, ProfileIcon, Cross } from 'components/Common/styles'
import UploadMovieButton from '../UploadMovieButton'

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
					<MenuHeader>
						<Cross onClick={toggle} width={20} height={20} alt='cerrar menú'/>
						<RightWrapper>
							<NotificationIcon width={26} height={26}/>
							<ProfileIcon width={40} height={40}/>
						</RightWrapper>
					</MenuHeader>
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
