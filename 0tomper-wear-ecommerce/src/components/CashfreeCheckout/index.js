import React, { useState, useEffect } from 'react';
import Wrapper from './styles';
import axios from 'axios';
import { useCartContext } from '../../context/cart_context';
import { useUserContext } from '../../context/user_context';
import { useOrderContext } from '../../context/order_context';
import { formatPrice } from '../../utils/helpers';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { payment_url as url } from '../../utils/constants';
import  RequestPage  from '../../pages/RequestPage';
const uuid = require('uuid'); // Import the uuid library

const CheckoutForm = () => {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  const { shipping, placeOrder } = useOrderContext();
  const { currentUser } = useUserContext();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
 

 
 const formatPrices = (number) => {
    const newNumber = Intl.NumberFormat('en-US', {

    }).format(number / 100);
    return newNumber;
  };
  
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    try {
      const orderId = uuid.v4();
      shipping.orderId = orderId
  const ftshipping_fee = formatPrices(shipping_fee)
  const fttotal_amount = formatPrices(total_amount)
   
      const response = await axios.post(url, {
        cart,
        shipping_fee:ftshipping_fee,
        total_amount:fttotal_amount,
        shipping: {
          orderId: orderId, // Include the generated orderId here
          name: shipping.name,
          address: shipping.address,
          email: currentUser.email, // Add email property
          phoneNumber: shipping.phone_number, // Add phoneNumber property
          currency:'INR',
          appId:'287465ad6d13df1989e2cfbb8d564782',
          description:'rsdgfhueirh',
          orderNote:'dsgfsd',
          return:'https://localhost:5000/api/payment/payment-completion',
          notifyUrl: window.location.origin +'/response',
        },
      });
   
      if (response.data.postData && response.data.url) {
        setError(null);
        setProcessing(false);
        setSucceeded(true);
        await placeOrder();

        const parsedData = JSON.parse(response.data.postData);

        const form = document.createElement('form');
        form.setAttribute('action', response.data.url);
        form.setAttribute('method', 'post');

        for (const key in parsedData) {
          const input = document.createElement('input');
          input.setAttribute('type', 'hidden');
          input.setAttribute('value', parsedData[key]);
          input.setAttribute('name', key);
          form.appendChild(input);
        }

        document.body.appendChild(form);
        form.submit();
      
      } else {
        console.error('Incomplete response data');
        setProcessing(false);
      }
    } catch (error) {
      setError('Something went wrong with the payment.');
      setProcessing(false);
    }
  };



  return (
    <div>
      {succeeded ? (
        <article>
          <h4>Thank You!</h4>
          <h4>Make Payment</h4>
          <h4>Redirecting to the Order page shortly</h4>
        </article>
      ) : (
        <article>
          <h4>
            Hello,
            {currentUser &&
              (currentUser?.displayName
                ? currentUser.displayName
                : currentUser.email)}
          </h4>
          <p>Your total is {formatPrice(shipping_fee + total_amount)}</p>
          <p>Test Card Number: 4242 4242 4242 4242</p>
        </article>
      )}
      <form id='payment-form' onSubmit={handleSubmit}>
        {/* Payment form elements */}
        <button disabled={processing  || succeeded} id='submit'>
          <span id='button-text'>
            {processing ? <div className='spinner' id='spinner'></div> : 'Pay'}
          </span>
        </button>
        {/* Show any errors that occur during payment */}
        {error && (
          <div className='card-error' role='alert'>
            {error}
          </div>
        )}
        {/* Show a success message on completion */}
        <p
          className={`${
            succeeded ? 'result-message' : 'result-message hidden'
          }`}
        >
          Payment succeeded, your items will arrive at your doorstep soon.
        </p>
      </form>
    </div>
  );
};

const CashfreeCheckout = () => {
  return (
    <Wrapper>
      <CheckoutForm />
    </Wrapper>
  );
};

export default CashfreeCheckout;
