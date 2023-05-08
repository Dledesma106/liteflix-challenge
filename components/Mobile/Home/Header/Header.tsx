import { MenuIcon, ProfileIcon, Logo } from 'components/Common/styles'
import { StyledHeader } from './styles'
import useMenu from '@/hooks/useMenu'
import Menu from '@/components/Common/Menu/Menu'

const Header = (): JSX.Element => {
	const { toggle, show } = useMenu()
	return (
		<StyledHeader>
			<MenuIcon height={12} width={27} onClick={toggle} />
			<Menu show={show} toggle={toggle} mobile />
			<Logo height={28} width={98} />
			<ProfileIcon height={36} width={36} />
		</StyledHeader>
	)
}

export default Header
