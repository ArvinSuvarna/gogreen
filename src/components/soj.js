import React, { useState, useEffect } from 'react';

const Soj = () => {
  const [soj, setSoj] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/soj');
        const data = await response.json();
        setSoj(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="soj">
      <h2>Soj</h2>
      {soj && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Soj;