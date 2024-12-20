import React, { useState, useEffect } from 'react';

const Ifi = () => {
  const [ifi, setIfi] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/ifi');
        const data = await response.json();
        setIfi(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ifi">
      <h2>Ifi</h2>
      {ifi && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Ifi;