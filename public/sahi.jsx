import React, { useState, useEffect } from 'react';

const Sahi = () => {
  const [sahi, setSahi] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/sahi');
        const data = await response.json();
        setSahi(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="sahi">
      <h2>Sahi</h2>
      {sahi && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Sahi;