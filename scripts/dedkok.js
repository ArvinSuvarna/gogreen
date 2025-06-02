import React, { useState, useEffect } from 'react';

const Dedkok = () => {
  const [dedkok, setDedkok] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dedkok');
        const data = await response.json();
        setDedkok(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dedkok">
      <h2>Dedkok</h2>
      {dedkok && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Dedkok;