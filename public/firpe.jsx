import React, { useState, useEffect } from 'react';

const Firpe = () => {
  const [firpe, setFirpe] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/firpe');
        const data = await response.json();
        setFirpe(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="firpe">
      <h2>Firpe</h2>
      {firpe && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Firpe;