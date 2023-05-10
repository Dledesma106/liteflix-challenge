import styled from 'styled-components'

export const CarouselWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 500px) {
		width: 100%;
		justify-content: center;
	}
`

export const MoviesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px 0;
	width: 250px;
	gap: 20px;
	@media (max-width: 500px) {
		gap: 24px;
		margin: 16px 0;
		width: 100%;
		justify-content: center;
	}
`
