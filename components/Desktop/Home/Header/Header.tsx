import { StyledHeader, RightWrapper, LeftWrapper } from './styles'
import { Logo, MenuIcon, NotificationIcon, ProfileIcon } from 'components/Common/styles'
import Menu from 'components/Common/Menu'
import UploadMovieButton from 'components/Common/UploadMovieButton'
import useMenu from '@/hooks/useMenu'

const Header = (): JSX.Element => {
	const { toggle, show } = useMenu()
	return (
		<>
			<StyledHeader>
				<LeftWrapper>
					<Logo width={113} height={34} />
					<UploadMovieButton />
				</LeftWrapper>
				<RightWrapper>
					<MenuIcon onClick={toggle} width={27} height={12} />
					<NotificationIcon width={26} height={26} />
					<ProfileIcon width={40} height={40} />
				</RightWrapper>
				<Menu show={show} toggle={toggle} />
			</StyledHeader>
		</>
	)
}

export default Header
