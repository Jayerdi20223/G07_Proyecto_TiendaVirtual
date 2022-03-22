const router = require('express').Router();

const helloRoute = require('./user');

router.use('/user', helloRoute);

module.exports = router;
