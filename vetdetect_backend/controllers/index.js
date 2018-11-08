const express = require('express');
const router = express.Router();


router.use('/', require('./home'));
router.use('/alt', require('./alt'));
router.use('/posts', require('./posts'));


module.exports = router;
