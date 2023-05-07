import styled from 'styled-components'

export const Wrapper = styled.div<{ hovered: boolean }>`
	height: 146px;
	width: 220px;
	transition: height width 0.3s ease-in-out;
	overflow: hidden;
	${({ hovered }) =>
		hovered &&
		`
		height:auto;
		width:auto;
	`}
`
