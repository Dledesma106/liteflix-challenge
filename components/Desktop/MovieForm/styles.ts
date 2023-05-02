import styled from 'styled-components'

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
    width:730px;
    height: 440px;
    background: #242424;
    position: fixed;
    top: 50%;
    left: 50%;
    transform:translateY(-50%) translateX(-50%);
    padding: 24px;
    display:flex;
    flex-direction:column;
`

export const CrossWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:end;
`
