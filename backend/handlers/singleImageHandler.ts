import uploadImage from '../middleware/multer'
import nc from 'next-connect'
import ErrorController from '../controllers/ErrorController'

const { onError, onNoMatch } = ErrorController
const singleImageHandler = nc({ onError, onNoMatch })
singleImageHandler.use(uploadImage.single('image'))

export default singleImageHandler
