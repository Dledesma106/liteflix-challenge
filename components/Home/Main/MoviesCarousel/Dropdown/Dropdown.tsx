import { useState } from 'react'
import { Wrapper, Title, Clickable } from './styles'
import { ChevronDown } from 'components/Common/styles'
import Card from './Card/Card'
export type MovieType = 'POPULARES' | 'MIS PELICULAS'

export interface DropdownItem {
	title: MovieType
	selected: boolean
}

interface DropdownProps {
	setMovies: (type: MovieType) => void
}

const Dropdown = ({ setMovies }: DropdownProps): JSX.Element => {
	const [currentType, setCurrentType] = useState<MovieType>('POPULARES')
	const [showDropdown, setShowDropdown] = useState<boolean>(false)

	const selectItem = (selectedItem: DropdownItem): void => {
		setMovies(selectedItem.title)
		setShowDropdown(false)
		setCurrentType(selectedItem.title)
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
					<ChevronDown width={11} height={5} />
				</Clickable>
				<Card show={showDropdown} selectItem={selectItem} />
			</Wrapper>
		</>
	)
}

export default Dropdown
