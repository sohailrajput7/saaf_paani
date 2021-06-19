import React from 'react';
import Commons from './Commons';
import web from './images/water.jpg'
import ContectUs from './ContectUs';
import AboutUs from './AboutUs';
import NewFeatures from './NewFeatures'
import Service from './Service'

const Home=()=> {
  return (
      <>
        <Commons name='Pure Water' imgsrc={web} visit='/' btname='Get Started'></Commons>
        <Service />
        <NewFeatures />
        <AboutUs />
        <ContectUs />
      </>
  );
}

export default Home;