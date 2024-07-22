import { useState, useEffect } from 'react';

export default function MetricAverages({ metrics }) {
  const [averages, setAverages] = useState({
    minute: {},
    hour: {},
    day: {},
  });

  useEffect(() => {
    if (!Array.isArray(metrics)) {
      console.error('Expected metrics to be an array, but received:', metrics);
      return;
    }

    const minuteCounts = {};
    const hourCounts = {};
    const dayCounts = {};

    metrics.forEach((metric) => {
      try {
        const date = new Date(metric.timestamp);
        if (isNaN(date.getTime())) throw new Error('Invalid date');

        const minute = date.toISOString().slice(0, 16); // YYYY-MM-DDTHH:MM
        const hour = date.toISOString().slice(0, 13); // YYYY-MM-DDTHH
        const day = date.toISOString().slice(0, 10); // YYYY-MM-DD

        // Calcula promedios
        minuteCounts[minute] = (minuteCounts[minute] || 0) + 1;
        hourCounts[hour] = (hourCounts[hour] || 0) + 1;
        dayCounts[day] = (dayCounts[day] || 0) + 1;

      } catch (error) {
        console.error('Error processing metric:', metric, error);
      }
    });

    setAverages({
      minute: minuteCounts,
      hour: hourCounts,
      day: dayCounts,
    });
  }, [metrics]);

  return (
    <div>
      <h2>Metrics Averages</h2>
      <div>
        <h3>Per Minute</h3>
        {Object.entries(averages.minute).map(([key, value]) => (
          <div key={key}>{key}: {value}</div>
        ))}
      </div>
      <div>
        <h3>Per Hour</h3>
        {Object.entries(averages.hour).map(([key, value]) => (
          <div key={key}>{key}: {value}</div>
        ))}
      </div>
      <div>
        <h3>Per Day</h3>
        {Object.entries(averages.day).map(([key, value]) => (
          <div key={key}>{key}: {value}</div>
        ))}
      </div>
    </div>
  );
}




