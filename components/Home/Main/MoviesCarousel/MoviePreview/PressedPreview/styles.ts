import styled from 'styled-components'

export const MovieImage = styled.div<{ imgs: { desktop: string, mobile: string } }>`
	background-image: linear-gradient(rgba(36, 36, 36, 0.7), rgba(36, 36, 36, 0.7)), url(${({ imgs }) => imgs.desktop});
	width: 100%;
	height: 172px;
	background-size: cover;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	padding: 16px 24px 24px;
	@media (min-width: 501px) {
		background-image: linear-gradient(rgba(36, 36, 36, 0.7), rgba(36, 36, 36, 0.7)), url(${({ imgs }) => imgs.mobile});
		display: none !important;
	}
`

export const IconsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: end;
	gap: 16px;
	margin-bottom: 12px;
`

export const TitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;
	gap: 12px;
	margin-bottom: 16px;
`

export const Title = styled.h2`
	font-size: 16px;
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

export const Footer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const Rating = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 6px;
`
