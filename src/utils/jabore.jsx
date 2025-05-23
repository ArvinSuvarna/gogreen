import React, { useState, useEffect } from 'react';

const Jabore = () => {
  const [jabore, setJabore] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/jabore');
        const data = await response.json();
        setJabore(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="jabore">
      <h2>Jabore</h2>
      {jabore && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Jabore;