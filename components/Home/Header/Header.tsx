import { StyledHeader, Nav, LogoWrapper, Notification, MobileLogo, DesktopProfile, MobileProfile } from './styles'
import { Logo, MenuIcon } from 'components/Common/styles'
import Menu from './Menu'
import UploadMovieButton from 'components/Common/UploadMovieButton'
import useMenu from '@/hooks/useMenu'

const Header = (): JSX.Element => {
	const { toggle, show } = useMenu()
	return (
		<>
			<StyledHeader>
				<LogoWrapper>
					<Logo width={113} height={34} />
					<UploadMovieButton />
				</LogoWrapper>
				<Nav>
					<MenuIcon onClick={toggle} width={27} height={12} />
					<Notification width={26} height={26} />
					<MobileLogo width={98} height={20} />
					<DesktopProfile width={40} height={40} />
					<MobileProfile width={36} height={36} />
				</Nav>
				<Menu show={show} toggle={toggle} />
			</StyledHeader>
		</>
	)
}

export default Header
