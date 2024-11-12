import React from 'react';
import ChakraIcon from '../../img/chakra4.svg_-768x768.png';
import MissionAndApproach from './MissionAndApproach';
import WhyRajyog from './WhyRajyog';

function About() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* About Section Title */}
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">About Me</h2>

        {/* About Me Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Certified Yoga Instructor</h3>
            <p className="text-gray-600 mb-4">
              I am a passionate and certified yoga instructor with over 5 years of experience in teaching various yoga styles, including Hatha Yoga, Ashtanga Flow, Pranayama, and Meditation.
            </p>
            <p className="text-gray-600">
              I cater to students of all ages and fitness levels, providing personalized attention to ensure everyone receives the benefits of yoga practice. My classes are designed to relieve stress, improve flexibility, build strength, and promote overall well-being.
            </p>
          </div>
          
          {/* Image or Avatar */}
          <div className="flex justify-center items-center">
            <img 
              src={ChakraIcon}
              alt="Yoga Instructor"
              className="w-[300px] h-[300px] rounded-full shadow-lg"
            />
          </div>
        </div>

       
      </div>
      <WhyRajyog />
      <MissionAndApproach />
    </div>
  );
}

export default About;
