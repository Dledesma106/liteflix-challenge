import styled from 'styled-components'

export const Card = styled.div`
	background-color: #242424;
	
	@media (min-width: 769px) {
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
		flex-direction: column;
		width: 100%;
		height: 100%;
		padding: 16px 24px;
		position: fixed;
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
`

export const ItemsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: space-between;
	margin-top: 65px;
`
