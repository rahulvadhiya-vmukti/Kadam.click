import styled from 'styled-components';

const Wrapper = styled.footer`

/* Reset default list styles for UL */
ul {
  margin: 0;
  padding: 0;
}

/* Footer Section */
.footer-section {
  background: #ffffff;
  position: relative;
  color: #fff;
  font-family: Arial, sans-serif;
}

.footer-cta {
  border-bottom: 1px solid #373636;
  padding: 40px 0;
}

.footer-cta .single-cta i {
  color: #ff5e14;
  font-size: 30px;
  float: left;
  margin-top: 8px;
}

.footer-cta .cta-text {
  padding-left: 15px;
  display: inline-block;
}

.footer-cta .cta-text h4 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
}

.footer-cta .cta-text span {
  font-size: 15px;
}

.footer-content {
  position: relative;
  z-index: 2;
  padding: 40px 0;
}

.footer-logo img {
  max-width: 200px;
}

.footer-text p {
  margin-bottom: 14px;
  font-size: 14px;
  color: #7e7e7e;
  line-height: 28px;
}

.footer-social-icon span {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
}

.footer-social-icon a {
  color: #fff;
  font-size: 16px;
  margin-right: 15px;
}

.footer-social-icon i {
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
}

.facebook-bg {
  background: #3B5998;
}

.twitter-bg {
  background: #55ACEE;
}

.google-bg {
  background: #DD4B39;
}

.footer-widget-heading h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  color:#151414;
  position: relative;
}

.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  color:#151414;
  background: #ffffff;
}

.footer-widget ul li {
  display: inline-block;
  float: left;
  width: 50%;
  margin-bottom: 12px;
  color:#151414;
}

.footer-widget ul li a:hover {
  color: #ff5e14;
}

.footer-widget ul li a {
  color: #878787;
  text-transform: capitalize;
}

.subscribe-form {
  position: relative;
  overflow: hidden;
}

.subscribe-form input {
  width: 100%;
  padding: 14px 28px;
  background: #2E2E2E;
  border: 1px solid #2E2E2E;
  color: #fff;
}

.subscribe-form button {
  position: absolute;
  right: 0;
  background: #ff5e14;
  padding: 13px 20px;
  border: 1px solid #ff5e14;
  top: 0;
}

.subscribe-form button i {
  color: #fff;
  font-size: 22px;
  transform: rotate(-6deg);
}

/* Copyright Area */
.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}

.footer-menu li a:hover {
  color: #ff5e14;
}

.footer-menu li a {
  font-size: 14px;
  color: #878787;
}

/* Optional: Add styles for footer-pattern image if needed */
/*.footer-pattern img {
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
}*/

/* Copyright Area */
.copyright-area {
  background: #ffffff;
  padding: 25px 0;
}

/* Additional Styles */
.container {
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.col-xl-4,
.col-lg-4,
.col-md-4,
.col-xl-6,
.col-lg-6 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.mb-30 {
  margin-bottom: 30px;
}

.mb-50 {
  margin-bottom: 50px;
}

.pt-5 {
  padding-top: 5px;
}

.pb-5 {
  padding-bottom: 5px;
}

.text-center {
  text-align: center;
}

.text-lg-left {
  text-align: left;
}

.d-lg-block {
  display: block;
}

@media (min-width: 992px) {
  .col-lg-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

`;

export default Wrapper;
