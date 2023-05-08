import styled from 'styled-components'
import Image from 'next/image'
import playButton from 'assets/play-button.svg'

export const MovieImage = styled.div<{ img: string }>`
	background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 22.78%, #000000 122.69%), url('${(props) => props.img}');
	background-size: cover;
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 4px;
	height: 146px;
	width: 220px;
	@media (max-width: 768px) {
		justify-content: center;
		align-items: center;
		padding: 52px 32px 0;
		gap: 24px;
		width: 327px;
		height: 172px;
	}
`

export const Card = styled.div`
	color: #fff;
	display: flex;
	flex-direction: column;
	border-radius: 4px;
	width: 327px;
	height: 172px;
	@media (min-width: 769px) {
		height: 146px;
		width: 220px;
	}
`

export const Title = styled.h3`
	padding-bottom: 14px;
	text-align: center;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 16px;
`
export const PlayButton = styled(Image).attrs({ src: playButton, alt: 'boton de reproduccion' })`
	@media (min-width: 769px) {
		position: relative;
		left: 50%;
		top: 50%;
		display: flex;
		justify-content: center;
		transform: translateY(-50%) translateX(-50%);
	}
`
