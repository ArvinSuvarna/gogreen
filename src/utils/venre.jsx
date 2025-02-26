import React, { useState, useEffect } from 'react';

const Venre = () => {
  const [venre, setVenre] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/venre');
        const data = await response.json();
        setVenre(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="venre">
      <h2>Venre</h2>
      {venre && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Venre;