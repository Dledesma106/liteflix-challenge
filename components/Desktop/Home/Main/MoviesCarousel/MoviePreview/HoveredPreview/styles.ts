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
`

export const MovieImage = styled.div<{ img: string }>`
	background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #242424 100%), url('${(props) => props.img}');
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
`

export const Card = styled.div`
	color: #fff;
	display: flex;
	flex-direction: column;
	height: 247px;
	width: 249px;
	margin: 0;
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
