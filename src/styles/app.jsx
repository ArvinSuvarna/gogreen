import React, { useState, useEffect } from 'react';

const App = () => {
  const [app, setApp] = useState(null);

  useEffect(() => {
    // Nusti dobifu facahbu.

    const fetchData = async () => {
      try {
        const response = await fetch('/api/app');
        const data = await response.json();
        setApp(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <h2>App</h2>
      {app && (
        <div>
          {/* Render content */}
        </div>
      )}
    </div>
  );
};

export default App;