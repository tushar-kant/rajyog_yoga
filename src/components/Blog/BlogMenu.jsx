import React from 'react';
import { Link } from 'react-router-dom';
import yoga1 from "../../img/Yoga/img11.jpeg";
import yoga2 from "../../img/Yoga/img12.jpeg";
import yoga3 from "../../img/Yoga/img13.jpeg";

// Sample blog data (could come from a database or API)
const blogs = [
  {
    id: 1,
    title: "How to Use Breathwork to Reduce Anxiety Instantly",
    description: "Breathwork is a powerful tool for managing anxiety, allowing you to calm your mind and body quickly. Here’s how to use simple breathwork techniques to reduce anxiety instantly.",
    image: yoga1,
    path: "/blog/breathwork-anxiety",
  },
  {
    id: 2,
    title: "10 Effective Yoga Poses for Lowering Blood Pressure",
    description: "Yoga, with its focus on relaxation, deep breathing, and mindful movement, can help lower blood pressure naturally. Discover these 10 yoga poses that can assist in reducing blood pressure and enhancing well-being.",
    image: yoga2,
    path: "/blog/yoga-pressure",
  },
  {
    id: 3,
    title: "Managing Diabetes Naturally with Yoga and Diet",
    description: "Learn about the benefits of managing diabetes through yoga and a balanced diet, with tips and techniques to incorporate into daily life for better health.",
    image: yoga3,
    path: "/blog/yoga-diabetes",
  },
];

function BlogMenu() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Wellness Insights Section */}
        <div className="bg-green-100 p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
            Wellness Insights for Better Living
          </h2>
          <p className="text-lg text-center text-gray-600">
            Explore our expert articles on managing lifestyle disorders, yoga techniques, meditation practices, and lifestyle tips to foster a healthy, balanced life.
          </p>
        </div>

        {/* Blogs Grid */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Blogs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link 
              to={blog.path} 
              key={blog.id} 
              className="block bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-gray-50"
            >
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {blog.description.length > 100 ? `${blog.description.substring(0, 100)}...` : blog.description}
                </p>
                <Link to={blog.path} className="text-green-600 text-sm font-semibold hover:underline">Read More</Link>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogMenu;
