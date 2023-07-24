const router = require('express').Router();

const { paymentController, handlePaymentCompletion } = require('../controllers/paymentController');

// Creating client secret
router.post('/create-payment-intent', paymentController);
router.post('/payment-completion', handlePaymentCompletion);

module.exports = router;