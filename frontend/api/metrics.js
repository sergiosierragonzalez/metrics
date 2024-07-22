const API_URL = 'http://localhost:3000/api/metrics'; // URL del backend Rails

export async function fetchMetrics() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch metrics');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching metrics:', error);
    throw error;
  }
}

export async function postMetric(metric) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(metric),
    });

    if (!response.ok) {
      throw new Error('Failed to post metric');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error posting metric:', error);
    throw error;
  }
}
