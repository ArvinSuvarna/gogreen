import React, { useState, useEffect } from 'react';

const Ehelesap = () => {
  const [ehelesap, setEhelesap] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/ehelesap');
        const data = await response.json();
        setEhelesap(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ehelesap">
      <h2>Ehelesap</h2>
      {ehelesap && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Ehelesap;