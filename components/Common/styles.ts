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

export const Logo = styled(Image).attrs({ src: logo, alt: 'logo de liteflix' })`
`

export const MenuIcon = styled(Image).attrs({ src: menu, alt: 'icono de menu' })`
`

export const NotificationIcon = styled(Image).attrs({ src: notification, alt: 'icono de notificacion' })`
`

export const ProfileIcon = styled(Image).attrs({ src: profile, alt: 'icono de perfil' })`
`

export const Cross = styled(Image).attrs({ src: cross })`
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

	${({ transparent }) =>
		(transparent as boolean) &&
		`
        border:solid 1px #fff;
        background-color:rgb(36,36,36, 0.5);
    `}
`

export const PlusIcon = styled(Image).attrs({ src: plus, alt: 'icono de suma' })`
	width: 16px;
	height: 16px;
`

export const PlayIcon = styled(Image).attrs({ src: play, alt: 'icono de reproduccion' })`
	width: 16px;
	height: 16px;
`

export const LiteflixOriginal = styled.p`
	font-size: 20px;
	height: 20px;
`

export const Bold = styled.span`
	font-weight: 700;
`

export const ChevronUp = styled(Image).attrs({
	src: up,
	alt: 'chevron arriba'
  })<({ hidden?: boolean })>`
	${({ hidden }) => hidden as boolean && 'display:none;'}
`

export const ChevronDown = styled(Image).attrs({
	src: down,
	alt: 'chevron abajo'
  })<({ hidden?: boolean })>`
	${({ hidden }) => hidden as boolean && 'display:none;'}
`
