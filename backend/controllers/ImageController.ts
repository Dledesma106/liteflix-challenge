import type { NextApiResponse } from 'next'
import type { NextConnectApiRequest, ResponseData } from 'backend/handlers/types'

const ImageController = {
	post: async (req: NextConnectApiRequest, res: NextApiResponse<ResponseData>) => {
		const { file } = req
		const imagePath = file.location
		res.json({ statusCode: 200, data: { message: 'The movie poster has been uploaded succesfully', imagePath } })
	}
}

export default ImageController
