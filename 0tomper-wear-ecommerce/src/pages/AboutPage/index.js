import React, { useEffect } from 'react';
import Wrapper from './styles';
import { PageHero } from '../../components';
import aboutImg from './aboutus.jpg';
import styled from 'styled-components';

const CenteredDiv = styled.div`
  height: 40vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${aboutImg});
  background-size: cover;
  background-position: center;
  background-color: #000;
  color: white;
  font-size: 32px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const AboutPage = () => {
  useEffect(() => {
    document.title = 'Kadam | About';
  }, []);

  return (
    <main>
      {/* <PageHero title='about' /> */}
      <CenteredDiv>
        <div style={{display:'flex', flexDirection:'column'}}>
        <h5>
        About Us
        </h5>
        <h2>
          Welcome to Kadam
        </h2>
        </div>
      </CenteredDiv>
      <Wrapper className='page section section-center'>
        {/* <img src={aboutImg} alt='pic' /> */}
        <h3>What is Kadam ?</h3>

        <article>
          {/* <div className='title'>
            <h2>My Story</h2>
            <div className='underline'></div>
          </div> */}
          <p>
          India is a country with a rich heritage and culture. At the core of Indian culture is human liberation and happiness based on scientific process. Behind every tradition lies the development of human welfare and subtle logic.
          </p>
        </article>



        <h3>Why is it important to teach about Indian culture and traditions?</h3>

        <article>
          {/* <div className='title'>
            <h2>My Story</h2>
            <div className='underline'></div>
          </div> */}
          <p>
          ⚫ Helps develop a positive sense of self-identity< br/>
⚫ Develops respect for others< br/>
⚫ Strengthens morals and values< br/>
⚫ It will promote preservation of cultural heritage< br/>
⚫ A sense of unity in diversity< br/>
          </p><br/>
          <p>
          With the progress in today's modern times, we are getting away from our festivals and traditions which plays an important role in the social, mental and physical formation of an individual, "Kadam" is an attempt to take us back to our roots and to connect with the relevance of today's modern times and awareness of our traditional heritage.
          </p><br/>
          <p>
          Our celebrated festivals are the mirror of our culture. Taking a step forward with simplicity, a step towards our tradition, "Kadam" brings the excitement of celebrating our festivals with positive energy and connecting back to our roots.
                    </p><br/>
          <p>
          "Kadam" initiates an effort, which will take us with our mythological practices and reveal the cultural significance of each festival and the right way to celebrate it.
                              </p>
        </article>

      </Wrapper>

     
    </main>
  );
};

export default AboutPage;
