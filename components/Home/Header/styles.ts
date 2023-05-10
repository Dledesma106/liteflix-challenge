import styled from 'styled-components'
import { Logo, NotificationIcon, ProfileIcon } from '@/components/Common/styles'

export const StyledHeader = styled.header`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`
export const LogoWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 64px;

	@media (max-width: 500px) {
		display: none !important;
	}
`

export const Nav = styled.div`
	display: flex;
	flex-direction: row;
	gap: 40px;
	align-items: center;
	justify-content: center;
	@media (max-width: 500px) {
		justify-content: space-between;
		width: 100%;
	}
`

export const Notification = styled(NotificationIcon)`
	cursor: pointer;
	@media (max-width: 500px) {
		display: none !important;
	}
`

export const MobileLogo = styled(Logo)`
	@media (min-width: 501px) {
		display: none !important;
	}
`

export const DesktopProfile = styled(ProfileIcon)`
	@media (max-width: 500px) {
		display: none !important;
	}
`

export const MobileProfile = styled(ProfileIcon)`
	@media (min-width: 501px) {
		display: none !important;
	}
`
