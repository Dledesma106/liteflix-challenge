import styled from 'styled-components'

export const Wrapper = styled.div<{ hovered: boolean }>`
	height: 146px;
	width: 220px;

	${({ hovered }) =>
		hovered &&
		`
		height:auto;
		width:auto;
	`}
	@media (max-width: 500px) {
		width: 100%;
		height: 172px;
	}
`
