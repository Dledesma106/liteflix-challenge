import Image from 'next/image'
import styled from 'styled-components'
import liteflix from 'assets/logo.svg'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 72px;
`

export const Liteflix = styled(Image).attrs({ src: liteflix, alt: 'logo de liteflix' })`
	width: 113px;
	height: 34px;
`

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: center;
	align-items: center;
`

export const Congratulations = styled.p`
	font-size: 24px;
	font-weight: 700;
`

export const Text = styled.p`
	font-size: 20px;
`
