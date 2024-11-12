import React, { useState, useEffect } from 'react';
import ChakraIcon from '../../img/chakra4.svg_-768x768.png';

const YogaBenefits = () => {
  const points = [
    "Physical Health",
    "Mental Well-being",
    "Neuroscience",
    "Immune Function",
    "Chronic Conditions",
    "Behavioral Change",
    "Corporate Wellness",
    "Preventive Health"
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <h2 style={styles.header}>Yoga and Modern Science</h2>

      <div style={styles.container}>
        {/* Central round image */}
        <div style={styles.centerImageContainer}>
          <img 
            src={ChakraIcon}
            alt="Yoga Icon" 
            style={styles.centerImage}
          />
        </div>

        {/* Surrounding points with evenly spaced layout */}
        {points.map((point, index) => {
          const angle = (index / points.length) * 2 * Math.PI;
          const distance = isMobile ? 120 : 160; // Adjust distance based on screen size
          const x = distance * Math.cos(angle);
          const y = distance * Math.sin(angle);
          return (
            <div
              key={index}
              style={{
                ...styles.point,
                transform: `translate(${x}px, ${y}px)`
              }}
            >
              <div style={styles.pointContent}>
                <div style={styles.pointNumber}>{index + 1}</div>
                <p style={styles.pointText}>{point}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

// Inline CSS Styles
const styles = {
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vw',
    maxWidth: '500px',
    maxHeight: '500px',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  },
  centerImageContainer: {
    position: 'absolute',
    zIndex: 1,
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: '#eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  point: {
    position: 'absolute',
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out',
  },
  pointContent: {
    width: '70px',
    height: '70px',
    padding: '10px',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointNumber: {
    fontSize: '1.4em',
    fontWeight: 'bold',
    color: '#4c51bf',
    marginBottom: '4px',
  },
  pointText: {
    fontSize: '0.9em',
    color: '#4c51bf',
    textAlign: 'center',
    fontWeight: '600',
  },

  // Media query for smaller screens
  '@media (max-width: 600px)': {
    container: {
      width: '80vw',
      height: '80vw',
    },
    centerImageContainer: {
      width: '80px',
      height: '80px',
    },
    point: {
      width: '60px',
      height: '60px',
    },
    pointContent: {
      width: '55px',
      height: '55px',
    },
    pointNumber: {
      fontSize: '1.2em',
    },
    pointText: {
      fontSize: '0.8em',
    },
  }
};

export default YogaBenefits;
