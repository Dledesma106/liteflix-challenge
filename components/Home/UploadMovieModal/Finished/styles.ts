import Image from 'next/image'
import styled from 'styled-components'
import liteflix from 'assets/logo.svg'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 72px;
	@media (max-width: 500px) {
		margin-top: 120px;
		gap: 133px;
	}
`

export const Liteflix = styled(Image).attrs({ src: liteflix, alt: 'logo de liteflix' })`
	width: 113px;
	height: 34px;
	@media (max-width: 500px) {
		display: none !important;
	}
`

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: center;
	align-items: center;
	@media (max-width: 500px) {
		gap: 32px;
	}
`

export const Congratulations = styled.p`
	font-size: 24px;
	font-weight: 700;
`

export const Text = styled.p`
	font-size: 20px;
`
