import React from 'react';
// import ReactDOM from 'react-dom/client'; 
import './index.css';  
import Navbar from './components/Navbar/Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import BottomSection from './components/BottomSection/Bottom';
import Section1 from './components/Section1/section1';
import ProjectSection from './components/Projects/Project';
import Section2 from './components/Section2/Section2';
import Teams from './components/Teams/Teams';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';


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
      <Testimonials/>
      <Contact/>
      <Footer/>

    
   </>
  );
}

export default App;
