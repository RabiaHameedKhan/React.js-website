import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './HeroSection.css'; // Add custom styling here


const HeroSection = () => {
  return (
    <section className="hero-section">
      <Carousel>
        {/* First Carousel Item */}
        <Carousel.Item>
          <div className="carousel-bg"  style={{ backgroundImage: `url('/Images/carousel1.jpg')` }}>
            <div className="carousel-caption">
              <h2>First Carousel Text</h2>
              <Button variant="primary" className="hero-button">Learn More</Button>
            </div>
          </div>
        </Carousel.Item>

        {/* Second Carousel Item */}
        <Carousel.Item>
          <div className="carousel-bg" style={{ backgroundImage: `url('/Images/carousel1.jpg')` }}>
            <div className="carousel-caption">
              <h2>Second Carousel Text</h2>
              <Button variant="primary" className="hero-button">Explore Now</Button>
            </div>
          </div>
        </Carousel.Item>

        {/* Third Carousel Item */}
        <Carousel.Item>
          <div className="carousel-bg" style={{ backgroundImage: `url('/Images/carousel1.jpg')` }}>
            <div className="carousel-caption">
              <h2>Third Carousel Text</h2>
              <Button variant="primary" className="hero-button">Get Started</Button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroSection;
