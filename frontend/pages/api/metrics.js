// frontend/pages/api/metrics.js
export default async function handler(req, res) {
  const API_URL = 'http://localhost:3000/api/metrics'; // Backend API URL

  if (req.method === 'GET') {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch metrics' });
    }
  } else if (req.method === 'POST') {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
      });

      if (response.ok) {
        const data = await response.json();
        res.status(201).json(data);
      } else {
        const errorData = await response.json();
        res.status(response.status).json(errorData);
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to post metric' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
