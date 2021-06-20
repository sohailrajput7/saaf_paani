import React,{useState} from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Switch,Route, Redirect} from 'react-router-dom';
import AboutUs from './AboutUs'
import ContectUs from './ContectUs'
import Navbar from './Navbar'
import {createGlobalStyle,ThemeProvider} from 'styled-components'
import Home from './Home';
import Footer from './Footer'; 

const GlobalStyle=createGlobalStyle`
body{
  background-color:${props=>props.theme.mode=='dark'?'#333':'#fff'};
  color:${props=>props.theme.mode==='dark'?'#fff':'#111'};
}
`;


const MainScreen=()=> {
  const[theme,setTheme]=useState({mode:'dark'})
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Navbar />
        <Switch>
						<Route exact path="/" component={Home} />

						<Route exact path="/contectUs" component={ContectUs} />
						<Route exact path="/aboutUs" component={AboutUs} />			
				</Switch>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default MainScreen;
