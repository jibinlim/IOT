const express = require('express');

const router = express.Router();
const carRouter = require('./cars');

router.use('/cars', carRouter);
module.exports = router;
