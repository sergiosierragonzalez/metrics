import React, { useEffect, useState } from 'react';

const MetricList = () => {
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/metrics');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched metrics:', data); // Verifica la estructura de los datos aquí
        if (data && Array.isArray(data.metrics)) {
          setMetrics(data.metrics);
        } else {
          console.error('Invalid data structure:', data);
          setMetrics([]); // Establece una lista vacía si los datos son inválidos
        }
      } catch (error) {
        console.error('Error fetching metrics:', error);
        setError(error.message);
        setMetrics([]); // Establece una lista vacía en caso de error
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Metrics List</h2>
      <ul>
        {metrics.length > 0 ? (
          metrics.map((metric) => (
            <li key={metric.id}>
              {metric.name}: {metric.value} at {new Date(metric.timestamp).toLocaleString()}
            </li>
          ))
        ) : (
          <li>No metrics available.</li>
        )}
      </ul>
    </div>
  );
};

export default MetricList;
