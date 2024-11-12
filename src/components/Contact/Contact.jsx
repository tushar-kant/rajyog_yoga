import React from 'react';

function Contact() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Contact Us Title */}
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Contact Us</h2>

        {/* Location Section with Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Location Text */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Location</h3>
            <p className="text-gray-600 mb-4">
              I conduct personal yoga sessions at clients' locations in New Delhi. My schedule is flexible, offering morning, afternoon, and evening sessions to accommodate varied preferences.
            </p>
            <p className="text-gray-600">
              Feel free to reach out to schedule a session or ask any questions about my services.
            </p>
          </div>

          {/* Google Map Embed */}
          <div className="w-full h-64 md:h-96">
            <iframe
              className="w-full h-full rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125435.83574876869!2d77.01200925870338!3d28.64480094337008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2af01472b8d%3A0xd2335b1b38b2f9a4!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1636541023933!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
          <p className="text-gray-600 mb-4">
            Have any questions or want to schedule a session? Feel free to reach out using the contact information below. I'm available to assist with any inquiries you may have.
          </p>
          <p className="text-gray-600 mb-4 font-medium">
            Mobile No: <span className="text-indigo-600">+91 8076469330</span>
          </p>
          <p className="text-gray-600 mb-6">
            You can call or message me directly. I’ll be happy to answer your questions or schedule a session.
          </p>

          {/* Call Now Button */}
          <div className="text-center">
            <a
              href="tel:+918076469330"
              className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-full text-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h3>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="col-span-1">
                <label htmlFor="name" className="text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-4 border border-gray-300 rounded-lg mt-2"
                  placeholder="Enter your name"
                />
              </div>

              <div className="col-span-1">
                <label htmlFor="email" className="text-gray-700 font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-4 border border-gray-300 rounded-lg mt-2"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="text-gray-700 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full p-4 border border-gray-300 rounded-lg mt-2"
                rows="4"
                placeholder="Type your message"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-6 rounded-full text-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
