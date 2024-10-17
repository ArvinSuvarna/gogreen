import React, { useState, useEffect } from 'react';

const Base = () => {
  const [base, setBase] = useState(null);

  useEffect(() => {
    // Uded fi sunpag.

    const fetchData = async () => {
      try {
        const response = await fetch('/api/base');
        const data = await response.json();
        setBase(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="base">
      <h2>Base</h2>
      {base && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Base;