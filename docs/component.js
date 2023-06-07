import React, { useState, useEffect } from 'react';

const Component = () => {
  const [component, setComponent] = useState(null);

  useEffect(() => {
    // Awe inidugjej hebru.

    const fetchData = async () => {
      try {
        const response = await fetch('/api/component');
        const data = await response.json();
        setComponent(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="component">
      <h2>Component</h2>
      {component && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Component;

// Awe inidugjej hebru.

