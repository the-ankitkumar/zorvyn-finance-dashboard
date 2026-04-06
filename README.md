# Zorvyn Finance Dashboard

A modern personal finance management application built with React, Vite, and Tailwind CSS.

## Features

- **Dashboard:** Overview of balance, income, and expenses.
- **Dynamic Charting:** Visualize cash flow and spending breakdowns.
- **Transaction Management:** Search, filter, and manage your expenses.
- **Role-Based UI:** Toggle between Admin and Viewer modes.
- **Theming:** Seamless dark and light mode toggle.

## Deployment to Vercel

This project is ready to be deployed to Vercel.

### Steps to Deploy

1. **Push to GitHub:** Push your code to a GitHub repository.
2. **Import to Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard).
   - Click **Add New...** -> **Project**.
   - Import your GitHub repository.
3. **Deploy:** Click **Deploy**. Vercel will automatically detect the Vite project and build it.

## Client-Side Routing

The `vercel.json` file is included to handle client-side routing (rewrites), ensuring that refreshing the page on any route (like `/transactions` or `/insights`) works correctly.

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```
