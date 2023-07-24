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
  background-image: url('https://kadam.click/_next/static/media/Blog-5.4d4ab5a8.jpg');
  background-size: cover;
  background-position: center;
  background-color: #000;
  color: white;
  font-size: 32px;
`;


const Rakshabandhan = () => {
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
          <h1>Rakshabandhan</h1>
          <p style={{fontSize:'18px'}}>The word Raksha Bandhan denotes: Raksha meaning protection, and Bandhan meaning bond – a bond of protection.</p>

           
            </div>
        </div>
      </div>

      <div style={{alignItems:'center', justifyContent:'center', margin:'-120px 10% 1% 10%'}}>
          <div style={{backgroundColor:"#ffffff", textAlign:'left', padding:'5%'}}>
            <p>
            The spirit of Raksha Bandhan finds its origin in the ideas of inherent human need to love; to make strong resolution for the well-being of the loved ones; to care, and to protect.

            </p><br/>
            <p>
           Mythological stories command us not to remain satisfied with the surface. They compel us to look deeper into the essence of any culture or tradition.
            </p><br/>

            <h3>Mythology Stories</h3>
            <p>
            The Lord Krishna hurt his finger while killing the evil King Shishupal. He sent his Sudarshan Chakra to kill Shishupal, and while the evil king beheaded, Draupadi who was present there immediately took little strip of cloth from her sari and wrapped it around Krishna’s finger.
            </p><br/>
            <p>
            The Lord is believed to have blessed Draupadi by uttering the word “Akshayam,” meaning unending or endless.
                        </p><br/>
            <p>
            The Lord kept his promise and repaid his debt by protecting Draupadi when she disrobed by the Kauravas in the open assembly of King Dhritarashtra. Her disrobement could not happen as her sari kept getting extended, turning out to be truly “Akshyam,” unending or endless.
          
                        </p><br/>
            <p>
            The festival of Raksha Bandhan also finds its roots in one of the incidents mentioned in the 137th chapter of the Uttara Parva of the Bhavishya Purana. The eldest of the five Pandavas, King Yudhishthira got worried about the impending Kurukshetra War.
                        </p><br/>
            <p>
            He approached Lord Krishna and asked for his advice. He asked the Lord how he could protect all his brothers and the kingdom against the impending catastrophes of the war. Lord Krishna advised him to observe the ceremony in which a priest or a Raj purohit should tie a Rakhi around his right wrist on full moon day of the month of Shravana.
                        </p><br/>
            <p>
            Pandav’s mother Queen Kunti tied Rakhi to her grandson, Abhimanyu who was Arjun’s son. She tied Rakhi with a solid resolution that until this protective thread remains on the wrist of Abhimanyu, he would be invincible in the battlefield.

                        </p><br/>
            <p>
           But, because of past karmas, Abhimanyu had to die, and therefore, Lord Krishna took the shape of a mouse, and cut this sacred thread off while Abhimanyu was asleep. It is because of this Abhimanyu got killed while exiting the Chakravyuh.
           
                        </p><br/>
            <p>
            Kunti was able to summon all her powers of will to protect her grandson. That Rakhi did work until it was taken off by the Lord himself in the guise of the mouse. The story reflects power of Rakhi.
                </p><br/>

                <h3>Vedic Traditions</h3>

                <p>
                In Ancient times Rakhi made of Sandalwood (Chandan) & Silk Thread (Resham) along with saffron, Akshat, sarson ke dane, and durva were used as rituals. Science behind using all these materials is as follow, The Resham possesses the anti-bacterial qualities, Saffron, durva and sarson are an antioxidant, Chandan balances enzymes like serotonin and beta-endorphin.

                        </p><br/>
                <p>
                How to tie A Rakhi,
                        </p>
                <p>
                Sister should face east direction, use Sindoor, Chandan and Akshat for tilak. And tie Resham Rakhi while pronouncing below mantra,
                        </p>
            <p style={{fontWeight:'bold'}}>
            येन बद्धो बलि राजा, दानवेन्द्रो महाबलः |<br/>
तेन त्वां मनुबध्नामि, रक्षंमाचल माचल ||
                        </p><br/>
         
          </div>
      </div>


     

      <ImageSlider/>  

      <br/><br/>


    </main>
  );
};

export default Rakshabandhan;
