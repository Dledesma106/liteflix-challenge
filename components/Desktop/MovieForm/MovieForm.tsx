import { uploadFileRequest } from '@/lib/upload';
import { useState, ChangeEvent, FormEvent } from 'react';
import { Card, Overlay, CrossWrapper } from './styles';
import Image from 'next/image';
import cross from 'assets/cross.svg'

interface props{
    show:boolean;
    toggle:()=>void;
}

export default function MovieForm({show, toggle}:props){
    const [file, setFile] = useState<FormData>()

    function handleChange(e:ChangeEvent<HTMLInputElement>){
        if (!e.target.files?.length) {
        return;
    }

    const formData = new FormData();
        formData.append(e.target.name, e.target.files[0]);
        setFile(formData)
    }


    async function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(!file) return
        const response = await uploadFileRequest(file);
    }

    return(
        <>
            {show && 
                <Overlay>
                    <Card>
                        <CrossWrapper>
                            <Image onClick={toggle} src={cross} width={20} height={20} alt='cerrar modal'/>
                        </CrossWrapper>
                        <form action='' encType='multipart/form-data' onSubmit={handleSubmit}>

                        <input type='file' onChange={handleChange} name='image'/>

                        <button type='submit'> upload</button>

                        </form>
                    </Card>
                </Overlay>
            }
        </>
    )
}