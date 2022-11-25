import React, { useState, useEffect } from 'react';

const He = () => {
  const [he, setHe] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/he');
        const data = await response.json();
        setHe(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="he">
      <h2>He</h2>
      {he && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default He;