import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Service/Services';
import Contact from './components/Contact/Contact';
import Dashboard from './components/Home/Dashboard';
import Blog from './components/Blog/Blog';
import BlogMenu from './components/Blog/BlogMenu';
import YogaBloodPressure from './components/Blog/YogaBloodPressure';
import BreathworkBlog from './components/Blog/BreathworkBlog';
import YogaBlog from './components/Blog/YogaDiabatis';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogMenu />} />
            <Route path="/blog/:blogId" element={<Blog />} />
            <Route path="/blog/yoga-diabetes" element={<YogaBloodPressure />} />
            <Route path="/blog/breathwork-anxiety" element={<BreathworkBlog />} />
            <Route path="/blog/yoga-pressure" element={<YogaBlog />} />




            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
