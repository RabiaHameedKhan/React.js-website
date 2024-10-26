import React from "react";
import "./BottomSection.css"; // Import your CSS file for styling
import image from './../Images/bottomsection.jpg'

const BottomSection = () => {
  return (
    <div className="bottom-section">
      <div className="left-section">
        <img src={image} alt="Left section image" className="left-image" />
      </div>
      <div className="right-section">
        <div className="grid-container">
          <div className="grid-box"><div className="grid-box">
  <h3 className="box-heading">What We <br/> Offer</h3>
  <button className="box-button">View All Services</button>
</div>
</div>
          <div className="grid-box"><div className="grid-box">
  <i className="call-icon">📞</i> {/* Using emoji as placeholder for call icon */}
  <h3 className="box-heading">CORPORATE SOLUTIONS</h3>
  <p className="box-paragraph">
  Need specific software for your company? We are ready to develop it!
  </p>
</div>
</div>
          <div className="grid-box"><div className="grid-box">
  <i className="headphone-icon">🎧</i> {/* Using emoji as placeholder for headphone icon */}
  <h3 className="box-heading">Call Centre Solutions</h3>
  <p className="box-paragraph">
  Our experts provide custom products of any complexity for call centers.
  </p>
</div>
</div>
          <div className="grid-box"><div className="grid-box">
  <i className="cloud-icon">☁️</i> {/* Using emoji as placeholder for cloud icon */}
  <h3 className="box-heading">Cloud Services</h3>
  <p className="box-paragraph">
  We can also offer you reliable cloud development solutions.
  </p>
</div>
</div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
