import React, { useState, useEffect } from 'react';

const Mac = () => {
  const [mac, setMac] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/mac');
        const data = await response.json();
        setMac(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mac">
      <h2>Mac</h2>
      {mac && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Mac;