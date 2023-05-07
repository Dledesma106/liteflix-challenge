import styled from 'styled-components'
import Image from 'next/image'
import cross from 'assets/cross.svg'

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 999;
`

export const Card = styled.div`
	width: 730px;
	height: 440px;
	background: #242424;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translateY(-50%) translateX(-50%);
	padding: 24px;
	display: flex;
	flex-direction: column;
`

export const Cross = styled(Image).attrs({ src: cross, alt: 'cerrar ventana modal' })`
	align-self: flex-end;
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
