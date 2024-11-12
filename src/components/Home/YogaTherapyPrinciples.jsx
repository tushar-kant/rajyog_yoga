import React, { useState } from 'react';

const YogaTherapyPrinciples = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const principles = [
    {
      title: "Purification of ‘nadis’",
      description: "Removing the obstructing toxins from the body, leading to better flow of energy.",
    },
    {
      title: "Reconditioning of the neuro-muscular and glandular system",
      description: "Restoring adequate immunity and improving overall health and vitality.",
    },
    {
      title: "Cultivation of proper psychological attitude",
      description: "Increasing the ability to cope with stress, enhancing mental resilience.",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % principles.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + principles.length) % principles.length);
  };

  return (
    <div className="p-8 rounded-lg w-full mx-auto mt-12 bg-gray-50">
      <h2 className="text-4xl font-semibold text-center text-green-700 mb-8">Principles of Yoga Therapy</h2>

      <div className="relative">
        {/* Container for the slides */}
        <div className="overflow-hidden rounded-lg shadow-sm bg-white">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {principles.map((principle, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full px-8 py-6 text-center"
              >
                <h3 className="text-3xl font-semibold text-green-700 mb-4">{principle.title}</h3>
                <p className="text-lg text-gray-700">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
          <button
            onClick={handlePrev}
            className="bg-gray-200 text-black p-3 rounded-full shadow-md hover:bg-purple-400 transition"
          >
            &lt;
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
          <button
            onClick={handleNext}
            className="bg-gray-200 text-black p-3 rounded-full shadow-md hover:bg-purple-400 transition"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-700 text-lg leading-relaxed">
        <h6>
          It is wiser to wear good quality shoes rather than remove nails and thorns from the road. Yoga does the same
          thing. Every living being is equipped with a natural healing power. Yoga helps recuperate this strength,
          eliminating disturbing factors from the gross to the subtler levels. Yoga supports and enhances this healing
          power by maintaining equilibrium, promoting mental relaxation, and building physical and emotional strength.
        </h6>
      </div>
    </div>
  );
};

export default YogaTherapyPrinciples;
