import React, { useState, useEffect } from 'react';

const Hi = () => {
  const [hi, setHi] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hi');
        const data = await response.json();
        setHi(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="hi">
      <h2>Hi</h2>
      {hi && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Hi;