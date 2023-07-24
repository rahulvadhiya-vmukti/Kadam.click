import React, { useEffect } from 'react';
import Wrapper from './styles';
import { PageHero } from '../../components';
import aboutImg from './navratri.jpg';
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


const Navratri = () => {
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
          paddingBottom: '190px',
          backgroundImage: `url(${bg})`, // Replace 'bg' with the URL of your background image
          backgroundSize: 'cover', // Optionally, set the background size to cover the container
          backgroundRepeat: 'no-repeat', // Optionally, set the background repeat property
        }}>



          
          <div style={{margin:'0 20%',alignItems:'center',justifyContent: 'center',textAlign:'center'}}>
          <h1>Navratri</h1>
          {/* <p style={{fontSize:'20px'}}>Holi - festival is celebrated since the Vedic period, and in the Vedic age, Agni has been considered the main deity, but its form has been constantly changing. Many forms of its worship have come into existence.</p> */}
           
            </div>
        </div>
      </div>

      <div style={{alignItems:'center', justifyContent:'center', margin:'-120px 10% 1% 10%'}}>
          <div style={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center',backgroundColor:"#ffffff", textAlign:'left', padding:'5%'}}>
            <p>
            The destructive Mahisasura created a lot of havoc and brought in immense anger in the Trimurti. The Trimurti then brought their energies together to form the epitome of power that is NavaDurga. Every God then besto wed on the new feminine power all their characteristic weapons. Shiva – the trident, Vishnu – the discus, Varuna – the conch, Agni – the spear, Yama – the cudgel, Vayu – the bow, Surya – the arrows, Indra – the vajra, Kubera – the mace, Brahma – the water pot, Kala – the sword and Vishwakarma – the axe. Himavan gifted a mountain lion as her vehicle.
            </p><br/>
            <p>
            The destructive Mahisasura created a lot of havoc and brought in immense anger in the Trimurti. The Trimurti then brought their energies together to form the epitome of power that is NavaDurga. Every God then besto wed on the new feminine power all their characteristic weapons. Shiva – the trident, Vishnu – the discus, Varuna – the conch, Agni – the spear, Yama – the cudgel, Vayu – the bow, Surya – the arrows, Indra – the vajra, Kubera – the mace, Brahma – the water pot, Kala – the sword and Vishwakarma – the axe. Himavan gifted a mountain lion as her vehicle.
            </p><br/>
          </div>
      </div>


     

      <ImageSlider/>  

      <br/><br/>


    </main>
  );
};

export default Navratri;
