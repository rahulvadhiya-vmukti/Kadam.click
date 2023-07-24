import React, { useEffect } from 'react';
import Wrapper from './styles';
import { PageHero } from '../../components';
import aboutImg from './rakshabandhan.jpg';
import bg from './blogsbg.png';
import styled from 'styled-components';
import ImageSlider from '../../components/Hero/ImageSlider';

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


const MakarSankranti = () => {
  useEffect(() => {
    document.title = 'Kadam | About';
  }, []);

  return (
    <main>
      {/* <PageHero title='about' /> */}
      <CenteredDiv>
        <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        </div>
      </CenteredDiv>

      <div style={{}}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          justifyContent: 'center',
          paddingTop: '90px',
          paddingBottom: '90px',
          backgroundImage: `url(${bg})`, // Replace 'bg' with the URL of your background image
          backgroundSize: 'cover', // Optionally, set the background size to cover the container
          backgroundRepeat: 'no-repeat', // Optionally, set the background repeat property
        }}>



          
          <div style={{margin:'0 20%',alignItems:'center',justifyContent: 'center',textAlign:'center'}}>
          <h1>MakarSankranti</h1>
          <p style={{fontSize:'18px'}}>In the Vedas, Sankranti deciphers the movement of the Sun from one rashi (constellation of the zodiac) to the next. Hence, there are 12 Sankrantis in a year. Out of these, the Makar Sankranti also known as ‘Poush Sankranti’ is considered the most auspicious and it is one of the few Hindu festivals that is aligned with the solar cycle.The festival also marks the beginning of the harvest season when new crops are worshipped and shared with delight.</p>
           
            </div>
        </div>
      </div>

      <div style={{alignItems:'center', justifyContent:'center', margin:'-50px 10% 1% 10%'}}>
          <div style={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center',backgroundColor:"#ffffff", textAlign:'left', padding:'5%'}}>
            <p>
            It heralds a change in season, as from this day the Sun begins its movement from Dakshinayana (South) to Uttarayana (North) hemisphere, marking the official end of Winters. Both a religious occasion and a seasonal observance, the occasion also marks the sun’s transit into Makar Raashi (the Capricorn zodiac sign).
            </p><br/>
            <p>
            It is celebrated as #Pongal in Tamil Nadu; MakarSankranti in Andhra Pradesh, Bengal, Kerala, Bihar, Goa, Karnataka, Orissa, Madhya Pradesh, Maharashtra, Manipur, Telangana and Uttar Pradesh; #Uttarayana in Gujarat and Rajasthan; #Maghi in Haryana, Himachal Pradesh and Punjab; and #Bihu in Assam.            </p><br/>
            <p>
            According to Hindu scriptures, on the day of Makar Sankranti, Lord Vishnu defeated the terror wreaked by demons by severing their heads and burying them under a mountain, symbolizing the end of negativities whilst giving way to righteousness and good intentions to live well and prosper.            </p><br/>
            <p>
            Therefore, this day is very conducive for Sadhana- the spiritual practice or meditation as the environment is full of ‘Chaitanya’ meaning ‘cosmic intelligence’.
                        </p><br/>
            <p>
            While there are plenty of stories about Makar Sankranti and its religious roots, it is said that the Sun stands for “Pratyaksha-Braham”, “a manifestation of the absolute”, bestowing knowledge, spiritual light, and wisdom, and hence Makar Sankranti is a special festival across the country, where Surya- the Sun God is worshipped and offered gratitude and prayers.
                        </p><br/>
         
          </div>
      </div>


     

      <ImageSlider/>  

      <br/><br/>


    </main>
  );
};

export default MakarSankranti;
