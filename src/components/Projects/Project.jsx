import React from 'react';
import './project.css'; // Ensure you create and import the CSS file
// import image from '../../Images/carousel1.jpg'

const ProjectSection = () => {
  return (
    <div className="project-section">
      <h1 className="main-heading">Latest Projects</h1>
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
          {/* <img src={image} alt="project image"/> */}
        </div>
        <div className="project-box">Image 2</div>
        <div className="project-box">Image 3</div>
        <div className="project-box">Image 4</div>
        <div className="project-box">Image 5</div>
        <div className="project-box">Image 6</div>
        <div className="project-box">Image 7</div>
        <div className="project-box">Image 8</div>
      </div>
    </div>
  );
};

export default ProjectSection;
