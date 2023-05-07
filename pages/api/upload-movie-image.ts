import singleImageHandler from 'backend/handlers/singleImageHandler'
import ImageController from '@/backend/controllers/ImageController'

singleImageHandler.post(ImageController.post)

export const config = {
	api: {
		bodyParser: false
	}
}

export default singleImageHandler
