import styled from 'styled-components'
import logo from 'assets/logo.svg'
import menu from 'assets/menu.svg'
import Image from 'next/image'
import notification from 'assets/notification.svg'
import profile from 'assets/profile.png'
import cross from 'assets/cross.svg'

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
