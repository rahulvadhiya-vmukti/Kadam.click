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
  background-image: url('https://kadam.click/_next/static/media/Blog-2.5994c6db.jpg');
  background-size: cover;
  background-position: center;
  background-color: #000;
  color: white;
  font-size: 32px;
`;


const Mahashivratri = () => {
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
          paddingBottom: '190px',
          backgroundImage: `url(${bg})`, // Replace 'bg' with the URL of your background image
          backgroundSize: 'cover', // Optionally, set the background size to cover the container
          backgroundRepeat: 'no-repeat', // Optionally, set the background repeat property
        }}>




          <div style={{ margin: '0 20%', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <h1>Mahashivratri</h1>
            <p style={{ fontSize: '18px' }}>Maha-Shivaratri is a festival celebrated in the month of Phalguna in February/March. It heralds the start of the spring season and literally means the “Great Night of Shiva”. There are many stories that are connected to the origins of this festival.</p>
          </div>
        </div>
      </div>

      <div style={{ alignItems: 'center', justifyContent: 'center', margin: '-120px 10% 1% 10%' }}>


        <div style={{ backgroundColor: "#ffffff", textAlign: 'left', padding: '5%' }}>

        <p>
        According to one of the most popular legends, Shivaratri marks the wedding day of Lord Shiva and Parvati. Some believe that it was on the auspicious night of Shivaratri that Lord Shiva performed the ‘Tandava’, the dance of the primal creation, preservation and destruction. Another popular Shivratri legend stated in Linga Purana states that it was on Shivaratri that Lord Shiva manifested himself in the form of a Linga. Hence the day is considered to be extremely auspicious by Shiva devotees and they celebrate it as Maha shivaratri – the grand night of Shiva.             </p>
  
          <h3>Marriage of shiva and shakti</h3><br />
          <p>
          All of us are aware of the love story of Lord Shiva. His love for Goddess Sati was extremely intense and pure which denied his heart to fall for any other beauty even after Sati’s demise. Goddess Parvati – an unmarried beautiful girl then with huge devotion and love for the Lord was waiting for Shiva to accept her love. After sever penance and extreme meditation Goddess Parvati was finally able to win the Lord’s heart.
           </p>

          <h3>Samudra Manthan</h3><br />
          <p>
          Most of us must be aware of the story of the great Samudra Manthan among the asuras and the devas. This fight had for sure produced the immortal Amrit but along with it had also produced the most poisonous venom ever known as the Haala Hala. The poison had the capacity to destroy the universe and hence only Lord Shiva could destroy it my drinking it. The poison was so potent that Lord Shiva was suffering from immense pain and his throat had also become blue. For this reason, Lord Shiva is famously known as ‘ Neelakantha’. Shivaratri is the celebration of this event by which Shiva saved the world.

</p>
          <br />
          
          <h3>The other popular story is that of Lubdhaka.</h3><br />
          <p>
          Lubdhaka was a tribal who would go into the forest every day to collect firewood. One day, he went deep into the forest and lost his way and could not return home before nightfall. As darkness fell, he heard the growls of wild animals. Terrified, he climbed the nearest tree for shelter till morning. This happened to be a wood-apple, also known as the bel tree in Hindi.
           </p>
          <p>
          But as he perched in the branches, he was afraid he would fall asleep and fall off the tree. To stay awake, he decided to pluck a leaf at a time from the tree and drop it, all the while chanting the name of Shiva. At dawn, he climbed down the tree, he saw a Shiva-Linga at its base. He realized that he had, unknowingly, dropped a thousand leaves onto a Shiva-Linga to keep himself awake. This unwitting all-night worship pleased Shiva, by whose grace the tribal was rewarded with divine bliss.

           </p>
          

        </div>


      </div>



      <ImageSlider />


    </main>
  );
};

export default Mahashivratri;
