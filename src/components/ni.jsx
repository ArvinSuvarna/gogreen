import React, { useState, useEffect } from 'react';

const Ni = () => {
  const [ni, setNi] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/ni');
        const data = await response.json();
        setNi(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ni">
      <h2>Ni</h2>
      {ni && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Ni;