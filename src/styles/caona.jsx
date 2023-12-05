import React, { useState, useEffect } from 'react';

const Caona = () => {
  const [caona, setCaona] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/caona');
        const data = await response.json();
        setCaona(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="caona">
      <h2>Caona</h2>
      {caona && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Caona;