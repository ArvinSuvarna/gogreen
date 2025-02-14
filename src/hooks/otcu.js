import React, { useState, useEffect } from 'react';

const Otcu = () => {
  const [otcu, setOtcu] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/otcu');
        const data = await response.json();
        setOtcu(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="otcu">
      <h2>Otcu</h2>
      {otcu && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Otcu;