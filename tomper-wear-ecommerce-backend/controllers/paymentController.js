const crypto = require('crypto');
const Order = require('../models/orderModel');

// // Initialize the Cashfree PaymentGateway client with your credentials
// const paymentGatewayClient = new PaymentGateway({
//   env: 'TEST', // Use 'PROD' for production environment
//   appId: '287465ad6d13df1989e2cfbb8d564782',
//   secretKey: 'TESTfe487f44523b6094d5f6bbca73239c331c610a78',
// });

const calculateOrderAmount = (shipping_fee, total_amount) => {
  return shipping_fee + total_amount;
};


const paymentController = async (req, res) => {
  const { cart, shipping_fee, total_amount, shipping } = req.body;

  const shippingFeeNumber = parseFloat(shipping_fee);
  const totalAmountNumber = parseFloat(total_amount);

  // Perform addition
  const orderAmount = (shippingFeeNumber + totalAmountNumber)*100;
  console.log('OrderAmount:',orderAmount)
  const postData = {
    appId: shipping.appId, // Replace with your actual App ID
    orderId: shipping.orderId, // Replace with your actual Order ID
    orderAmount: orderAmount,
    orderCurrency: shipping.currency,
    orderNote: shipping.orderNote,
    customerName: shipping.name,
    customerEmail: shipping.email,
    customerPhone: shipping.phoneNumber,
    Address: shipping.address,
    description: shipping.description,
    returnUrl: shipping.return,
    notifyUrl: shipping.notifyUrl,
  };

  const mode = 'TEST'; // Replace with 'PROD' for production environment
  const secretKey = 'TESTfe487f44523b6094d5f6bbca73239c331c610a78'; // Replace with your actual secret key

  const sortedKeys = Object.keys(postData).sort();
  let signatureData = '';

  for (let i = 0; i < sortedKeys.length; i++) {
    const key = sortedKeys[i];
    signatureData += key + postData[key];
  }

  const signature = crypto.createHmac('sha256', secretKey).update(signatureData).digest('base64');
  postData['signature'] = signature;

  let url = '';
  if (mode === 'PROD') {
    url = 'https://www.cashfree.com/checkout/post/submit';
  } else {
    url = 'https://test.cashfree.com/billpay/checkout/post/submit';
  }

  console.log({ postData: JSON.stringify(postData) });
  res.status(200).json({ postData: JSON.stringify(postData), url: url });
};



// const handlePaymentCompletion =  (req, res, next) => {
const handlePaymentCompletion = async (req, res, next) => {
    try {
      const postData = {
        orderId: req.body.orderId,
        orderAmount: req.body.orderAmount,
        referenceId: req.body.referenceId,
        txStatus: req.body.txStatus,
        paymentMode: req.body.paymentMode,
        txMsg: req.body.txMsg,
        txTime: req.body.txTime
      };
  console.log(postData)
      const secretKey = "TESTfe487f44523b6094d5f6bbca73239c331c610a78";
      let signatureData = "";
  
      for (const key in postData) {
        signatureData += postData[key];
      }
  
      const computedSignature = crypto
        .createHmac('sha256', secretKey)
        .update(signatureData)
        .digest('base64');
  
      console.log('Received Signature:', req.body.signature);
      console.log('Computed Signature:', computedSignature);
  
      postData['signature'] = req.body.signature;
      postData['computedsignature'] = computedSignature;
      
      // Check if the payment status is 'SUCCESS' or 'FAILED'
      if (postData.txStatus === 'SUCCESS') {
        // Payment successful, update payment status to 'paid' in your database
        await Order.findOneAndUpdate({orderId:postData.orderId},{'paymentInfo.status':'paid'},{new:true})
        await Order.findOneAndUpdate({orderId:postData.orderId},{'paymentInfo.id':postData.orderId},{new:true})
      } else if (postData.txStatus === 'FAILED') {
        // Payment failed, update payment status to 'failed' in your database
        await Order.findOneAndDelete({orderId:postData.orderId})
      }
      else if (postData.txStatus === 'CANCELLED') {
        // Payment failed, update payment status to 'failed' in your database
        await Order.findOneAndDelete({orderId:postData.orderId})
      }
      // Redirect to the URL with the postData as query parameter
      // res.json({ status: postData.txStatus });
      res.redirect('https://kadam.click/response?postData=' + JSON.stringify(postData));
      // res.sendStatus(302);
      
    } catch (error) {
      // Handle any errors that occurred during the processing
      console.error(error);
      res.status(500).json({ error: 'An error occurred.' });
    }
  };
  





module.exports = {
  paymentController,
  handlePaymentCompletion,
};












// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// const calculateOrderAmount = (shipping_fee, total_amount) => {
//   return shipping_fee + total_amount;
// };

// const paymentController = async (req, res) => {
//   const { cart, shipping_fee, total_amount, shipping } = req.body;

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: calculateOrderAmount(shipping_fee, total_amount),
//       currency: 'inr',
//       description: 'Paying for shopping',
//       shipping,
//     });
//     return res.status(200).json({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// module.exports = paymentController;
