import { Header } from './styles'
import { ProfileIcon, Cross, Logo } from 'components/Common/styles'

interface MobileHeaderProps {
	show: boolean
	toggle: () => void
}

const MobileHeader = ({ show, toggle }: MobileHeaderProps): JSX.Element => {
	return (
		<>
			{show && (
				<Header>
					<Cross onClick={toggle} width={20} height={20} alt="cerrar menú" />
					<Logo />
					<ProfileIcon width={40} height={40} />
				</Header>
			)}
		</>
	)
}

export default MobileHeader
