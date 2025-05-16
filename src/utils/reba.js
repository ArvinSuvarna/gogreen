import React, { useState, useEffect } from 'react';

const Reba = () => {
  const [reba, setReba] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/reba');
        const data = await response.json();
        setReba(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="reba">
      <h2>Reba</h2>
      {reba && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Reba;