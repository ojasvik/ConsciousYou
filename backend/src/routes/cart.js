const express = require('express');

const { addItemToCart } = require('../controllers/cart');
const { userMiddleware, requireSignIn } = require('../middleware');
const router = express.Router();

router.post('/user/cart/addtocart', requireSignIn, userMiddleware, addItemToCart);

module.exports = router;