import styled from 'styled-components'

export const TitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 12px;
`

export const MovieImage = styled.div<{ imgs: { desktop: string, mobile: string } }>`
	background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #242424 100%), url(${({ imgs }) => imgs.desktop});
	background-size: cover;
	color: #fff;
	height: 100%;
	width: 100%;
	padding: 0 16px 20px;
	display: flex;
	flex-direction: column;
	justify-content: end;
	margin: 0;
	border-radius: 4px;
	gap: 16px;
`

export const Card = styled.div`
	color: #fff;
	display: flex;
	flex-direction: column;
	height: 166px;
	width: 249px;
	margin: -10px 0;
	@media (max-width: 500px) {
		display: none !important;
	}
`

export const Title = styled.h3`
	text-align: center;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 16px;
`

export const ItemsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 14px;
`

export const PlusWrapper = styled.div`
	display: flex;
	justify-content: end;
`
