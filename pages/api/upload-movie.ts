import { NextConnectApiRequest, ResponseData } from 'backend/handlers/types'
import handler from 'backend/handlers/handler'
import upload from 'backend/middleware/multer'
import { NextApiResponse } from 'next'
import MovieModel from '@/backend/models/MyMovie'
import dbConnect from 'lib/dbConnect'


handler.use(upload.array('image'))

handler.post(async (req: NextConnectApiRequest, res: NextApiResponse<ResponseData>) => {
  console.log('upload handler');
  const title = 'prueba'
  const {files} = req
  console.log(req.files);
  
  const imagePath = `/upload/${files[0].originalname}`
  await dbConnect()
  try {
    const newMovie = await MovieModel.create({title, imagePath})
    console.log(newMovie);
    if(!newMovie) res.status(400).json({data:{message:'No se pudo añadir la pelicula'}})
  } catch (error) {
    console.log(error);
    
  }
  res.status(200).json({ data: {message:'La pelicula ha sido añadida correctamente'}});
})

export const config = {
    api: {
      bodyParser: false, // Disallow body parsing, consume as stream
    },
  };

export default handler