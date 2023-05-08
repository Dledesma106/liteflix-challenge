import { StyledItem, TickIcon } from './styles'
import { type DropdownItem } from '../Dropdown'
import ok from 'assets/ok-tickmark.svg'

interface props {
	item: DropdownItem
	selectItem: (item: DropdownItem) => void
}

const Item = ({ item, selectItem }: props): JSX.Element => {
	return (
		<StyledItem
			selected={item.selected}
			onClick={() => {
				selectItem(item)
			}}
		>
			{item.title}
			{item.selected && <TickIcon src={ok} width={12} height={8}/>}
		</StyledItem>
	)
}

export default Item
