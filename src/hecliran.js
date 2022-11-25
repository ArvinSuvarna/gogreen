import React, { useState, useEffect } from 'react';

const Hecliran = () => {
  const [hecliran, setHecliran] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hecliran');
        const data = await response.json();
        setHecliran(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="hecliran">
      <h2>Hecliran</h2>
      {hecliran && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Hecliran;