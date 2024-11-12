// YogaInfo.js
import React from "react";
import { FaRegAddressCard, FaPhoneAlt, FaCalendarAlt, FaUser } from "react-icons/fa"; // Icons

function YogaInfo() {
  return (
    <section className="bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300 py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-purple-700 mb-12">Transform Your Life with Yoga</h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Client Focus */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <FaUser className="text-purple-600 text-3xl" />
              <h3 className="text-2xl font-semibold text-purple-600">Client Focus</h3>
            </div>
            <p className="text-gray-700 text-lg">
              I cater to students of all ages and fitness levels, providing personalized attention to ensure everyone receives the benefits of yoga practice. My classes are designed to relieve stress, improve flexibility, build strength, and promote overall well-being.
            </p>
          </div>

          {/* Location and Availability */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <FaRegAddressCard className="text-purple-600 text-3xl" />
              <h3 className="text-2xl font-semibold text-purple-600">Location and Availability</h3>
            </div>
            <p className="text-gray-700 text-lg">
              I conduct personal sessions at clients' locations in New Delhi. My schedule is flexible, offering morning, afternoon, and evening sessions to accommodate varied preferences.
            </p>
          </div>

          {/* Contact Me */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <FaPhoneAlt className="text-purple-600 text-3xl" />
              <h3 className="text-2xl font-semibold text-purple-600">Contact Me</h3>
            </div>
            <p className="text-gray-700 text-lg mb-4">
              Feel free to reach out for more information or to schedule a session. Let's embark on this transformative journey to better health and inner peace together.
            </p>
            <p className="text-lg font-semibold text-purple-700">Mobile no. +91 8076469330</p>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default YogaInfo;
