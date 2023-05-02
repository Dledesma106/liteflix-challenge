import styled from 'styled-components'

export const StyledItem = styled.li<{ selected: boolean }>`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    font-size:16px;
    font-weight:${({ selected }) => selected ? '700' : '400'}
`
