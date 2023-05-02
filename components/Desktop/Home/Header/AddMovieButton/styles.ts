import styled from 'styled-components'

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

export const ButtonText = styled.p<{ menu: boolean }>`
	margin-left: auto;
	font-weight: bold;
	font-size: 18px;

	${({ menu }) =>
		menu &&
		`
            font-size: 22px;
        `}
`
