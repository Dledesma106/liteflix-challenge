import styled from 'styled-components'

export const Wrapper = styled.div<{img:string}>`
    background-image:url('${props =>props.img}');
    background-size:cover;
    width:100%;
    height: 100%;
    padding: 0 104px 62px;
`