import { uploadFileRequest } from '@/lib/upload'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Card, Overlay, CrossWrapper } from './styles'
import Image from 'next/image'
import cross from 'assets/cross.svg'
interface props {
  show: boolean
  toggle: () => void
}

export default function MovieForm ({ show, toggle }: props): JSX.Element {
  const [file, setFile] = useState<FormData>()

  function handleChange (e: ChangeEvent<HTMLInputElement>): void {
    if (e.target.files?.length === undefined) {
      return
    }

    const formData = new FormData()
    formData.append(e.target.name, e.target?.files[0])
    setFile(formData)
  }

  function handleSubmit (e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    if (file == null) return
    void uploadFileRequest(file)
  }

  return (
        <>
            {show &&
                <Overlay>
                    <Card>
                        <CrossWrapper>
                            <Image onClick={toggle} src={cross} width={20} height={20} alt='cerrar modal'/>
                        </CrossWrapper>
                        <form action='' encType='multipart/form-data' onSubmit={handleSubmit}>

                        <input type='file' onChange={handleChange} name='image'/>

                        <button type='submit'>upload</button>

                        </form>
                    </Card>
                </Overlay>
            }
        </>
  )
}
