import type { Movie } from '@/lib/moviesApi'
import { useState } from 'react'
import Preview from '../Common/Preview'
import { Wrapper } from './styles'
interface MyMoviePreviewProps {
    movie: Movie
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
