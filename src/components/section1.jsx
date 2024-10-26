import React from "react";
import "./section1.css"; // Import your CSS file for styling



const Section1 = () => {
    return (
      <div className="section-1">
        <div className="overlay">
          <h2 className="section-heading">Lets develop your next Great App</h2>
          <p className="section-paragraph">
          Do you need a unique software solution for your company? We know how to help you!
          </p>
          <div className="button-container">
            <button className="blue-button">Get in Touch</button>
            <button className="border-button">learn More</button>
          </div>
        </div>
      </div>
    );
  };
  

export default Section1;