import { dbConnect, dbDisconnect } from 'lib/dbConnect'
import type { NextApiResponse } from 'next'
import type { NextConnectApiRequest, ResponseData } from 'backend/handlers/types'
import MyMovieModel from 'backend/models/MyMovie'

const MyMovieController = {
	post: async (req: NextConnectApiRequest, res: NextApiResponse<ResponseData>) => {
		const { title, imagePath, liked, added } = req.body
		await dbConnect()
		try {
			const newMovie = await MyMovieModel.create({ title, imagePath, liked, added })
			if (newMovie === undefined) return res.json({ statusCode: 400, data: { message: 'Could not add the movie' } })
			res.json({ statusCode: 200, data: { message: 'Movie added succesfully' } })
		} catch (error) {
			console.log(error)
			res.json({ statusCode: 500, error: error as string })
		}
	},
	patch: async (req: NextConnectApiRequest, res: NextApiResponse<ResponseData>) => {
		const { added, liked, _id } = req.body
		await dbConnect()
		try {
			const movie = await MyMovieModel.findById(_id)
			if (movie === null) return res.json({ statusCode: 400, data: { message: 'Movie not found' } })
			movie.added = added
			movie.liked = liked
			await movie.save()
			res.json({ statusCode: 200, data: { message: 'Movie Updated succesfully' } })
		} catch (error) {
			console.log(error)
			await dbDisconnect()
			res.json({ statusCode: 500, error: error as string })
		}
		//  await dbDisconnect()
	}
}

export default MyMovieController
