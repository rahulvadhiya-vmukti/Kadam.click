import React, { useEffect } from 'react';
import './styles';
import Swiper from 'swiper';

const ImageSlider = () => {
  useEffect(() => {
    // Initialize the Swiper instance here
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
      centeredSlides: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        2601: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
      },
    });
  }, []); // Empty dependency array to ensure the effect runs only once after initial render

  return (
    <div>
      {/* <!-- Slider main container --> */}
      <div className="swiper" style={{backgroundColor:"#ffffff", margin:"0 10%"}}>
        {/* <!-- Additional required wrapper --> */}
        <div className="swiper-wrapper">
          {/* <!-- Slides --> */}
          <div className="swiper-slide" style={{textAlign:"center"}}>
            <a href='/rakshabandhan'>

            <img src='https://i.ibb.co/5YJ5Dd5/Blog-5-Thumbnail.jpg' alt='image' />
            <p>Rakshabandhan</p>
            </a>
          </div>

          <div className="swiper-slide" style={{textAlign:"center"}}>
          <a href='/holikadahan'>

            <img src='https://i.ibb.co/k3QX1GK/Blog-1-Thumbnail.jpg' alt='image' />
            <p>Holika Dahan</p></a>
          </div>
          <div className="swiper-slide" style={{textAlign:"center"}}>
            <a href='/navratri'>
            <img src='https://i.ibb.co/QjgkqHb/Blog-4-Thumbnail.jpg' alt='image' />
            <p>Navratri</p></a>
          </div>
          <div className="swiper-slide" style={{textAlign:"center"}}>
          <a href='/vasantpanchami'>

            <img src='https://i.ibb.co/Jjy72Bh/Blog-6-Thumbnail.jpg' alt='image' />
            <p>Vasant Panchami</p></a>
          </div>
          <div className="swiper-slide" style={{textAlign:"center"}}>
          <a href='/mahashivratri'>

            <img src='https://i.ibb.co/8zgBTyb/Blog-2-Thumbnail.jpg' alt='image' />
            <p>Maha Shivratri</p></a>
          </div>
          <div className="swiper-slide" style={{textAlign:"center"}}>
          <a href='/makarsankranti'>

            <img src='https://i.ibb.co/J3BtjYt/Blog-3-Thumbnail.jpg' alt='image' />
            <p>Makarsankranti</p></a>
          </div>

         
        </div>

        {/* <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div> */}
      </div><br/><br/>
    </div>
  );
};

export default ImageSlider;
