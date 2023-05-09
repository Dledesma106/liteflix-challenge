import { Header, RightWrapper } from './styles'
import { NotificationIcon, ProfileIcon, Cross, Logo } from 'components/Common/styles'

interface DesktopHeaderProps {
	show: boolean
	toggle: () => void
}

const DesktopHeader = ({ show, toggle }: DesktopHeaderProps): JSX.Element => {
	return (
		<>
			{show && (
				<Header>
					<Cross onClick={toggle} width={20} height={20} alt="cerrar menú" />
					<RightWrapper>
						<NotificationIcon width={26} height={26} />
						<ProfileIcon width={40} height={40} />
					</RightWrapper>
					<Logo />
					<ProfileIcon width={36} height={36} />
				</Header>
			)}
		</>
	)
}

export default DesktopHeader
