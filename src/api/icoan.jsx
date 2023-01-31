import React, { useState, useEffect } from 'react';

const Icoan = () => {
  const [icoan, setIcoan] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/icoan');
        const data = await response.json();
        setIcoan(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="icoan">
      <h2>Icoan</h2>
      {icoan && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Icoan;