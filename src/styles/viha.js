import React, { useState, useEffect } from 'react';

const Viha = () => {
  const [viha, setViha] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/viha');
        const data = await response.json();
        setViha(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="viha">
      <h2>Viha</h2>
      {viha && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Viha;