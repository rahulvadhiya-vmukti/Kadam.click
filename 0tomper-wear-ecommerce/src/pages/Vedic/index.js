import React, { useEffect } from 'react';
import Wrapper from './styles';
import { PageHero } from '../../components';
import aboutImg from './aboutus.jpg';
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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Vedic = () => {
  useEffect(() => {
    document.title = 'Kadam | About';
  }, []);

  return (
    <main>
      {/* <PageHero title='about' /> */}
      <CenteredDiv>
        <div style={{display:'flex', flexDirection:'column'}}>
        <h5>
        Importance of
        </h5>
        <h2>
          Vedic Values
        </h2>
        </div>
      </CenteredDiv>
      <Wrapper className='page section section-center'>
        {/* <img src={aboutImg} alt='pic' /> */}
        <h3>Importance of Vedic Knowledge and Traditions</h3>

        <article>
          {/* <div className='title'>
            <h2>My Story</h2>
            <div className='underline'></div>
          </div> */}
          <p>
          When people today learn about India';s ancient Vedas they discover a tradition, 5,000 years old, guided by enlighten seers living in harmony with nature, chanting arcane mantras, and performing mysterious rituals. This image of the Vedic world appears fascinating but is also difficult to understand, suggesting perhaps a mystical fantasy more than any deeper reality.
                    </p><br/>
          <p>
          Yet, this affecting image of the Vedic living is but an introduction into a radically different worldview than our current high-tech society, invoking a cosmic vision that takes us beyond time and space to the origins of the universe much like modern physics, but in an experiential way within our own consciousness.
                  </p><br/>
          <p>
          Today, we find Vedic systems of knowledge spreading worldwide through teachings like Yoga, Vedanta, Ayurveda, Jyotish and Vaastu, along with numerous books, courses and teachers
            </p><br/>
            <br/>
        </article>



        <h3>What is Vedic Knowledge?</h3>

        <article>
          {/* <div className='title'>
            <h2>My Story</h2>
            <div className='underline'></div>
          </div> */}
          <p>
          Veda is a vast tradition of knowledge on all levels, not only mundane but also spiritual. Veda itself means knowledge, not mere information but transformative knowledge born of inner perception, deep meditation and higher consciousness. The Vedic mantras reflect knowledge of the rishis who were said to have understood the cosmic sound vibration OHM and its subtle energies that sustain all existence and guide all life.
           </p><br/>
          <p>
          The Vedas are not mere religious books and do not propose any articles of faith. They direct us to discover the Divine within us, for which they provide the guidance and the practices for each one of us to apply.
 </p><br/>
          <p>
          Vedic knowledge represents not only the past but also the future of India. It helped shape the characteristic features of India';s vast and enduring Dharmic civilization through the centuries, as the Vedas first of all were formulated to teach Dharma. India';s traditional philosophies, arts and sciences have strong Vedic connections.
          </p><br/>
          <p>
          The Vedas inspire us first of all to awaken a Rishi vision within us. The Rishis were seers of the highest order, cultural creators and world-makers, working with the powers of cosmic intelligence. Their concern was both with the individual and society, creating a Dharmic culture and Yogic way of life for all. Such new visionaries are needed again today, who have a vision of the future rooted in eternal wisdom and a respect for the sacred nature of all life.
                  </p>
        </article>

      </Wrapper>
      
      <ImageSlider/>

     
    </main>
  );
};

export default Vedic;
