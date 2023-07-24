import React, { useEffect } from 'react';
import Wrapper from './styles';
import { PageHero } from '../../components';
import aboutImg from './holika.jpg';
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


const HolikaDahan = () => {
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
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '90px',
          paddingBottom: '90px',
          backgroundImage: `url(${bg})`, // Replace 'bg' with the URL of your background image
          backgroundSize: 'cover', // Optionally, set the background size to cover the container
          backgroundRepeat: 'no-repeat', // Optionally, set the background repeat property
        }}>




          <div style={{ margin: '0 20%', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <h1>HolikaDahan</h1>
            <p style={{ fontSize: '20px' }}>Holi - festival is celebrated since the Vedic period, and in the Vedic age, Agni has been considered the main deity, but its form has been constantly changing. Many forms of its worship have come into existence.</p>
          </div>
        </div>
      </div>

      <div style={{ alignItems: 'center', justifyContent: 'center', margin: '-50px 10% 1% 10%' }}>


        <div style={{ backgroundColor: "#ffffff", textAlign: 'left', padding: '5%' }}>


          <h3>Ancient form of Holi</h3><br />
          <p>
            Holi festival is known by many names like Hola Ka, Hutashni, Phalguni. </p>
          <p>It is said in this sutra 'Kathakagrihasutra' that Holi festival is a ritual for the good fortune of women, its goddess 'Raka' means full moon night.This festival is celebrated on Phagani Poonam. Raka is a goddess of the Rigveda and Manai is the goddess of the full moon in Vedic texts.</p>
          <br />

          <h3>Holi is a collective navanna-yagna</h3><br />
          <p>
          According to Vedas it is a major festival of agriculture, Phagan-chaitra is the month of new harvest, the color festival of the change of season and harvest of Dhandanya, before the new season, offerings are made to Agnidev, Kalpa-grihasutras have described various crops. One of the Yajnas is 'Navanna-Yagya'. So even today coriander, chana, dates, coconut are burnt in the Holi yagna fire.</p>
          <br />
          
          <h3>Yagna of seasonal change and environmental purification</h3><br />
          <p>
          On the occasion of Vedic Yagna, 'Yajna-Stambha' is planted, today Holi danda is established and piled around it with thatch, wood, dry leaves etc. Depending on which direction it falls, rain etc. is predicted. The reeds of Holikotsav symbolize three things.Originally a Vedic Yagna pillar, according to the Puranic tradition it is a symbol of Holika and according to a third tradition it is a symbol of the past year i.e it is also a festival to bid farewell to the winter and welcome the new season.
                    </p>
          <p>
          Holi burns the body with the heat of the fire. In Holi, many substances are offered, the heat of Holi is considered to be healthy in terms of Ayurveda.It is considered auspicious in terms of Ayurveda, so today people celebrate Holi, bring a burning coal and turn it inside the house, so that the insects are dest royed, the atmosphere becomes pure.
           </p>
          <br />

          <h3>Mythology of Devotee Prahlad and Holika of Demonic Extermination and Divine Victory</h3><br />
          <p>
          The story of the demon king Hiranyakashyap and his son Prahlad found in Mahabharata and Bhagavata Puranas is well known.Hiranyanksyapa, who got the boon of Brahma, tortured the gods and started believing himself to be a god, but the son of such an asura became a devotee of Vishnu. He used to criticize his father's vices. So to kill such a son he started evil deeds, but the son was not harmed, finally he plotted to burn the son ne. By order of Hiranyankshyap, sister Holika took Prahlad in her lap and sat in the Holi pyre on Phagan Purnima. Holika was burnt,But Vishnu's supreme devotee Prahlad came out of the fire laughing, playing, alive! The monstrous Holika who supported the demonic nature was destroyed and the divine nature was not affected. Holika Dahan is the great festival of the victory of religion over iniquity, divine wealth over demonic wealth, burning the negative karma and walking on the path of righteousness is the message of Holika Dahan to the human race.    
          
          </p><br />


        </div>


      </div>



      <ImageSlider />


    </main>
  );
};

export default HolikaDahan;
