import React, { useEffect } from 'react';
import { FeaturedProducts, Hero, Services, Contact } from '../../components';
import ImageSlider from '../../components/Hero/ImageSlider';
import AboutMain from '../../components/Hero/About';
import Banner from '../../components/Hero/Banner';
import AboveFooter from '../../components/Hero/Above';



const HomePage = () => {
  useEffect(() => {
    document.title = 'Kadam | Home';
  }, []);

  return (
    <main>
      <section style={{backgroundColor:"#f0f2ee"}}>
         <Hero />
      </section>
      <br/>
      <br/>
      <br/>
      <ImageSlider/>
      <br/><br/>
      <div style={{ textAlign:"center",margin:"0 10%"}}>
      <AboutMain/>
      </div>
      <FeaturedProducts />
      <div style={{ textAlign:"center",margin:"0 10%"}}>
      <Banner/>
      </div>
      <div style={{ textAlign:"center",margin:"5% 0"}}>
      <AboveFooter/>
      </div>
      {/* <Services /> */}
      {/* <Contact /> */}
    </main>
  );
};

export default HomePage;
