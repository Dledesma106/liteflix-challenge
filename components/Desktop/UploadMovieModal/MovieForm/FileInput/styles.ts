import styled from 'styled-components'
import Image from 'next/image'
import paperclip from 'assets/paperclip.svg'

export const Input = styled.input.attrs({ type: 'file' })`
	display: none;
`

export const FileDrop = styled.div`
	border: #fff 1px dashed;
	width: 602px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
	background-color: #242424;
	font-size: 16px;
	cursor: pointer;
	::after {	
		content: 'Agregá un archivo o arrastralo y soltalo aquí';
	}
	@media (max-width: 768px) {
		width: 100%;
		height: 81px;
		::after {	
			content: 'Agregá un archivo';
		}
	}
`

export const ClipIcon = styled(Image).attrs({ src: paperclip, alt: 'clip de papel' })`
	height: 16px;
	width: 16px;
`
