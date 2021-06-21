import React,{useState} from 'react';
import Navbar from './Navbar'
import {createGlobalStyle,ThemeProvider} from 'styled-components'
import Footer from './Footer'; 

const GlobalStyle=createGlobalStyle`
body{
  background-color:${props=>props.theme.mode=='dark'?'#333':'#fff'};
  color:${props=>props.theme.mode==='dark'?'#fff':'#111'};
}
`;

const MainScreen=(props)=> {
  const[theme,setTheme]=useState({mode:'dark'})
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Navbar />
        {props.children}
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default MainScreen;
