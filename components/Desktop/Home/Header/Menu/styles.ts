import styled from 'styled-components'

export const Card = styled.div`
    width:761px;
    height: 100%;
    background-color: #242424 ;
    position:absolute;
    top:0px;
    right: 0px;
    z-index:5;
    padding-left:88px;
    padding-top:28px;
    padding-right:104px;
`

export const MenuHeader = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-between;
`

export const RightWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    justify-content: center;
`
export const Item = styled.div`
    padding: 20px 0;
    font-size: 22px;
    font-weight: 100;
`

export const ItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    margin-top:65px;
`

