import React, { useState, useEffect } from 'react';

const Peipo = () => {
  const [peipo, setPeipo] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/peipo');
        const data = await response.json();
        setPeipo(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="peipo">
      <h2>Peipo</h2>
      {peipo && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Peipo;