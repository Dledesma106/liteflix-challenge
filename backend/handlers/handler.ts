import { type NextApiResponse } from 'next'
import { type ResponseData, type NextConnectApiRequest } from './types'
import nc from 'next-connect'

const onError = (error: any, req: NextConnectApiRequest, res: NextApiResponse<ResponseData>): void => {
	res.status(501).json({ error: `Algo salio mal! ${error as string}` })
}

const onNoMatch = (req: NextConnectApiRequest, res: NextApiResponse<ResponseData>): void => {
	res.status(405).json({ error: `Metodo '${req.method as string}' no permitido` })
}

const baseHandler = nc({ onError, onNoMatch })

export default baseHandler
