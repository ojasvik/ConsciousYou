const express = require('express');

const { addCategory, getCategories } = require('../controllers/category');
const { adminMiddleware, requireSignIn } = require('../middleware');
const router = express.Router();
const multer = require('multer');
const shortid = require('shortid');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads'));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname);
    }
});

const upload = multer({storage: storage});

router.post('/category/create', requireSignIn, adminMiddleware,upload.single('categoryImage'), addCategory);
router.get('/category/getcategories', getCategories);

module.exports = router;