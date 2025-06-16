import React, { useState, useEffect } from 'react';

const Uhoun = () => {
  const [uhoun, setUhoun] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/uhoun');
        const data = await response.json();
        setUhoun(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="uhoun">
      <h2>Uhoun</h2>
      {uhoun && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Uhoun;