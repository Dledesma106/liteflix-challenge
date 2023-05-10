import styled from 'styled-components'

export const StyledMain = styled.main`
	display: flex;
	flex-direction: row;
	height: 100%;
	justify-content: space-between;
	@media (max-width: 500px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 64px;
	}
`
