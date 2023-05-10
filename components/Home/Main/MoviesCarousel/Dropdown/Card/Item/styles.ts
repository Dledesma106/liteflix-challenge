import styled from 'styled-components'
import Image from 'next/image'
import tick from 'assets/ok-tickmark.svg'

export const StyledItem = styled.li<{ selected: boolean }>`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 16px;
	font-size: 16px;
	font-weight: 400;
	cursor: pointer;
	${({ selected }) =>
		selected &&
		`
		font-weight: 700;
	`};
`
export const TickIcon = styled(Image).attrs({ src: tick, alt: 'simbolo de chequeado' })`
	width: 15px;
	height: 10px;
`
