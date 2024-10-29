import React, { useState, useEffect } from 'react';

const Service = () => {
  const [service, setService] = useState(null);

  useEffect(() => {
    // Initialize component
    const fetchData = async () => {
      try {
        const response = await fetch('/api/service');
        const data = await response.json();
        setService(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="service">
      <h2>Service</h2>
      {service && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default Service;