import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Ananya Patel",
    testimonial: "Yoga has been a game-changer for me. It has helped me manage my stress and find peace in everyday life.",
    image: "https://via.placeholder.com/80",
  },
  {
    id: 2,
    name: "Ravi Kumar",
    testimonial: "Through yoga, I’ve experienced significant improvements in my flexibility and mental clarity. It's truly life-enhancing.",
    image: "https://via.placeholder.com/80",
  },
  {
    id: 3,
    name: "Priya Sharma",
    testimonial: "The power of yoga lies in its simplicity. It's helped me reconnect with myself and find balance during tough times.",
    image: "https://via.placeholder.com/80",
  },
  {
    id: 4,
    name: "Vikram Singh",
    testimonial: "Yoga has transformed my physical and mental health. It keeps me strong, grounded, and calm throughout the day.",
    image: "https://via.placeholder.com/80",
  },
  {
    id: 5,
    name: "Neha Reddy",
    testimonial: "My yoga practice has brought me peace, improved my posture, and helped me sleep better. I can't recommend it enough!",
    image: "https://via.placeholder.com/80",
  },
];


const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div style={{ maxWidth: '1100px', margin: 'auto', textAlign: 'center', padding: '20px', borderRadius: '15px', height: '300px' }}>
      <h2 style={{ fontSize: '2em', marginBottom: '0.5em', color: '#333' }}>Our Success Story​
      </h2>
      <p style={{ fontSize: '1.2em', color: '#777', marginBottom: '1.5em' }}>Real Stories of Transformation</p>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '20px' }}>
              <img src={testimonial.image} alt={testimonial.name} style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
            </div>
            <div>
              <p style={{ fontSize: '1.1em', margin: '10px 0', fontStyle: 'italic', color: '#555', lineHeight: '1.5' }}>"{testimonial.testimonial}"</p>
              <h4 style={{ fontWeight: 'bold', color: '#333', fontSize: '1.2em' }}>- {testimonial.name}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
