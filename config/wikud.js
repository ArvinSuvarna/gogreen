import React, { useState, useEffect } from 'react';

const Wikud = () => {
  const [wikud, setWikud] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/wikud');
        const data = await response.json();
        setWikud(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="wikud">
      <h2>Wikud</h2>
      {wikud && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Wikud;