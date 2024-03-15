import React, { useState, useEffect } from 'react';

const Kievonu = () => {
  const [kievonu, setKievonu] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/kievonu');
        const data = await response.json();
        setKievonu(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="kievonu">
      <h2>Kievonu</h2>
      {kievonu && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Kievonu;