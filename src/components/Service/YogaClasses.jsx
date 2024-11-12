import React from 'react';

const classesData = [
  { id: 1, title: "Yoga for Lifestyle Disorders", description: "Manage conditions like arthritis, asthma, sciatica, backache, and more." },
  { id: 2, title: "Yoga for Stress & Anxiety", description: "Breathing techniques and restorative poses to reduce stress and anxiety." },
  { id: 3, title: "Yoga for Hypertension", description: "Gentle practices that regulate blood pressure and promote cardiovascular health." },
  { id: 4, title: "Diabetes Care with Yoga", description: "Sequences to improve circulation and stabilize blood sugar levels." },
  { id: 5, title: "Yoga for Weight Management", description: "Balanced yoga to boost metabolism and build strength." },
  { id: 6, title: "Yoga for Thyroid Health", description: "Yoga to support thyroid function and hormonal balance naturally." },
  { id: 7, title: "Yoga for Kids", description: "Fun poses and mindfulness for kids to enhance focus and emotional well-being." },
  { id: 8, title: "Yoga for PCOS/PCOD", description: "Manage symptoms of PCOS/PCOD with hormone balancing poses." },
  { id: 9, title: "Yoga for Pre-Natal and Post-Natal", description: "Support during pregnancy and postpartum with gentle yoga." },
  { id: 10, title: "Yoga for Athletes", description: "Boost flexibility and recovery with yoga for athletes." },
  { id: 11, title: "Yoga for Students", description: "Yoga to improve concentration and reduce stress for students." },
  { id: 12, title: "Yoga for Seniors", description: "Yoga to maintain mobility and well-being for seniors." },
  { id: 13, title: "Yoga for Eyes", description: "Simple exercises for eye health and reducing strain." },
  { id: 14, title: "Yoga for Stamina", description: "Increase energy, stamina, and focus with yoga practices." },
];

const YogaClasses = () => {
  return (
    <div className="py-16 bg-gray-50 text-gray-800">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Yoga Classes & Programs</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {classesData.map((program) => (
          <div
            key={program.id}
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 flex items-start space-x-4"
          >
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                {program.id}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600">{program.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{program.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a 
          href="/contact" 
          className="bg-indigo-600 text-white py-3 px-8 rounded-full font-semibold text-xl transition duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
           Book Now
        </a>
      </div>
    </div>
  );
};

export default YogaClasses;
