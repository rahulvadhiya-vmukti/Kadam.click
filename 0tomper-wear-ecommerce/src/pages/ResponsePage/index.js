import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useCartContext } from '../../context/cart_context';
const ResponsePage = () => {
  const location = useLocation();
  const [responseData, setResponseData] = useState(null);
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const encodedData = searchParams.get('postData');
    const decodedData = decodeURIComponent(encodedData);
    setResponseData(decodedData);
    
  }, [location]);

  useEffect(() => {
    if (responseData) {
      try {
        const parsedData = JSON.parse(responseData);
        if (parsedData.txStatus === 'SUCCESS') {
          clearCart(); // Call the clearCart function for successful payment
        }
      } catch (error) {
        console.error('Error parsing responseData:', error);
      }
    }
  }, [responseData]);

  const renderTableRows = () => {
    if (responseData) {
      const parsedData = JSON.parse(responseData);
      return Object.entries(parsedData).map(([key, value]) => (
        <tr key={key}>
          <td>{key}</td>
          <td id={key}>{value}</td>
        </tr>
      ));
    }
    return null;
  };

  const renderPanelClassName = () => {
    if (responseData) {
      const parsedData = JSON.parse(responseData);
      if (parsedData.signature === parsedData.computedsignature) {
        return 'panel panel-success';
      } else {
        return 'panel panel-danger';
      }
    }
    return 'panel';
  };

  const renderPanelHeading = () => {
    if (responseData) {
      const parsedData = JSON.parse(responseData);
      if (parsedData.signature === parsedData.computedsignature) {
        return 'Signature Verification Successful';
      } else {
        return 'Signature Verification Failed';
      }
    }
    return null;
  };
  const renderPanelHeading2 =  () => {

    if (responseData) {
      const parsedData = JSON.parse(responseData);
     
      if (parsedData.txStatus === "SUCCESS") {
       
        return 'Payment Successful';
      } else {
        return 'Payment Failed';
      }
    }
    return null;
  };
  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      </Helmet>
      <h1 align="center">PG Response</h1>
      <div className="container">
        <div id="panel" className={renderPanelClassName()}>
        <div className="panel-heading" id="heading">
            {renderPanelHeading2()}
            
          </div>
          <div className="panel-heading" id="heading">
            {renderPanelHeading()}
            
          </div>
          <div className="panel-body">
            <table className="table table-hover">
              <tbody id="tablebody">{renderTableRows()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsePage;
