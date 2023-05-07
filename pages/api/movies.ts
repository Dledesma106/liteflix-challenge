import handler from 'backend/handlers/handler'
import MyMovieController from '@/backend/controllers/MyMovieController'

handler.post(MyMovieController.post)
handler.patch(MyMovieController.patch)

export default handler
