import React, { useState, useEffect } from 'react';

const Jocla = () => {
  const [jocla, setJocla] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/jocla');
        const data = await response.json();
        setJocla(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="jocla">
      <h2>Jocla</h2>
      {jocla && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Jocla;