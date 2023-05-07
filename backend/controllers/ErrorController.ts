import type { NextApiResponse } from 'next'
import type { NextConnectApiRequest, ResponseData } from 'backend/handlers/types'

const ErrorController = {
	onError: (error: any, req: NextConnectApiRequest, res: NextApiResponse<ResponseData>): void => {
		console.log(error)
		res.status(501).json({ error: `Something went wrong! ${error as string}` })
	},
	onNoMatch: (req: NextConnectApiRequest, res: NextApiResponse<ResponseData>): void => {
		res.status(405).json({ error: `Method '${req.method as string}' not allowed` })
	}
}

export default ErrorController
