import { Card, Item } from "./styles"
import Image from "next/image";
import { MenuHeader, RightWrapper, ItemsWrapper} from "./styles";
import cross from 'assets/cross.svg'
import notification from 'assets/notification.svg'
import profile from 'assets/profile.png'
import AddMovieButton from "../AddMovieButton/AddMovieButton";

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

interface props{
    show:boolean;
    toggle:()=>void;
}

const Menu = ({show, toggle}:props)=>{
    return (
        <>
        {
            show && <Card>
                <MenuHeader>
                    <Image onClick={toggle} src={cross} width={20} height={20} alt='cerrar menu'/>
                    <RightWrapper>
                        <Image src={notification} width={26} height={26} alt='icono de notificacion'/>
                        <Image src={profile} width={40} height={40} alt='icono de perfil'/>
                    </RightWrapper>
                </MenuHeader>
                <ItemsWrapper>
                    {menuItems.map(item => item==='Agregar Pelicula'?<AddMovieButton menu/>:<Item>{item}</Item>)}
                </ItemsWrapper>
            </Card>
        }
        </>
    )
}




export default Menu