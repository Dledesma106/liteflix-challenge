import styled from 'styled-components'
import Image from 'next/image'
import playButton from 'assets/play-button.svg'

export const MovieImage = styled.div<{ imgs: { desktop: string, mobile: string } }>`
	background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 22.78%, #000000 122.69%),
		url(${({ imgs }) => imgs.desktop});
	background-size: cover;
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 4px;
	height: 146px;
	width: 220px;
	z-index: 0;
	padding: 0 0 14px;
	@media (max-width: 500px) {
		background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 22.78%, #000000 122.69%),
			url(${({ imgs }) => imgs.mobile});
		justify-content: space-between;
		align-items: center;
		padding: 52px 24px 32px;
		width: 100%;
		height: 172px;
	}
`

export const Title = styled.h3`
	text-align: center;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 16px;
`
export const PlayButton = styled(Image).attrs({ src: playButton, alt: 'boton de reproduccion' })`
	cursor: pointer;
	@media (min-width: 501px) {
		position: relative;
		left: 50%;
		top: 50%;
		display: flex;
		justify-content: center;
		transform: translateY(-50%) translateX(-50%);
		z-index: 1;
	}
`
