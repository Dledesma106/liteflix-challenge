import nc from 'next-connect'
import ErrorController from '../controllers/ErrorController'

const { onError, onNoMatch } = ErrorController

const baseHandler = nc({ onError, onNoMatch })

export default baseHandler
