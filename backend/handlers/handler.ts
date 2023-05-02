import { NextApiResponse } from 'next';
import { ResponseData, NextConnectApiRequest } from './types';
import nc from 'next-connect'

const onError = (error:any, req: NextConnectApiRequest, res: NextApiResponse<ResponseData>)=> {    
    res.status(501).json({ error: `Something went wrong! ${error}` });
}

const onNoMatch = (req: NextConnectApiRequest, res: NextApiResponse<ResponseData>) => {
    res.status(405).json({ error: `Method '${req.method}' not allowed` });
}

const baseHandler = nc({onError,onNoMatch});

export default baseHandler

