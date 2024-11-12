import React from 'react';

const MovingText = () => {
  return (
    <div className="overflow-hidden w-full bg-gray-100 py-4">
      <marquee style={{ fontSize: '1.25rem', color: '#4c51bf', fontWeight: '600' }}>
        Transform your life one breath at a time. Join our yoga community today.
      </marquee>
    </div>
  );
};

export default MovingText;
