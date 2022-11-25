import React, { useState, useEffect } from 'react';

const Liem = () => {
  const [liem, setLiem] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/liem');
        const data = await response.json();
        setLiem(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="liem">
      <h2>Liem</h2>
      {liem && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Liem;