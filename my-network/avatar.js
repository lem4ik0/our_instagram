const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const storage = multer.diskStorage({
destination: function (req, file, cb) {
  cb(null, path.resolve(__dirname, 'uploads'));
},

filename: function (req, file, cb) {
cb(null, crypto.randomUUID() + path.extname(file.originalname).toLowerCase());
}
})

const types = ['image/png', 'image/jpeg', 'image/jpg'];

const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  }else {
    cb(null, false);
  }
};

module.exports = multer({ storage,fileFilter})


//MULTER FILE LOADER