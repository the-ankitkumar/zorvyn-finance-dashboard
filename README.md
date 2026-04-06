# Zorvyn Finance Dashboard

A modern personal finance management application built with React, Vite, and Tailwind CSS.

**Live Demo:** [zorvynfintechfinancedashboard.netlify.app](https://zorvynfintechfinancedashboard.netlify.app/)

## Features

- **Dashboard:** Overview of balance, income, and expenses.
- **Dynamic Charting:** Visualize cash flow and spending breakdowns.
- **Transaction Management:** Search, filter, and manage your expenses.
- **Role-Based UI:** Toggle between Admin and Viewer modes.
- **Theming:** Seamless dark and light mode toggle.

## Deployment to Netlify

This project is deployed and hosted on Netlify.

### Steps to Deploy

1. **Push to GitHub:** Push your code to a GitHub repository.
2. **Import to Netlify:**
   - Go to [Netlify Dashboard](https://app.netlify.com/).
   - Click **Add new site** -> **Import an existing project**.
   - Import your GitHub repository.
3. **Deploy:** Click **Deploy site**. Netlify will automatically detect the Vite project and build it.

## Client-Side Routing

A `public/_redirects` file is included to handle client-side routing, ensuring that refreshing the page on any route (like `/transactions` or `/insights`) works correctly on Netlify.

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```
