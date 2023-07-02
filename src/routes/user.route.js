const express = require('express')
const { checkSchema } = require('express-validator');
const schema  =require('../middlewares/schema/schema')
const {validate,authentication} = require('../middlewares/user.middleware');
const {registerUser,userLogin} = require('../controller/user.controller')
const {getUserFeedback,addFeedback,updateFeedback} = require('../controller/feedback.controller')

const router = express.Router()
router.post('/createUser',validate(checkSchema(schema.createUser)),registerUser);
router.post('/login',validate(checkSchema(schema.login)),userLogin);
router.get('/getFeedback',authentication,getUserFeedback);
router.post('/addFeedback',authentication,validate(checkSchema(schema.addFeedback)),addFeedback);
router.post('/updateFeedback',authentication,validate(checkSchema(schema.updateFeedback)),updateFeedback);

module.exports = router;