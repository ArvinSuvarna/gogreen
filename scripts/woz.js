import React, { useState, useEffect } from 'react';

const Woz = () => {
  const [woz, setWoz] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/woz');
        const data = await response.json();
        setWoz(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="woz">
      <h2>Woz</h2>
      {woz && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Woz;