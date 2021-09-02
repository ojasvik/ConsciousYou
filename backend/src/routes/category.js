const express = require('express');

const { addCategory, getCategories } = require('../controllers/category');
const { adminMiddleware, requireSignIn } = require('../middleware');
const router = express.Router();

router.post('/category/create', requireSignIn, adminMiddleware, addCategory);
router.get('/category/getcategories', getCategories);

module.exports = router;