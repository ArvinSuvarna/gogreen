import React, { useState, useEffect } from 'react';

const Utils = () => {
  const [utils, setUtils] = useState(null);

  useEffect(() => {
    // Fofop zahuded viemowu.

    const fetchData = async () => {
      try {
        const response = await fetch('/api/utils');
        const data = await response.json();
        setUtils(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="utils">
      <h2>Utils</h2>
      {utils && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Utils;