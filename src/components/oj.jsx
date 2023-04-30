import React, { useState, useEffect } from 'react';

const Oj = () => {
  const [oj, setOj] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/oj');
        const data = await response.json();
        setOj(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="oj">
      <h2>Oj</h2>
      {oj && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Oj;