import React from 'react';
import './Teams.css'; 
import image1 from '../../Images/team1.jpg'
import image2 from '../../Images/team2.jpg'
import image3 from '../../Images/team3.jpg'
import image4 from '../../Images/team4.jpg'


const TeamSection = () => {
  return (
    <div className="team-section">
      <h2 className="team-heading">Meet the Team</h2>
      <div className="team-grid">
        <div className="team-member">
          <img src={image1} alt="Team Member 1" className="team-image" />
          <div className="team-overlay">
            <h3 className="member-name">John Doe</h3>
            <p className="member-role">Developer</p>
          </div>
        </div>
        <div className="team-member">
          <img src={image2} alt="Team Member 2" className="team-image" />
          <div className="team-overlay">
            <h3 className="member-name">Jane Smith</h3>
            <p className="member-role">Designer</p>
          </div>
        </div>
        <div className="team-member">
          <img src={image3} alt="Team Member 3" className="team-image" />
          <div className="team-overlay">
            <h3 className="member-name">Emily Davis</h3>
            <p className="member-role">Marketing</p>
          </div>
        </div>
        <div className="team-member">
          <img src={image4} alt="Team Member 4" className="team-image" />
          <div className="team-overlay">
            <h3 className="member-name">Mike Johnson</h3>
            <p className="member-role">Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
