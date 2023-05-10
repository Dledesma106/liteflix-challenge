import { Header, ProfileWrapper, NavWrapper, LogoWrapper } from './styles'
import { NotificationIcon, ProfileIcon, Cross } from 'components/Common/styles'

interface DesktopHeaderProps {
	toggle: () => void
}

const DesktopHeader = ({ toggle }: DesktopHeaderProps): JSX.Element => {
	return (
		<>
			<Header>
				<Cross onClick={toggle} width={20} height={20} alt="cerrar menú" />
				<NavWrapper>
					<NotificationIcon width={26} height={26} />
					<ProfileIcon width={40} height={40} />
				</NavWrapper>
				<LogoWrapper width={98} height={28} />
				<ProfileWrapper width={36} height={36} />
			</Header>
		</>
	)
}

export default DesktopHeader
