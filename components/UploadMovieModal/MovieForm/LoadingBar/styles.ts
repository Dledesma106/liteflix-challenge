import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	@media (min-width: 501px) {
		height: 100px;
		gap: 20px;
		padding: 0 40px;
	}
	@media (max-width: 500px) {
		height: 81px;
		gap: 18px;
	}
`
export const Percentage = styled.h2`
	font-size: 16px;
	color: #fff;
	align-self: start;
	@media (max-width: 500px) {
		font-size: 14px;
	}
`

export const ProgressButton = styled.button.attrs({ type: 'button' })<{ completed: boolean }>`
	border: none;
	background-color: #242424;
	color: #fff;
	font-size: 18px;
	letter-spacing: 4px;
	font-family: Bebas Neue;
	align-self: flex-end;

	${({ completed }) =>
		completed &&
		`
        color:#64EEBC;
	`}

	@media (max-width: 500px) {
		font-size: 16px;
	}
`

export const EmptyBar = styled.div`
	width: 100%;
	height: 4px;
	z-index: 5;
	background-color: rgba(255, 255, 255, 0.5);
`

export const FilledBar = styled.div<{ percentage: number, failed: boolean }>`
	width: ${({ percentage }) => percentage}%;
	height: 10px;
	background-color: #64eebc;
	position: relative;
	top: -75%;
	transition: width 0.2s ease-in-out;
	${({ failed }) =>
		failed &&
		`
        background-color: #FF0000;
    `}
`
