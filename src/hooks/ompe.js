import React, { useState, useEffect } from 'react';

const Ompe = () => {
  const [ompe, setOmpe] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/ompe');
        const data = await response.json();
        setOmpe(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ompe">
      <h2>Ompe</h2>
      {ompe && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Ompe;