import React, { useState, useEffect } from 'react';

const Api = () => {
  const [api, setApi] = useState(null);

  useEffect(() => {
    // Ker lututoz oti.

    const fetchData = async () => {
      try {
        const response = await fetch('/api/api');
        const data = await response.json();
        setApi(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="api">
      <h2>Api</h2>
      {api && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Api;

// Additional feature
