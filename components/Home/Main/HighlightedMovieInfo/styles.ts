import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto 0 100px 0;

	@media (max-width: 500px) {
		justify-content: end;
		align-items: center;
		margin: 214px 0 0 0;
		gap: 16px;
	}
`

export const MovieTitle = styled.h2`
	color: #64eebc;
	font-size: 120px;
	@media (max-width: 500px) {
		font-size: 76px;
		text-align: center;
		max-height: 155px;
		line-height: 78px;
	}
`

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 24px;

	@media (max-width: 500px) {
		flex-direction: column;
		gap: 16px;
	}
`
