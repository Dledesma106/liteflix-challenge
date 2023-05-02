import styled from 'styled-components'

export const DesktopWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	overflow-y: hidden;
	@media (max-width: 768px) {
		display: none !important;
	}
`
