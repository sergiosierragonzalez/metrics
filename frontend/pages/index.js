import { useEffect, useState } from 'react';
import { fetchMetrics, postMetric } from '../api/metrics';
import MetricForm from '../components/MetricForm';
import MetricList from '../components/MetricList';
import MetricAverages from '../components/MetricAverages';
import MetricTrends from '../components/MetricTrends';

export default function Home() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    async function loadMetrics() {
      try {
        const data = await fetchMetrics();
        setMetrics(data.metrics || []);
      } catch (error) {
        console.error('Error loading metrics:', error);
      }
    }

    loadMetrics();
  }, []);

  const handleAddMetric = async (newMetric) => {
    try {
      const data = await postMetric(newMetric);
      setMetrics((prevMetrics) => [...prevMetrics, data.metric]);
    } catch (error) {
      console.error('Error adding metric:', error);
    }
  };

  return (
    <div>
      <h1>Metrics Dashboard</h1>
      <MetricForm onAddMetric={handleAddMetric} />
      <MetricList metrics={metrics} />
      <MetricAverages metrics={metrics} />
      <MetricTrends metrics={metrics} />
    </div>
  );
}
