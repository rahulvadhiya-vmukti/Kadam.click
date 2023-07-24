import React from 'react';
import above from './abovefooter.jpg';
import styled from 'styled-components';

const CenteredDiv1 = styled.div`
  height: 33vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${above});
  background-size: cover;
  background-position: center;
  background-color: #000;
  color: white;
  font-size: 32px;
`;

const CenteredDiv2 = styled.div`
  height: 18vh;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: #000000;
`;

const AboveFooter = () => {
  return (
    <div>
      <CenteredDiv1>
        <CenteredDiv2>
          <h3>Login for Latest Trends & Offers</h3>
        </CenteredDiv2>
      </CenteredDiv1>
    </div>
  );
};

export default AboveFooter;
