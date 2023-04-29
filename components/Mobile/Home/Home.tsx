

import { MobileWrapper } from '../styles'
import React from 'react'
import { props } from '../../interfaces'
import { Wrapper } from './styles'

export const Home = (props:props) => {
  return (
    <MobileWrapper>
        <Wrapper img={props.highlightedMovie.imagePath} style={{color:'#FFF'}}>ESTO ES MOBILE</Wrapper>img={props.highlightedMovie.imagePath} 
    </MobileWrapper>
  )
}



export default Home