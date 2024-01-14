import React, { useState, useEffect } from 'react';

const Gipvit = () => {
  const [gipvit, setGipvit] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/gipvit');
        const data = await response.json();
        setGipvit(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="gipvit">
      <h2>Gipvit</h2>
      {gipvit && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Gipvit;