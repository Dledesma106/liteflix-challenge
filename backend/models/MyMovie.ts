import { prop, getModelForClass } from '@typegoose/typegoose'

export class MyMovie {
	_id: string

	@prop({ type: String, required: true })
	title: string

	@prop({ type: String, required: true })
	imagePath: string

	@prop({ type: Boolean, required: true })
	liked: boolean

	@prop({ type: Boolean, required: true })
	added: boolean

	imagePaths: { desktop: string; mobile: string }

	pressed: boolean
}

const MyMovieModel = getModelForClass(MyMovie)

export default MyMovieModel
