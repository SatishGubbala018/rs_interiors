# WPVC Project — PVC & WPC Cupboards Demo

This repository contains a minimal full-stack demo (Express API backend + Vite React frontend) for a PVC & WPC cupboards website. It includes a navbar, Home, Products, Projects and Contact pages with dummy data and animations (Framer Motion).

## Setup (Windows PowerShell)


1. Install dependencies for server and client:

```powershell
cd e:\wpvc_project\server; npm install
cd ..\client; npm install
```

2. Run development servers (two shells recommended):

- Start backend:
```powershell
cd e:\wpvc_project\server; npm run dev
```
- Start frontend:
```powershell
cd e:\wpvc_project\client; npm run dev
```

Frontend dev server runs on `http://localhost:5173` (Vite). API requests are proxied by the dev server to `http://localhost:5000` if you configure a proxy, or you can start both and call backend directly.

3. Build for production (optional):

```powershell
cd e:\wpvc_project\client; npm run build
# then serve the client dist folder or let the server serve it
cd e:\wpvc_project\server; npm start
```

## Notes
- The client uses remote placeholder images (Unsplash URLs) for demo visuals.
- Contact form posts to `/api/contact` and the server logs the payload to console (dummy handling).

## Connecting Frontend & Backend (Production)

The app has two separately deployed pieces:

| Layer    | Host   | URL |
|----------|--------|-----|
| Backend  | Render | e.g. `https://rs-interiors-server.onrender.com` |
| Frontend | Vercel | e.g. `https://rsinteriordesigns.in` |

The frontend reads the backend URL from `VITE_API_URL`
(see `client/src/components/Reviews.jsx` and `client/src/pages/ContactUs.jsx`).
Because `VITE_*` variables are baked in at build time:

1. Set **`VITE_API_URL`** to your Render URL in the **Vercel** dashboard
   (Production environment), then redeploy.
2. Set **`MONGODB_URI`** (and optionally `CORS_ORIGIN`) on **Render**.
3. Whitelist `0.0.0.0/0` in MongoDB Atlas **Network Access**.

Full step-by-step instructions: see **[DEPLOYMENT.md](DEPLOYMENT.md)**.

If you want, I can:
- Add an `npm` workspace at root and a single `npm install` script to boot both services.
- Add a `concurrently` script to run both dev servers from one terminal.
- Configure Vite proxy to forward `/api` calls to `http://localhost:5000` so the frontend can call backend without CORS during development.

Tell me which of the above you prefer and I'll add it.
