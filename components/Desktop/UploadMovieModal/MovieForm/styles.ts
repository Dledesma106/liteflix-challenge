import styled from 'styled-components'

export const Title = styled.h2`
	font-size: 20px;
	font-weight: 700;
	color: #64eebc;
	text-align: center;
`

export const UploadForm = styled.form.attrs({ action: '', encType: 'multipart/form-data' })`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 48px;
`

export const AddImage = styled.input.attrs({ type: 'file' })`
	border: #fff 2px dashed;
	width: 602px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: none;
	appearance: none;
	background-color: #242424;
`

export const TitleInput = styled.input`
	background-color: #242424;
	border: none;
	border-bottom: 2px solid #fff;
	font-family: Bebas Neue;
	text-align: center;
	font-size: 16px;
	width: 248px;
	letter-spacing: 4px;
	outline: none;
	color: #fff;
`