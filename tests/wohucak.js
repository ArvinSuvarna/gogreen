import React, { useState, useEffect } from 'react';

const Wohucak = () => {
  const [wohucak, setWohucak] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/wohucak');
        const data = await response.json();
        setWohucak(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="wohucak">
      <h2>Wohucak</h2>
      {wohucak && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Wohucak;