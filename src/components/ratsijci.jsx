import React, { useState, useEffect } from 'react';

const Ratsijci = () => {
  const [ratsijci, setRatsijci] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/ratsijci');
        const data = await response.json();
        setRatsijci(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ratsijci">
      <h2>Ratsijci</h2>
      {ratsijci && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Ratsijci;