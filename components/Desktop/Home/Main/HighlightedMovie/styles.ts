import Image from 'next/image'
import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction:column;
    margin:auto 0 100px 0;

`

export const LiteflixOriginal = styled.p`
    font-size:20px;
`

export const Bold = styled.span`
    font-weight:700
`

export const MovieTitle = styled.h2`
    color:#64EEBC;
    font-size:120px;
`

export const ButtonWrapper = styled.div`
    display:flex;
    flex-direction:row;
    gap:24px;
`

export const PlusIcon = styled(Image)`
    width: 16px;
    height: 16px;
`

export const PlayIcon = styled(Image)`
    width: 16px;
    height: 16px;
`

export const Button = styled.div<{ transparent?: boolean }>`
    display: flex;
    flex-direction: row;
    width:248px;
    height:56px;
    gap:12px;
    font-size:18px;
    justify-content:center;
    align-items:center;
    padding:19px 61px;
    background-color: #242424;
    
    ${({ transparent }) => transparent as boolean && `
        border:solid 1px #fff;
        background-color:rgb(36,36,36, 0.5);
    `}
`
