import React from 'react';
import Commons from './Commons';
import web from './images/water.jpg'
import NewFeatures from './NewFeatures'
import Service from './Service'
import MainScreen from './MainScreen'
const Home=()=> {
  return (
      <MainScreen>
        <Commons name='Pure Water' imgsrc={web} visit='/' btname='Get Started'></Commons>
        <Service />
        <NewFeatures />
      </MainScreen>
  );
}

export default Home;