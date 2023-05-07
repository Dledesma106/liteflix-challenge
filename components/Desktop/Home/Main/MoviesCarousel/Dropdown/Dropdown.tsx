import { useState } from 'react'
import { Wrapper, Title, DropdownCard, DropdownDiamond, Clickable, ItemsWrapper, ChevronDown } from './styles'
import Item from './Item'
export type MovieType = 'POPULARES' | 'MIS PELICULAS'

export interface DropdownItem {
	title: MovieType
	selected: boolean
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

interface props {
	setMovies: (type: MovieType) => void
}

const Dropdown = ({ setMovies }: props): JSX.Element => {
	const [currentType, setCurrentType] = useState<MovieType>('POPULARES')
	const [dropdownItems, setDropdownItems] = useState<DropdownItem[]>(items)
	const [showDropdown, setShowDropdown] = useState<boolean>(false)

	const selectItem = (selectedItem: DropdownItem): void => {
		setMovies(selectedItem.title)
		setShowDropdown(false)
		setCurrentType(selectedItem.title)
		setDropdownItems(
			dropdownItems.map((item) =>
				item.title === selectedItem.title ? { ...item, selected: true } : { ...item, selected: false }
			)
		)
	}

	return (
		<>
			<Wrapper>
				<Clickable
					onClick={() => {
						setShowDropdown(!showDropdown)
					}}
				>
					<Title>
						Ver: <b>{currentType}</b>
					</Title>
					<ChevronDown width={18} height={8} />
				</Clickable>
				{showDropdown && (
					<DropdownCard>
						<DropdownDiamond />
						<ItemsWrapper>
							{dropdownItems.map((item: DropdownItem, index: number) => (
								<Item key={index} item={item} selectItem={selectItem} />
							))}
						</ItemsWrapper>
					</DropdownCard>
				)}
			</Wrapper>
		</>
	)
}

export default Dropdown
