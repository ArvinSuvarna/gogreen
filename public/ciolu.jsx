import React, { useState, useEffect } from 'react';

const Ciolu = () => {
  const [ciolu, setCiolu] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/ciolu');
        const data = await response.json();
        setCiolu(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ciolu">
      <h2>Ciolu</h2>
      {ciolu && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Ciolu;