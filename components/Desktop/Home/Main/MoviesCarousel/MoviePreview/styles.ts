import styled from 'styled-components'

export const ButtonWrapper = styled.div`
	position: relative;
	left: -50%;
	top: 50%;
	display: flex;
	justify-content: center;
	transform: translateY(-50%) translateX(50%);
`

export const MovieImage = styled.div<{ img: string }>`
	background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 22.78%, #000000 122.69%), url('${(props) => props.img}');
	background-size: cover;
	color: #fff;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: inherit;
`

export const Card = styled.div`
	color: #fff;
	display: flex;
	flex-direction: column;
	height: 146px;
	width: 220px;
	margin: 10px;
	border-radius: 4px;
`

export const Title = styled.h3`
	padding-bottom: 5px;
	text-align: center;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 16px;
`
