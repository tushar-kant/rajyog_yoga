import React from 'react';
import YogaClasses from './YogaClasses';

// The JSON data
const servicesData = {
  "services": [
    {
      "title": "Therapeutic Yoga",
      "description": "Therapeutic yoga combines traditional yoga practices with modern medical and psychological insights to support physical and mental health.",
      "highlights": [
        "Supports physical and mental health",
        "Helps with chronic pain, stress, anxiety",
        "Focus on recovery, relaxation, and well-being"
      ],
      "color": "text-green-700"
    },
    {
      "title": "Hatha Yoga",
      "description": "A gentle style that focuses on basic poses, breathing exercises, and alignment. Ideal for beginners, Hatha provides a good foundation and promotes relaxation, balance, and flexibility.",
      "highlights": [
        "Good foundation for beginners",
        "Promotes relaxation and balance",
        "Improves flexibility"
      ],
      "color": "text-blue-600"
    },
    {
      "title": "Vinyasa Yoga",
      "description": "A dynamic, flowing style where poses are linked together in a sequence, synchronized with breath. Vinyasa builds strength, endurance, and flexibility and is known for its energizing effect.",
      "highlights": [
        "Dynamic and flowing",
        "Builds strength and endurance",
        "Energizing and flexibility enhancing"
      ],
      "color": "text-purple-600"
    },
    {
      "title": "Ashtanga Yoga",
      "description": "A rigorous style following a specific sequence of poses performed in the same order each time. Ashtanga is physically demanding, promoting strength, stamina, and discipline.",
      "highlights": [
        "Rigorous and physically demanding",
        "Promotes strength and stamina",
        "Encourages discipline"
      ],
      "color": "text-indigo-600"
    },
    {
      "title": "Kundalini Yoga",
      "description": "Combines physical postures, breathing techniques, and meditation to awaken and release energy (kundalini) from the spine. Kundalini is deeply spiritual and aimed at increasing self-awareness.",
      "highlights": [
        "Awakens and releases kundalini energy",
        "Combines postures, breathing, and meditation",
        "Increases self-awareness"
      ],
      "color": "text-yellow-600"
    },
    {
      "title": "Yin Yoga",
      "description": "A slow-paced style with long-held poses targeting connective tissues. Yin yoga enhances flexibility, circulation, and joint mobility while promoting relaxation and mindfulness.",
      "highlights": [
        "Long-held poses for connective tissues",
        "Enhances flexibility and circulation",
        "Promotes relaxation and mindfulness"
      ],
      "color": "text-teal-600"
    },
    {
      "title": "Restorative Yoga",
      "description": "A relaxing practice using props to support poses, allowing for deep relaxation. Restorative yoga is gentle and helps relieve stress, anxiety, and fatigue.",
      "highlights": [
        "Gentle and relaxing",
        "Helps relieve stress and anxiety",
        "Supports deep relaxation"
      ],
      "color": "text-pink-600"
    },
    {
      "title": "Power Yoga",
      "description": "A vigorous, fitness-based style inspired by Ashtanga. Power yoga builds strength, flexibility, and cardiovascular endurance, making it ideal for those looking for a high-energy workout.",
      "highlights": [
        "Fitness-based and vigorous",
        "Builds strength and flexibility",
        "Great for cardiovascular endurance"
      ],
      "color": "text-red-600"
    },
    {
      "title": "Rajyoga",
      "description": "Rajyoga, often referred to as the 'Royal Path' or 'King of Yogas,' is a form of yoga focused on attaining mental clarity, self-mastery, and spiritual awakening. Unlike more physical yoga practices, Rajyoga emphasizes meditation and mental discipline over physical postures. ",
      "highlights": [
        "Focuses on mental clarity and self-mastery",
        "Emphasizes meditation and mental discipline",
        "Aims for self-realization and unity with the divine"
      ],
      "color": "text-orange-600"
    }
  ]
};

function Services() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
      <YogaClasses />

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Yoga Expertise</h2>

        {/* Grid Layout for Three Cards per Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className={`text-xl font-semibold ${service.color} mb-4`}>{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="list-disc pl-5 text-gray-600">
                {service.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Services;
