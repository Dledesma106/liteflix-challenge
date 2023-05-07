import styled from 'styled-components'
import Image from 'next/image'
import tick from 'assets/ok-tickmark.svg'

export const StyledItem = styled.li<{ selected: boolean }>`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	font-size: 16px;
	font-weight: ${({ selected }) => (selected ? '700' : '400')};
`
export const TickIcon = styled(Image).attrs({ src: tick, alt: 'simbolo de chequeado' })`
	width: 15px;
	height: 10px;
`
