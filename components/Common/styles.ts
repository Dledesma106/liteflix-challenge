import styled from 'styled-components'
import Image from 'next/image'
import logo from 'assets/logo.svg'
import menu from 'assets/menu.svg'
import notification from 'assets/notification.svg'
import profile from 'assets/profile.png'
import cross from 'assets/cross.svg'
import plus from 'assets/plus.svg'
import play from 'assets/play.svg'
import up from 'assets/up-arrow.svg'
import down from 'assets/down-arrow.svg'
import star from 'assets/star.svg'

export const Logo = styled(Image).attrs({ src: logo, alt: 'logo de liteflix' })`
	cursor: pointer;
`

export const MenuIcon = styled(Image).attrs({ src: menu, alt: 'icono de menu' })`
	cursor: pointer;
`

export const NotificationIcon = styled(Image).attrs({ src: notification, alt: 'icono de notificacion' })`
	cursor: pointer;
`

export const ProfileIcon = styled(Image).attrs({ src: profile, alt: 'icono de perfil' })`
	cursor: pointer;
`

export const Cross = styled(Image).attrs({ src: cross })`
	cursor: pointer;
`

export const Button = styled.div<{ transparent?: boolean }>`
	display: flex;
	flex-direction: row;
	width: 248px;
	height: 56px;
	gap: 12px;
	font-size: 18px;
	justify-content: center;
	align-items: center;
	padding: 19px 61px;
	background-color: #242424;
	cursor: pointer;
	${({ transparent }) =>
		(transparent as boolean) &&
		`
        border:solid 1px #fff;
        background-color:rgb(36,36,36, 0.5);
    `}
`

export const PlusIcon = styled(Image).attrs({ src: plus, alt: 'icono de suma' })`
	cursor: pointer;
`

export const PlayIcon = styled(Image).attrs({ src: play, alt: 'icono de reproduccion' })`
	cursor: pointer;
`

export const LiteflixOriginal = styled.p`
	font-size: 20px;
	height: 20px;
`

export const ChevronUp = styled(Image).attrs({
	src: up,
	alt: 'chevron arriba'
})<{ hidden?: boolean }>`
	cursor: pointer;
	${({ hidden }) => (hidden as boolean) && 'display:none;'}
`

export const ChevronDown = styled(Image).attrs({
	src: down,
	alt: 'chevron abajo'
})<{ hidden?: boolean }>`
	cursor: pointer;
	${({ hidden }) => (hidden as boolean) && 'display:none;'}
`

export const StarIcon = styled(Image).attrs({ src: star, alt: 'icono de estrella' })``

export const ClickableIcon = styled(Image)`
	cursor: pointer;
`
