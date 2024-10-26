import React from 'react';
import './Section2.css'; // Ensure this CSS file is imported

const Section2 = () => {
  return (
    <div className="section-2">
      <div className="big-text">10</div>
      <div className="info-section">
        <h2 className="section-heading">Years of <br /> Experience</h2>
        <p className="section-text">
          RatherApp is a team of highly experienced app designers and developers creating unique software for you.
        </p>
        <button className="blue-button">Get in Touch</button>
      </div>
      <div className="small-boxes">
        <div className="small-box box-1">
          <h1>2K</h1>
          <h3>Apps Developed</h3>
        </div>
        <div className="small-box box-2">
          <h1>40</h1>
          <h3>Consultants</h3>
        </div>
        <div className="small-box box-3">
          <h1>12</h1>
          <h3>Awards Won</h3>
        </div>
        <div className="small-box box-4">
          <h1>160</h1>
          <h3>Employees</h3>
        </div>
      </div>
    </div>
  );
};

export default Section2;
