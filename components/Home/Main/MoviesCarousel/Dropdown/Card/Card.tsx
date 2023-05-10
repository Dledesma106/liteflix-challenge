import { useState } from 'react'
import type { DropdownItem } from '../Dropdown'
import { DropdownCard, DropdownDiamond, ItemsWrapper } from './styles'
import Item from './Item'

interface CardProps {
	show: boolean
	selectItem: (item: DropdownItem) => void
}

const items: DropdownItem[] = [
	{
		title: 'POPULARES',
		selected: true
	},
	{
		title: 'MIS PELICULAS',
		selected: false
	}
]

const Card = ({ show, selectItem }: CardProps): JSX.Element => {
	const [dropdownItems, setDropdownItems] = useState<DropdownItem[]>(items)
	const select = (selectedItem: DropdownItem): void => {
		setDropdownItems(
			dropdownItems.map((item: DropdownItem) =>
				item.title === selectedItem.title ? { ...item, selected: true } : { ...item, selected: false }
			)
		)
		selectItem(selectedItem)
	}

	return (
		<>
			{show && (
				<DropdownCard>
					<DropdownDiamond />
					<ItemsWrapper>
						{dropdownItems.map((item: DropdownItem, index: number) => (
							<Item key={index} item={item} selectItem={() => select(item)} />
						))}
					</ItemsWrapper>
				</DropdownCard>
			)}
		</>
	)
}

export default Card
