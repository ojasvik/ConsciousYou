const express = require('express');
const router = express.Router();
const { signup,signin, requireSignIn } = require('../../controllers/admin/auth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../validators/auth');



router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);

router.post('/admin/signin', validateSigninRequest, isRequestValidated, signin);


module.exports = router;
