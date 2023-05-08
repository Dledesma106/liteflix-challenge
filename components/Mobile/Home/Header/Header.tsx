import { MenuIcon, ProfileIcon, Logo } from 'components/Common/styles'
import { StyledHeader } from './styles'

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
        <MenuIcon height={12} width={27}/>
        <Logo height={28} width={98}/>
        <ProfileIcon height={36} width={36}/>
    </StyledHeader>
  )
}

export default Header
