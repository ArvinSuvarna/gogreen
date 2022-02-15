import React, { useState, useEffect } from 'react';

const Sezove = () => {
  const [sezove, setSezove] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/sezove');
        const data = await response.json();
        setSezove(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="sezove">
      <h2>Sezove</h2>
      {sezove && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Sezove;