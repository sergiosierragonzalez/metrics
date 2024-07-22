import { useState } from 'react';

export default function MetricForm({ onAddMetric }) {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [timestamp, setTimestamp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMetric = {
      name,
      value: parseFloat(value),
      timestamp,
    };
    onAddMetric(newMetric);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Value"
        required
      />
      <input
        type="datetime-local"
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
        required
      />
      <button type="submit">Add Metric</button>
    </form>
  );
}
