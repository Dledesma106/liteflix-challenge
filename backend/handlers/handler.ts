import { NextApiResponse } from 'next';
import { ResponseData, NextConnectApiRequest } from './types';
import nc from 'next-connect'

const onError = (error:any, req: NextConnectApiRequest, res: NextApiResponse<ResponseData>)=> {    
    res.status(501).json({ error: `Algo salio mal! ${error}` });
}

const onNoMatch = (req: NextConnectApiRequest, res: NextApiResponse<ResponseData>) => {
    res.status(405).json({ error: `Metodo '${req.method}' no permitido` });
}

const baseHandler = nc({onError,onNoMatch});

export default baseHandler

