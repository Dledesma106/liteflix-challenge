import styled from 'styled-components'

export const Wrapper = styled.div<{ imgs: { desktop: string, mobile: string } }>`
	@media (min-width: 501px) {
		background-image: url(${({ imgs }) => imgs.desktop});
		background-size: cover;
		background-position: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 32px 104px 62px;
		height: 100vh;
		gap: 64px;
	}

	@media (max-width: 500px) {
		padding: 16px 24px;
		background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 65.6%, #242424 100%), url(${({ imgs }) => imgs.mobile});
		background-position: center top;
		background-repeat: no-repeat;
		background-size: 250% 561px;
		width: 100%;
	}
`
