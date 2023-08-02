import React, { useState, useEffect } from 'react';

const Sevkec = () => {
  const [sevkec, setSevkec] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/sevkec');
        const data = await response.json();
        setSevkec(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="sevkec">
      <h2>Sevkec</h2>
      {sevkec && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Sevkec;