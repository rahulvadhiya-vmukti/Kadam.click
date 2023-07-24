import React from 'react';
import Wrapper from './styles';
import { formatPrice } from '../../utils/helpers';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({ image, name, price, id }) => {
  const containerStyle = {
    height: '300px',
    width: '300px',
    objectFit: 'cover',
  };
  const containerStyle2 = {
    height: '300px',
    width: '300px',
    objectFit: 'cover',
    overflow:"hidden"
  };
  const containerStyle1 = {
    width: '300px',
  };
  return (
    <Wrapper>
      <div className='container' style={containerStyle2}>
        <img src={image} alt='main' className='prodie' style={containerStyle} />
        <Link to={`/products/${id}`} className='link'>
          <FaSearch />
        </Link>
      </div>
      <footer style={containerStyle1}>
        <h5>{name}</h5>
        
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};

export default Product;
