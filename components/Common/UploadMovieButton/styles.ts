import Image from 'next/image'
import styled from 'styled-components'
import plus from 'assets/plus.svg'

export const Wrapper = styled.div<{ menu: boolean }>`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 12px;

	${({ menu }) =>
		menu &&
		`
            margin:52px 0;
            gap:16px;
        `}
`

export const PlusIcon = styled(Image).attrs({ src: plus, alt: 'Icono de suma' })``

export const ButtonText = styled.p<{ menu: boolean }>`
	margin-left: auto;
	font-weight: bold;
	font-size: 18px;

	${({ menu }) =>
		menu &&
		`
            font-size: 22px;
        `}
	
	@media (max-width: 768px) {
		font-size: 16px;
	}
`
