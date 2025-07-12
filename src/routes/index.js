const express = require('express');
const router = express.Router();

router.use('/customers', require('./customer.routes'));
router.use('/orders', require('./order.routes'));
// ... other schema routes

module.exports = router;
