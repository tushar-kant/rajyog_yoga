import React from "react";

// Import individual images
import img1 from "../../img/Yoga/img1.jpeg";
import img2 from "../../img/Yoga/img2.jpeg";
import img3 from "../../img/Yoga/img3.jpeg";
import img4 from "../../img/Yoga/img4.jpeg";
import img5 from "../../img/Yoga/img5.jpeg";
import img6 from "../../img/Yoga/img6.jpeg";
import img7 from "../../img/Yoga/img7.jpeg";
import img8 from "../../img/Yoga/img8.jpeg";

function WhyRajyog() {
  const sectionStyle = {
    padding: "30px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "15px",
    fontWeight: "bold",
    color: "#333",
  };

  const descriptionStyle = {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "30px",
  };

  const galleryStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gap: "20px",
    justifyItems: "center",
  };

  const imageContainerStyle = {
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: "10px",
    transition: "transform 0.3s ease-in-out",
  };

  const imageHoverStyle = {
    transform: "scale(1.05)",
  };

  // Create an array of the images for easier mapping
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div style={sectionStyle}>
      <h2 style={headingStyle}>Why Rajyog Wellness?</h2>
      <p style={descriptionStyle}>
        Discover the unique benefits of practicing wellness through yoga and how Rajyog Wellness offers a holistic approach to health.
      </p>
      <div style={galleryStyle}>
        {images.map((image, index) => (
          <div key={index} style={imageContainerStyle}>
            <img
              src={image}
              alt={`Wellness ${index + 1}`}
              style={imageStyle}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyRajyog;
