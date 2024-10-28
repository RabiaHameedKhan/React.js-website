import React from 'react';
import './project.css'; 
import mobile1 from '../../Images/mobile1.jpg'
import mobile2 from '../../Images/mobile2.jpg'
import cs1 from '../../Images/cs1.jpg'
import cs2 from '../../Images/cs2.jpg'
import qa1 from '../../Images/qa1.jpg'
import qa2 from '../../Images/qa2.jpg'

const ProjectSection = () => {
  return (
    <div className="project-section">
      <h1 className="main-heading">Latest Projects</h1>
      <p className="section-paragraph">
      In our portfolio, you can browse the latest products developed for our clients for different corporate purposes. Our qualified team of interface designers and software developers is always ready to create something unique for you
      </p>
      <p className="section-paragraph">
      In our portfolio, you can browse the latest products developed for our clients for different corporate purposes. Our qualified team of interface designers and software developers is always ready to create something unique for you
      </p>
      <div className="inline-headings">
        <h2 className="small-heading">All |</h2>
        <h2 className="small-heading">Mobile Apps |</h2>
        <h2 className="small-heading">Custom Software |</h2>
        <h2 className="small-heading">QA & Testing |</h2>
        <h2 className="small-heading">UX and Design</h2>
      </div>
      <div className="project-grid">
        <div className="project-box">
          <img src={mobile1} alt="project image"/>
        </div>
        <div className="project-box"><img src={mobile2} alt="project image"/></div>
        <div className="project-box"><img src={cs1} alt="project image"/></div>
        <div className="project-box"><img src={cs2} alt="project image"/></div>
        <div className="project-box"><img src={qa1} alt="project image"/></div>
        <div className="project-box"><img src={qa2} alt="project image"/></div>
        <div className="project-box"><img src={mobile1} alt="project image"/></div>
        <div className="project-box"><img src={mobile2} alt="project image"/></div>
      </div>
    </div>
  );
};

export default ProjectSection;
