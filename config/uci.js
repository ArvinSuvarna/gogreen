import React, { useState, useEffect } from 'react';

const Uci = () => {
  const [uci, setUci] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/uci');
        const data = await response.json();
        setUci(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="uci">
      <h2>Uci</h2>
      {uci && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Uci;