import React, { useState, useEffect } from 'react';

const Paok = () => {
  const [paok, setPaok] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/paok');
        const data = await response.json();
        setPaok(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="paok">
      <h2>Paok</h2>
      {paok && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Paok;