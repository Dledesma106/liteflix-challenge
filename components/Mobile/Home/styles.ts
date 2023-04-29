import styled from 'styled-components'

export const Wrapper = styled.div<{img:string}>`
    background-image: url(${({img})=>img});
    background-size: cover;
    height: 100%;
    width: 100%;
`