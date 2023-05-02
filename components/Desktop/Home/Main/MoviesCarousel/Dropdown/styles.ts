import styled from 'styled-components'

export const Wrapper = styled.div`
	margin-top: 64px;
	margin-bottom: 24px;
	width: 194px;
	height: 18px;
`

export const Clickable = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

export const Title = styled.h3`
	font-size: 18px;
	font-weight: 100;
	//margin-right:11px;
`

export const DropdownCard = styled.div`
	background-color: #242424;
	position: relative;
	right: 16px;
	width: 241px;
	height: 96px;
	padding: 24px;
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
