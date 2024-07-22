# Metrics Dashboard

A web application to manage and visualize metrics using a Rails backend and a React frontend.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Docker
- Docker Compose
- Node.js (for local development)
- Ruby (for local development)

### Installation

1. **Clone the repository:**

   git clone <repository-url>
   cd metrics_app

2. **Build Docker containers and start the services::**

   docker-compose build
   docker-compose up


**Usage**

  **Access the Dashboard:**
   Open your web browser and navigate to http://localhost:3001. This will show the React frontend.

   **API Endpoints:**

      GET /api/metrics: Retrieve the list of metrics.
      POST /api/metrics: Add a new metric to the database.

   **Adding Metrics:**

      Use the "Add Metric" button on the dashboard to add new metrics. Metrics should be visible in the "Metrics List" and visualized in the "Metric Averages" chart.

**Troubleshooting**

   Metrics not updating: Ensure the backend is running and accessible at http://localhost:3000.
   
   Data not showing in the dashboard: Check the console for errors and ensure that the API endpoint returns the expected data format.
