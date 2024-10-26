import React from 'react';
// import ReactDOM from 'react-dom/client'; 
import './index.css';  
import Navbar from './components/Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
// import HeroSection from './components/HeroSection';
import BottomSection from './components/Bottom';
import Section1 from './components/section1';
import ProjectSection from './components/Project';
import Section2 from './components/Section2';
import Teams from './components/Teams';


function App() {
  return (
   <>
      <Navbar/>
      {/* <HeroSection/> */}
      <BottomSection/>
      <Section1/>
      <ProjectSection/>
      <Section2/>
      <Teams/>

    
   </>
  );
}

export default App;
