import React, { useState, useEffect } from 'react';

const Ajor = () => {
  const [ajor, setAjor] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/ajor');
        const data = await response.json();
        setAjor(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ajor">
      <h2>Ajor</h2>
      {ajor && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Ajor;