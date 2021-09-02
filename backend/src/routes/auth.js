const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/auth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');

router.post('/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/signin', validateSigninRequest, isRequestValidated, signin);

// router.post('/profile',requireSignIn,(req,res) => {
//     res.status(200).json({message: 'User profile'});
// });

module.exports = router;
