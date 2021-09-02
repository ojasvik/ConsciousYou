const express = require('express');
const router = express.Router();
const { signup,signin, requireSignIn } = require('../controllers/auth');



router.post('/signup', signup);

router.post('/signin', signin);

router.post('/profile',requireSignIn,(req,res) => {
    res.status(200).json({message: 'User profile'});
});

module.exports = router;
