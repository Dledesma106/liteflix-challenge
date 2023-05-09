import styled from 'styled-components'

export const Card = styled.div`
	background-color: #242424;
	gap:65px;
	@media (min-width: 769px) {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 0px;
		right: 0px;
		width: 761px;
		height: 100%;
		z-index: 5;
		padding: 28px 88px 0px 104px;
	}

	@media (max-width: 768px) {
		display: flex;
		width: 100%;
		height: auto;
		flex-direction: column;
		padding: 16px 24px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
`

export const Item = styled.div`
	padding: 20px 0;
	font-size: 22px;
	font-weight: 100;
	@media (max-width: 768px) {
		font-size: 16px;
	}
`

export const ItemsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	height: 100%;
	
`
