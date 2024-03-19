import React, { useState, useEffect } from 'react';

const Getowwe = () => {
  const [getowwe, setGetowwe] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getowwe');
        const data = await response.json();
        setGetowwe(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="getowwe">
      <h2>Getowwe</h2>
      {getowwe && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Getowwe;