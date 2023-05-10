import styled from 'styled-components'
import { Cross } from 'components/Common/styles'

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 999;

	@media (max-width: 500px) {
		position: absolute;
		z-index: 999;
	}
`

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #242424;
	@media (min-width: 501px) {
		gap: 10px;
		width: 730px;
		height: 440px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translateY(-50%) translateX(-50%);
		padding: 24px;
	}
	@media (max-width: 500px) {
		gap: 72px;
		width: 100%;
		height: 100%;
		padding: 16px 24px;
		position: relative;
		top: 0;
		right: 0;
	}
`

export const ResponsiveCross = styled(Cross).attrs({ alt: 'cerrar ventana modal' })`
	align-self: flex-end;
	cursor: pointer;
	@media (max-width: 500px) {
		display: none !important;
	}
`

export const Button = styled.button.attrs({ type: 'submit' })<{ disabled?: boolean }>`
	background-color: #fff;
	color: #242424;
	width: 248px;
	height: 56px;
	font-size: 18px;
	font-family: Bebas Neue;
	letter-spacing: 4px;
	border: none;
	cursor: pointer;

	${({ disabled }) =>
		(disabled as boolean) &&
		`
		background-color:rgba(255, 255, 255, 0.5);
	`}
`

export const Exit = styled.button.attrs({ type: 'button' })`
	color: #fff;
	background-color: #242424;
	width: 248px;
	height: 56px;
	font-size: 18px;
	font-family: Bebas Neue;
	letter-spacing: 4px;
	border: 2px rgba(255, 255, 255, 0.5) solid;
	cursor: pointer;
	@media (min-width: 501px) {
		display: none !important;
	}
`
