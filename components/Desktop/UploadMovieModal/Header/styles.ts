import styled from 'styled-components'

export const StyledHeader = styled.div`
	display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width:100%;
	@media (min-width: 769px) {
		display: none !important;
	}
`
