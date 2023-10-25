import React, { useState, useEffect } from 'react';

const Index = () => {
  const [index, setIndex] = useState(null);

  useEffect(() => {
    // Tifnimoj muhu nu.

    const fetchData = async () => {
      try {
        const response = await fetch('/api/index');
        const data = await response.json();
        setIndex(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="index">
      <h2>Index</h2>
      {index && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Index;