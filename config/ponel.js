import React, { useState, useEffect } from 'react';

const Ponel = () => {
  const [ponel, setPonel] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/ponel');
        const data = await response.json();
        setPonel(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ponel">
      <h2>Ponel</h2>
      {ponel && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Ponel;