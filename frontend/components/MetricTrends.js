import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { useMemo } from 'react';

// Registrar los elementos necesarios
ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const MetricTrends = ({ metrics }) => {
  const data = useMemo(() => {
    const labels = metrics.map(metric => new Date(metric.timestamp).toLocaleDateString());
    const values = metrics.map(metric => metric.value);

    return {
      labels,
      datasets: [
        {
          label: 'Metric Value',
          data: values,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 1,
          tension: 0.1, // Agregar un poco de suavizado a la línea
        },
      ],
    };
  }, [metrics]);

  return (
    <div>
      <h2>Metric Trends</h2>
      <Line data={data} />
    </div>
  );
};

export default MetricTrends;
