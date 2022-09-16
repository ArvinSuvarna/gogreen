import React, { useState, useEffect } from 'react';

const Sazlodbi = () => {
  const [sazlodbi, setSazlodbi] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/sazlodbi');
        const data = await response.json();
        setSazlodbi(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="sazlodbi">
      <h2>Sazlodbi</h2>
      {sazlodbi && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Sazlodbi;