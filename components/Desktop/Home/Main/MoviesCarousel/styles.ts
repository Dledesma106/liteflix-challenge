import styled from 'styled-components'

export const CarouselWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-left:auto;
    //margin-bottom:62px;
`

export const MoviesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin:10px 0;
    width: 250px;
    overflow:hidden;
`

export const Chevron = styled.div<{show:boolean}>`
    width: 20px;
    height: 8px;
    ${({show})=> !show?'display:none;':''};
`

