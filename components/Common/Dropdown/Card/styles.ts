import styled from 'styled-components'

export const DropdownCard = styled.div`
	background-color: #242424;
	width: 241px;
	height: 96px;
	padding: 24px;
	position: relative;
	right: 6px;
	z-index: 2;

	@media (max-width: 768px) {
		width: 375px;
		height: 112px;
		padding: 32px;
	}
`

export const DropdownDiamond = styled.div`
	position: absolute;
	width: 12px;
	height: 12px;
	left: 198px;
	top: -6px;
	background: #242424;
	transform: rotate(45deg);
	@media (max-width: 768px) {
		display: none !important;
	}
`

export const ItemsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 16px;
`
