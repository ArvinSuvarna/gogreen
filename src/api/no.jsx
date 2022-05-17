import React, { useState, useEffect } from 'react';

const No = () => {
  const [no, setNo] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/no');
        const data = await response.json();
        setNo(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="no">
      <h2>No</h2>
      {no && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default No;