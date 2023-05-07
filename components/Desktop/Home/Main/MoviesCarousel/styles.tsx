import styled from 'styled-components'
import Image from 'next/image'
import up from 'assets/up-arrow.svg'
import down from 'assets/down-arrow.svg'

export const CarouselWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: auto;
	margin-top: 64px;
`

export const MoviesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px 0;
	width: 250px;
	gap: 20px;
`

export const ChevronUp = styled(Image).attrs({
	src: up,
	alt: 'chevron arriba'
  })<({ hidden: boolean })>`
	width: 20px;
	height: 8px;
	${({ hidden }) => hidden && 'display:none;'}
`

export const ChevronDown = styled(Image).attrs({
	src: down,
	alt: 'chevron abajo'
  })<({ hidden: boolean })>`
	width: 20px;
	height: 8px;
	${({ hidden }) => hidden && 'display:none;'}
`
