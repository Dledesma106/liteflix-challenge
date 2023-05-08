import Image from 'next/image'
import styled from 'styled-components'
import down from 'assets/down-arrow.svg'

export const Wrapper = styled.div`
	margin-bottom: 24px;
	height: 18px;
`

export const Clickable = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 10px;
`

export const Title = styled.h3`
	font-size: 18px;
	font-weight: 100;
`

export const ChevronDown = styled(Image).attrs({ src: down, alt: 'chevron abajo' })``
