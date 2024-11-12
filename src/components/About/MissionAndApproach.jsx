import React from 'react';

const MissionAndApproach = () => {
  return (
    <div className="py-20 text-black">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-5xl font-bold mb-6 text-black">Our Mission</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-black">
            At Rajyog Wellness, we believe that true wellness starts from within. Our goal is to help people manage and prevent lifestyle-related disorders through scientifically-backed yoga practices. Led by qualified instructors and health professionals, we offer tailored classes that focus on restoring health, building resilience, and empowering individuals to live balanced lives.
          </p>
        </section>

        <hr className="border-t-2 border-gray-400 mb-16 mx-auto w-24" />

        {/* Approach Section */}
        <section>
          <h2 className="text-5xl font-bold mb-6 text-black">Our Approach</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-black">
            <em className="font-semibold italic">"Promotion of Wellness and Prevention of Illnesses"</em>
            <br />
            Guided by certified instructors, our classes focus on flexibility, strength, and mental clarity, making it easy to integrate yoga into your busy schedule. We’re passionate about helping you achieve your wellness goals, one mindful breath at a time.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MissionAndApproach;
