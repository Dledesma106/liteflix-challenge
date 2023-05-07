import styled from 'styled-components'
import Image from 'next/image'
import paperclip from 'assets/paperclip.svg'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 48px;
`

export const Input = styled.input.attrs({ type: 'file' })`
	display: none;
`

export const FileDrop = styled.div`
	border: #fff 2px dashed;
	width: 602px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
	background-color: #242424;
	font-size: 16px;
	cursor: pointer;
`

export const ClipIcon = styled(Image).attrs({ src: paperclip, alt: 'clip de papel' })`
	height: 16px;
	width: 16px;
`
