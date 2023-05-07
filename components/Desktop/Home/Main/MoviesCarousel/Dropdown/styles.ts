import Image from 'next/image'
import styled from 'styled-components'
import down from 'assets/down-arrow.svg'

export const Wrapper = styled.div`
	margin-bottom: 24px;
	height: 18px;
`

export const Clickable = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 10px;
`

export const Title = styled.h3`
	font-size: 18px;
	font-weight: 100;
`

export const DropdownCard = styled.div`
	background-color: #242424;
	width: 241px;
	height: 96px;
	padding: 24px;
	position: relative;
	right: 6px;
	z-index: 2;
`

export const DropdownDiamond = styled.div`
	position: absolute;
	width: 12px;
	height: 12px;
	left: 198px;
	top: -6px;
	background: #242424;
	transform: rotate(45deg);
`

export const ItemsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const ChevronDown = styled(Image).attrs({ src: down, alt: 'chevron abajo' })`
`
