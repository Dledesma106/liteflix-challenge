import styled from 'styled-components'

export const MovieImage = styled.div<{ img: string }>`
	background-image: linear-gradient(rgba(36, 36, 36, 0.7), rgba(36, 36, 36, 0.7)),
		/* semi-transparent overlay */ url(${({ img }) => img});
	width: 327px;
	height: 172px;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	padding: 16px 24px;
	background-size: cover;
`

export const IconsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: end;
	gap: 16px;
`

export const Body = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: end;
	height: 100%;
`

export const TitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;
	padding-top: auto;
	gap: 12px;
`

export const Title = styled.h2`
	font-size: 16px;
`
