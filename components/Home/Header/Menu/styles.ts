import styled from 'styled-components'

export const Card = styled.div`
	background-color: #242424;

	@media (min-width: 501px) {
		position: absolute;
		top: 0px;
		right: 0px;
		width: 761px;
		height: 100%;
		z-index: 5;
		padding: 32px 104px 0px;
	}

	@media (max-width: 500px) {
		display: inline-flex;
		flex-direction: column;
		width: 100%;
		min-height: 812px;
		padding: 16px 24px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
`

export const Item = styled.div`
	font-size: 22px;
	font-weight: 100;
	cursor: pointer;
	@media (max-width: 500px) {
		font-size: 16px;
	}
`

export const ItemsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: space-between;
	margin-top: 65px;
	gap: 40px;
`
