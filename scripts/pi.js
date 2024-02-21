import React, { useState, useEffect } from 'react';

const Pi = () => {
  const [pi, setPi] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/pi');
        const data = await response.json();
        setPi(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pi">
      <h2>Pi</h2>
      {pi && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Pi;