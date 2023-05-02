import styled from 'styled-components'

export const Card = styled.div<{ img: string }>`
	background-image: url('${(props) => props.img}');
	background-size: cover;
	color: #fff;
	text-align: center;
	vertical-align: bottom;
	display: table-cell;
	height: 146px;
	width: 220px;
`

export const Title = styled.h3`
	padding-bottom: 5px;
	letter-spacing: 4px;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 16px;
`
