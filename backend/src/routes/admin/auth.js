const express = require('express');
const router = express.Router();
const { signup, signin, signout } = require('../../controllers/admin/auth');
const { requireSignIn } = require('../../middleware');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../validators/auth');



router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/admin/signin', validateSigninRequest, isRequestValidated, signin);
router.post('/admin/signout', requireSignIn, signout);


module.exports = router;
