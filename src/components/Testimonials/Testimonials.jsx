import React from 'react';
import './Testimonials.css';

// Import images from the src/images folder
import Image1 from '../../Images/testimonial1.jpg';
import Image2 from '../../Images/testimonial2.jpg';
import Image3 from '../../Images/testimonial3.jpg';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Emily Parker",
            review: "RatherApp offers a high caliber of resources skilled in Microsoft Azure .NET, mobile and Quality Assurance.They became our true business partners over the past three years..",
            image: Image1, // Use imported image
        },
        {
            name: "Sarah",
            review: "RatherApp powered us with a competent team to develop products for banking services. The team has been delivering results within budget and time, which is amazing.",
            image: Image2, // Use imported image
        },
        {
            name: "David Brown",
            review: "RatherApp powered us with a competent team to develop products for banking services. The team has been delivering results within budget and time, which is amazing.",
            image: Image3, // Use imported image
        },
    ];

    return (
        <div className="testimonials-container">
            <h2 className="testimonials-heading">What People Say</h2>
            <div className="testimonials-boxes">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-box">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="client-image"
                        />
                        <h3 className="client-name">{testimonial.name}</h3>
                        <p className="client-review">{testimonial.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
