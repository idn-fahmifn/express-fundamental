require("dotenv").config();
const path = require("path");
const multer = require("multer");

// config storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(process.env.PUBLIC_DIR, process.env.UPLOAD_DIR));
    },
    filename:(req,file,cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    } 
})

const multerInstance = multer({storage})


// single-upload
const uploadSingleImage = (req, res, next) => {
    // upload hanya satu gambar
    const upload = multerInstance.single("image")
    upload(req, res, (err) => {
        if (err){
            return next(err)
        }
        return next
    });
};

// multi-upload
const uploadMultiImage = (req, res, next) => {
    // upload beberapa gambar, maksimal 5
    const upload = multerInstance.array("image", 5)
    upload(req, res, (err) => {
        if (err){
            return next(err)
        }
        return next
    });
};

//single-upload-with data
const uploadSingleImageWithData = (req, res, next) => {
    const upload = multerInstance.single("image");

    upload(req, res, (err) => {
        const {name, email} = req.body;
        console.log(name, email);
        if (err) {
            return next(err)
        }
        return next()
    })
}

module.exports = {
    uploadSingleImage,
    uploadMultiImage,
    uploadSingleImageWithData
}
