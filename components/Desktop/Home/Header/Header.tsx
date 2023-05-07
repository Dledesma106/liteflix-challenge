import { StyledHeader, RightWrapper, LeftWrapper } from './styles'
import { Logo, MenuIcon, NotificationIcon, ProfileIcon } from 'components/Common/styles'
import { useState } from 'react'
import Menu from './Menu'
import UploadMovieButton from './UploadMovieButton'

const Header = (): JSX.Element => {
	const [showMenu, setShowMenu] = useState<boolean>(false)

	const toggleMenu = (): void => {
		setShowMenu(!showMenu)
	}

	return (
		<>
			<StyledHeader>
				<LeftWrapper>
					<Logo width={113} height={34} />
					<UploadMovieButton />
				</LeftWrapper>
				<RightWrapper>
					<MenuIcon onClick={toggleMenu} width={27} height={12}/>
					<NotificationIcon width={26} height={26}/>
					<ProfileIcon width={40} height={40}/>
				</RightWrapper>
				<Menu show={showMenu} toggle={toggleMenu} />
			</StyledHeader>
		</>
	)
}

export default Header
