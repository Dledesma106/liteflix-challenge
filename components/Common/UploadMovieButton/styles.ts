import Image from 'next/image'
import styled from 'styled-components'
import plus from 'assets/plus.svg'

export const Wrapper = styled.div<{ menu: boolean }>`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 12px;
	cursor: pointer;

	${({ menu }) =>
		menu &&
		`
            margin:32px 0;
            gap:16px;

			@media (max-width: 500px) {
				margin: 25px 0;
			}
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

	@media (max-width: 500px) {
		font-size: 16px;
	}
`
