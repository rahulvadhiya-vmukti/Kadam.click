import React from 'react';
import Wrapper from './styles';
import { Link } from 'react-router-dom';
// import heroBcg from '../../assets/hero-bcg.jpeg';
// import heroBcg2 from '../../assets/hero-bcg-2.jpeg';
import tree from '../../assets/tree.png';
import ImageSlider from './ImageSlider';



const Hero = () => {
  const containerStyle = {
    transform: 'translate3d(0px, 0px, 0px)'
  };
  const containerStyle1 = {
    transform: 'translate3d(0px, 0px, 0px)',
    width: '366.249px' 
  };
  
  return (
    <Wrapper className='section-center' style={{backgroundColor:"#f0f2ee"}}>
      <article className='content' >
        <p style={{ lineHeight: "110%" }}>
          Treasure Of <br />
          Traditions
        </p>
        <h1 style={{ letterSpacing: "0px" }}>
          Connect With Divine Energy Through Vedic Values Again
        </h1>
        <Link to='/products' className='btn'>
          shop now
        </Link>
      </article>

      <article className='img-container'>
        <div className='animation-bg'></div>
        <img src={tree} alt='' className='main-img' />
        {/* <img src={heroBcg2} alt='' className='accent-img' /> */}
      </article>


    {/* <ImageSlider/> */}

    </Wrapper>
  );
};

export default Hero;
