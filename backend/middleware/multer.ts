import multer from 'multer'
import fs from 'fs'

const uploadDir = 'public/uploads'

const uploadImage = multer({
	storage: multer.diskStorage({
		destination: function (req, file, callback) {
			fs.mkdirSync(uploadDir, { recursive: true })
			callback(null, uploadDir)
		},
		filename: function (req, file, callback) {
			callback(null, `${Date.now()}-${file.originalname}`)
		}
	}),
	limits: {
		fileSize: 10 * 1024 * 1024 // limite de 10 mb
	},
	fileFilter: function (req, file, cb) {
		const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']

		if (allowedTypes.includes(file.mimetype)) {
			cb(null, true)
		} else {
			cb(null, false)
		}
	}
})

export default uploadImage
