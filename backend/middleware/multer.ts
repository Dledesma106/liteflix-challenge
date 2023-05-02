import multer from 'multer'
import fs from 'fs'

const uploadDir = 'public/upload'

const upload = multer({
    storage: multer.diskStorage({
        destination:function(req, file, callback) {
            fs.mkdirSync(uploadDir, { recursive: true })
            callback(null, uploadDir)
        },
        filename: function(req, file, callback) {
            callback(null, file.originalname)
        },
    }),
    limits: {
      fileSize: 10 * 1024 * 1024, // limite de 10 mb
    },
})

export default upload
