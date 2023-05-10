import { StyledHeader } from './styles'
import { MenuIcon, Logo, ProfileIcon } from '@/components/Common/styles'

interface HeaderProps {
	reset: () => void
}

const Header = ({ reset }: HeaderProps): JSX.Element => {
	return (
		<StyledHeader>
			<MenuIcon onClick={reset} height={12} width={27} />
			<Logo height={28} width={98} />
			<ProfileIcon width={36} height={36} />
		</StyledHeader>
	)
}

export default Header
