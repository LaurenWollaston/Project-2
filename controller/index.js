const router = require('express').Router();
const apiRoutes = require('./api');
const homeroute = require('./homeroute.js')

router.use('/api', apiRoutes);
router.use('/', homeroute)

module.exports = router;
