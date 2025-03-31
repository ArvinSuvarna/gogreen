import React, { useState, useEffect } from 'react';

const Como = () => {
  const [como, setComo] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/como');
        const data = await response.json();
        setComo(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="como">
      <h2>Como</h2>
      {como && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Como;