import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  gap: 1rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 1.6;
    font-size:18px;
    max-width: 45em;
    margin: 0 auto;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 3fr;
  }

  h3{
    font-family: 'Space Grotesk', sans-serif;
    letter-spacing: -.02em;
  }

  .policy__wrapper {
    padding: 70px 70px 63px 60px;
    background: var(--tp-common-white);
}
.policy__translate {
    margin-top: -200px;
}
.p-relative {
    position: relative;
}
.z-index-1 {
    z-index: 1;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
*, :after, :before {
    box-sizing: border-box;
}
user agent stylesheet
div {
    display: block;
}
.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1*var(--bs-gutter-y));
    margin-right: calc(-.5*var(--bs-gutter-x));
    margin-left: calc(-.5*var(--bs-gutter-x));
}
.container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x)*.5);
    padding-left: calc(var(--bs-gutter-x)*.5);
    margin-right: auto;
    margin-left: auto;
}
body {
    font-family: Lato,Arial,Helvetica Neue,Helvetica,sans-serif;
}
body {
    font-family: var(--tp-ff-body);
    font-size: var(--tp-fz-body);
    font-weight: var(--tp-fw-regular);
    color: var(--tp-text-body);
    line-height: 26px;
    scroll-behavior: smooth;
}
body {
    margin: 0;
    font-family: var(--bs-body-font-family);
    font-size: var(--bs-body-font-size);
    font-weight: var(--bs-body-font-weight);
    line-height: var(--bs-body-line-height);
    color: var(--bs-body-color);
    text-align: var(--bs-body-text-align);
    background-color: var(--bs-body-bg);
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
:root {
    --accent: #00c0ea;
}
:root {
    --tp-ff-body: "Inter",sans-serif;
    --tp-ff-heading: "Space Grotesk",sans-serif;
    --tp-ff-p: "Inter",sans-serif;
    --tp-ff-inter: "Inter",sans-serif;
    --tp-ff-roboto: "Roboto",sans-serif;
    --tp-ff-oswald: "Oswald",sans-serif;
    --tp-ff-poppins: "Poppins",sans-serif;
    --tp-ff-space: "Space Grotesk",sans-serif;
    --tp-ff-play: "Playfair Display",serif;
    --tp-ff-syne: "Syne",sans-serif;
    --tp-ff-rajdhani: "Rajdhani",sans-serif;
    --tp-ff-fontawesome: "Font Awesome 6 Pro";
    --tp-common-white: #fff;
    --tp-common-white-op-7: hsla(0,0%,100%,.702);
    --tp-common-white-op-3: hsla(0,0%,100%,.302);
    --tp-common-white-op-03: hsla(0,0%,100%,.302);
    --tp-common-white-op-1: hsla(0,0%,100%,.102);
    --tp-common-black-solid: #000;
    --tp-common-black: #03041c;
    --tp-common-black-2: #152e27;
    --tp-common-black-3: #101d2d;
    --tp-common-black-4: #2c2d3c;
    --tp-common-black-5: #090e38;
    --tp-common-black-6: #171c44;
    --tp-common-black-7: #12173e;
    --tp-common-black-8: #141637;
    --tp-common-black-9: #0d121e;
    --tp-common-black-10: #414651;
    --tp-common-black-11: #04121f;
    --tp-common-black-12: #111428;
    --tp-common-black-13: #0c0f21;
    --tp-common-black-14: #1f2235;
    --tp-common-black-15: #051214;
    --tp-common-black-16: #06071c;
    --tp-common-black-17: #0d1031;
    --tp-common-black-18: #050616;
    --tp-common-black-19: #383840;
    --tp-common-blue: #171871;
    --tp-common-blue-2: #3242ee;
    --tp-common-blue-3: #306afa;
    --tp-common-blue-4: #2160fe;
    --tp-common-blue-5: #0057fc;
    --tp-common-blue-dark: #1b2bd7;
    --tp-common-khaki: #e0d1b4;
    --tp-common-khaki-2: #ffe4d4;
    --tp-common-khaki-3: #fcd2b9;
    --tp-common-khaki-4: #ff904f;
    --tp-common-purple: #6364db;
    --tp-common-purple-2: #5557f3;
    --tp-common-purple-3: #7b62ff;
Show All Properties (147 more)
}
:host, :root {
    --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
}
:host, :root {
    --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Pro";
}
:host, :root {
    --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Pro";
}
:host, :root {
    --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
}
:host, :root {
    --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
}
:host, :root {
    --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}
:root {
    --swiper-navigation-size: 44px;
}
:root {
    --swiper-theme-color: #007aff;
}
:root {
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-black: #000;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-gray-100: #f8f9fa;
    --bs-gray-200: #e9ecef;
    --bs-gray-300: #dee2e6;
    --bs-gray-400: #ced4da;
    --bs-gray-500: #adb5bd;
    --bs-gray-600: #6c757d;
    --bs-gray-700: #495057;
    --bs-gray-800: #343a40;
    --bs-gray-900: #212529;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-info: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #212529;
    --bs-primary-rgb: 13,110,253;
    --bs-secondary-rgb: 108,117,125;
    --bs-success-rgb: 25,135,84;
    --bs-info-rgb: 13,202,240;
    --bs-warning-rgb: 255,193,7;
    --bs-danger-rgb: 220,53,69;
    --bs-light-rgb: 248,249,250;
    --bs-dark-rgb: 33,37,41;
    --bs-white-rgb: 255,255,255;
    --bs-black-rgb: 0,0,0;
    --bs-body-color-rgb: 33,37,41;
    --bs-body-bg-rgb: 255,255,255;
    --bs-font-sans-serif: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --bs-font-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --bs-gradient: linear-gradient(180deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0));
    --bs-body-font-family: var(--bs-font-sans-serif);
    --bs-body-font-size: 1rem;
    --bs-body-font-weight: 400;
    --bs-body-line-height: 1.5;
Show All Properties (16 more)
}
:root {
    --rt-color-white: #fff;
    --rt-color-dark: #222;
    --rt-color-success: #8dc572;
    --rt-color-error: #be6464;
    --rt-color-warning: #f0ad4e;
    --rt-color-info: #337ab7;
    --rt-opacity: 0.9;
}
:root {
    --toastify-color-light: #fff;
    --toastify-color-dark: #121212;
    --toastify-color-info: #3498db;
    --toastify-color-success: #07bc0c;
    --toastify-color-warning: #f1c40f;
    --toastify-color-error: #e74c3c;
    --toastify-color-transparent: hsla(0,0%,100%,.7);
    --toastify-icon-color-info: var(--toastify-color-info);
    --toastify-icon-color-success: var(--toastify-color-success);
    --toastify-icon-color-warning: var(--toastify-color-warning);
    --toastify-icon-color-error: var(--toastify-color-error);
    --toastify-toast-width: 320px;
    --toastify-toast-background: #fff;
    --toastify-toast-min-height: 64px;
    --toastify-toast-max-height: 800px;
    --toastify-font-family: sans-serif;
    --toastify-z-index: 9999;
    --toastify-text-color-light: #757575;
    --toastify-text-color-dark: #fff;
    --toastify-text-color-info: #fff;
    --toastify-text-color-success: #fff;
    --toastify-text-color-warning: #fff;
    --toastify-text-color-error: #fff;
    --toastify-spinner-color: #616161;
    --toastify-spinner-color-empty-area: #e0e0e0;
    --toastify-color-progress-light: linear-gradient(90deg,#4cd964,#5ac8fa,#007aff,#34aadc,#5856d6,#ff2d55);
    --toastify-color-progress-dark: #bb86fc;
    --toastify-color-progress-info: var(--toastify-color-info);
    --toastify-color-progress-success: var(--toastify-color-success);
    --toastify-color-progress-warning: var(--toastify-color-warning);
    --toastify-color-progress-error: var(--toastify-color-error);
}
*, :after, :before {
    box-sizing: border-box;
}
*, :after, :before {
    box-sizing: border-box;
}
::selection {
    background: var(--tp-common-black);
    color: var(--tp-common-white);
    text-shadow: none;
}

  

`;

export default Wrapper;
