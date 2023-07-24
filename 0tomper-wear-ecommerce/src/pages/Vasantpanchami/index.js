import React, { useEffect } from 'react';
import Wrapper from './styles';
import { PageHero } from '../../components';
import aboutImg from './vp.jpg';
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


const Vasantpanchami = () => {
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
          <h1>Vasant Panchami</h1>
          <p style={{fontSize:'18px'}}>Lord Krishna has said in the Gita that "I am the spring in the seasons".
This explains the significance of the fifth of Shukla Paksha of Maha Month i.e. "Vasant Panchami."</p>

           
            </div>
        </div>
      </div>

      <div style={{alignItems:'center', justifyContent:'center', margin:'-50px 10% 1% 10%'}}>
          <div style={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center',backgroundColor:"#ffffff", textAlign:'left', padding:'5%'}}>
            <p>
            Vasant Panchami is called Goddess Saraswati's Prominent Day, It is dedicated to the worship of Saraswati, Goddess of knowledge, intellect, art, music and science. Therefore Goddess Saraswati is worshiped to gain knowledge and get her blessings. Devotees pray to the Goddess and seek her blessings for spiritual growth, enlightenment and peace.
            </p><br/>
            <p>
            The day is also associated with the story of Kamadeva, the god of love, who is said to have been born on Vasant Panchami. This story is mentioned in the ancient Hindu scripture Mahabharata. According to the story, Kamadeva was born on this day from a lotus flower and is believed to be the son of Lord Shiva and Goddess Parvati.
            </p><br/>
            <p>
            The day is known by various names in different states like Saraswati Puja, Vagishwari Jayanthi, Rati Kama Mohotsav, Vasant Utsav..Also with the arrival of spring season, the nature is filled with colors, in which Yellow color is more visible. Which is a symbol of enthusiasm and represents sattvik, simplicity and purity. People also offer yellow flowers to Goddess Saraswati.
            </p><br/>
            <p>
            Thus this is a sacred festival in which nature also flourishes, an excellent time for starting new work, marriage auspicious time, for any auspicious work.

                        </p><br/>
            <p>
The importance of this day should be explained to the children and they should worship Goddess Saraswati in their hands, which increases the positive attitude towards knowledge, wisdom and concentration in them.

                        </p><br/>
            <p style={{fontWeight:'bold'}}>
            ॐ वागदैव्यै च विद्महे कामराजाय धीमहि। तन्नो देवी प्रचोदयात्‌।
                        </p><br/>
         
          </div>
      </div>


     

      <ImageSlider/>  

      <br/><br/>


    </main>
  );
};

export default Vasantpanchami;
