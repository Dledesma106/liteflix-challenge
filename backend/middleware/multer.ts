import multer from 'multer'

const upload = multer({
    storage: multer.diskStorage({
        destination:function(req, file, callback) {
            callback(null, 'public/upload')
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