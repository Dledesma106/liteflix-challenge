import { props } from "../../interfaces"
import {DesktopWrapper} from "../styles"
import Header from "./Header"
import Main from "./Main"
import { Wrapper} from './styles'

const Home = (props:props)=>{

    return(
        <DesktopWrapper>
            <Wrapper img={props.highlightedMovie.imagePath}>
                <Header />
                <Main {...props}/>
            </Wrapper>
            
        </DesktopWrapper>
    )

}

export default Home