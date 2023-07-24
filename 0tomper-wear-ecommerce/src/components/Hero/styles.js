import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(80vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }

    @import url('https://fonts.googleapis.com/css?family=Mukta+Malar:400,700,800');


h1, h2, h3 {
  font-weight: 800;
}

.card-wrap {
  padding: 100px;
  width: 100%;
  margin: auto;
  overflow-x: hidden;
}

.flickity-viewport {
  height: 340px; /* $min-height + 100px */
}

.card {
  width: 100%;
  max-width: 190px;
  min-width: 190px; /* $max-width */
  border-radius: 0.6rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.04);
  position: relative;
  min-height: 240px; /* $min-height */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 1rem;
}

.card__overlay {
  border-radius: 0.6rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.12);
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.3));
  opacity: 0.7;
  transition: all 350ms ease-out 0s;
}

.card__info {
  padding: 3rem 1.5rem;
  width: 100%;
  text-align: center;
  color: white;
  position: absolute;
  bottom: 0;
  text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
}

.card__title {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

a.card {
  transition: all 350ms ease-out 0s;
  overflow: hidden;
}

a.card:hover, a.card:focus {
  .card__overlay {
    opacity: 1;
    top: -150px;
  }
  transform: scale(1.1) translateY(8px);
  transition: all 350ms ease;
}

a.card:hover {
  cursor: -webkit-grab;
}

a.card:focus, a.card:active {
  cursor: -webkit-grabbing;
}

.overlay {
  color: white;
  position: absolute;
  top: 0;
  pointer-events: none;
  bottom: 0;
  right: 0;
  left: 0;
  background: transparent;
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 1%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 1) 99%);
  z-index: 100;
}

h1 {
  z-index: 101;
  text-shadow: 5px 15px 25px rgba(0, 0, 0, 0.17), 3px 8px 15px rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 700px) {
  h1 {
    font-size: 24px;
  }
}


/* Add the CSS animation to the animation-bg class */
.animation-bg {
  position: absolute;
  object-fit:contain;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 100%;
  overflow: hidden;
  -webkit-animation: grow 4s infinite;
  animation: grow 4s infinite;
}

@-webkit-keyframes grow {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
}

@keyframes grow {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
}

/* Rest of your existing styles for .main-img and .accent-img */
.img-container {
  position: relative;
  /* Your other styles for the img-container class */
}

.main-img {
  /* Your styles for the main image */
}

/* .accent-img {
  Your styles for the accent image (if needed)
} */

/* Converted from SCSS to CSS */
.swiper {
  width: 100%;
  max-width: 1280px;
  height: 250px;
  margin-top: 40px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #EEE;
}


   
  }
`;
// .img-container::before {
//   content: '';
//   position: absolute;
//   width: 10%;
//   height: 80%;
//   background: var(--clr-primary-9);
//   bottom: 0%;
//   left: -8%;
//   border-radius: var(--radius);
// }
export default Wrapper;
