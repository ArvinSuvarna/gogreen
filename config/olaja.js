import React, { useState, useEffect } from 'react';

const Olaja = () => {
  const [olaja, setOlaja] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/olaja');
        const data = await response.json();
        setOlaja(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="olaja">
      <h2>Olaja</h2>
      {olaja && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Olaja;