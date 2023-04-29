import { StyledHeader, RightWrapper, LeftWrapper } from './styles'
import plus from 'assets/plus.svg'
import logo from 'assets/logo.svg'
import menu from 'assets/menu.svg'
import Image from 'next/image'
import notification from 'assets/notification.svg'
import profile from 'assets/profile.png'
import { useState } from 'react'
import Menu from './Menu'
import useMovieForm from '@/hooks/useMovieForm'
import AddMovieButton from './AddMovieButton/AddMovieButton'

const Header = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    
    const toggleMenu = ()=>{
        setShowMenu(!showMenu)
    }

    return (
        <>
            <StyledHeader>
                <LeftWrapper>
                    <Image src={logo} width={113} height={34} alt='logo de liteflix'/>
                    <AddMovieButton/>
                </LeftWrapper>
                <RightWrapper>
                    <Image  onClick={toggleMenu} src={menu} width={27} height={12} alt='icono de menu'/>
                    <Image src={notification} width={26} height={26} alt='icono de notificacion'/>
                    <Image src={profile} width={40} height={40} alt='icono de perfil'/>  
                </RightWrapper>
                <Menu show={showMenu} toggle={toggleMenu}/>
            </StyledHeader>
        </>
    )
}

export default Header

