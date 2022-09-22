import React, { useState, useEffect } from 'react';

const Onaruvo = () => {
  const [onaruvo, setOnaruvo] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/onaruvo');
        const data = await response.json();
        setOnaruvo(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="onaruvo">
      <h2>Onaruvo</h2>
      {onaruvo && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Onaruvo;