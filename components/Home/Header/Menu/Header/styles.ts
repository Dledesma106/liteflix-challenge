import styled from 'styled-components'
import { Logo, ProfileIcon } from 'components/Common/styles'

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

export const NavWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 40px;
	justify-content: center;
	@media (max-width: 500px) {
		display: none !important;
	}
`

export const LogoWrapper = styled(Logo)`
	@media (min-width: 501px) {
		display: none !important;
	}
`

export const ProfileWrapper = styled(ProfileIcon)`
	@media (min-width: 501px) {
		display: none !important;
	}
`
