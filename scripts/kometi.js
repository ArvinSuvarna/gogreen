import React, { useState, useEffect } from 'react';

const Kometi = () => {
  const [kometi, setKometi] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/kometi');
        const data = await response.json();
        setKometi(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="kometi">
      <h2>Kometi</h2>
      {kometi && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Kometi;