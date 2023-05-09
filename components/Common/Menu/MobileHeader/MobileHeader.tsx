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
					<Logo height={28} width={98}/>
					<ProfileIcon width={36} height={36} />
				</Header>
			)}
		</>
	)
}

export default MobileHeader
