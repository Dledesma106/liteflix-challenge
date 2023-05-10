import styled from 'styled-components'

export const TitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 12px;
`

export const Detail = styled.div`
	height: 81px;
	width: 249px;
	background-color: #242424;
	top: 120px;
	padding: 0 16px 24px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	border-radius: 0 0 4px 4px;
	z-index: 10;
`

export const MovieImage = styled.div<{ imgs: { desktop: string, mobile: string } }>`
	background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #242424 100%), url('${({ imgs }) => imgs.desktop}');
	background-size: cover;
	color: #fff;
	height: 100%;
	width: 100%;
	padding: 0 16px 20px;
	display: flex;
	flex-direction: column;
	justify-content: end;
	margin: 0;
	border-radius: 4px 4px 0 0;
	gap: 16px;
	z-index: 1;
	@media (max-width: 500px) {
		background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #242424 100%), url('${({ imgs }) => imgs.mobile}');
	}
`

export const Card = styled.div<{ index: number }>`
	color: #fff;
	display: flex;
	flex-direction: column;
	height: 247px;
	width: 249px;
	margin: -50.5px 0;
	position: relative;
	${({ index }) => (index === 0 ? 'margin: 0 0 -101px;' : index === 3 ? 'margin: -101px 0 0;' : '')}

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

export const Description = styled.p`
	font-family: 'Roboto', sans-serif;
	font-size: 12px;
	height: 29px;
	position: relative;
	top: -5px;
	letter-spacing: normal;
	text-align: left;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	z-index: 9999;
`

export const ItemsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 14px;
`

export const RatingWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 6px;
	font-size: 14px;
`

export const PlusWrapper = styled.div`
	display: flex;
	justify-content: end;
`
