import styled from 'styled-components'

export const Wrapper = styled.div<{ img: string }>`
	// background-image: url(${({ img }) => img});
	background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 65.6%, #242424 100%), url(${(props) => props.img});
	background-size: cover;
	background-position: center;
	width: 100%;
	padding: 16px 24px;
	height: 561px;
`
