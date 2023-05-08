import type { MyMovie } from '@/backend/models/MyMovie'
import { useState } from 'react'
import Preview from '../Common/Preview'
import { Wrapper } from './styles'
interface MyMoviePreviewProps {
    movie: MyMovie
}

const MyMoviePreview = ({ movie }: MyMoviePreviewProps): JSX.Element => {
    const [toggle, setToggle] = useState<boolean>(false)

    return (
    <Wrapper onClick={() => setToggle(!toggle)}>
        <Preview show={!toggle} movie={movie}/>
    </Wrapper>
  )
}

export default MyMoviePreview
