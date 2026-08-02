# Deploying & Connecting the App

## Architecture
| Layer     | Host    | URL                                     |
|-----------|---------|-----------------------------------------|
| Backend   | Render  | https://rs-interiors-server.onrender.com |
| Frontend  | Vercel  | https://rsinteriordesigns.in            |
| Database  | MongoDB Atlas | (via `MONGODB_URI`)            |

The frontend calls the backend using the `VITE_API_URL` environment variable
(already wired in `client/src/components/Reviews.jsx` and
`client/src/pages/ContactUs.jsx`). This value is baked into the bundle at
build time, so it must be present **when Vercel builds the frontend**.

---

## 1. Backend — Render

1. In the Render dashboard create a **New → Web Service** and connect your repo.
2. Configure the service:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
3. Add **Environment Variables**:
   | Key            | Value                                                            |
   |----------------|------------------------------------------------------------------|
   | `MONGODB_URI`  | Your MongoDB Atlas connection string                             |
   | `CORS_ORIGIN`  | `https://rsinteriordesigns.in,https://www.rsinteriordesigns.in`  |
4. Deploy, then verify the API is live:
   ```
   curl https://rs-interiors-server.onrender.com/api/health
   ```
   Expected response:
   ```json
   { "status": "ok", "db": "connected", "timestamp": "..." }
   ```
   If `db` shows `fallback-memory`, MongoDB is not reachable (see Atlas step below).

### MongoDB Atlas
- Go to **Network Access** → **Add IP Address**.
- Add `0.0.0.0/0` (allow access from anywhere) so Render can connect.

---

## 2. Frontend — Vercel

1. In Vercel import your repo. The existing `vercel.json` at the repo root
   tells Vercel to build inside `client/` (Vite build, output `client/dist`).
2. Add the **Environment Variable**:
   | Key            | Value                                |
   |----------------|--------------------------------------|
   | `VITE_API_URL` | `https://rs-interiors-server.onrender.com` |
3. Deploy (or Redeploy).

> Note: `client/.env.production` already contains the same value, so local
> production builds (`npm run build`) work too. Vercel also loads committed
> `.env.production` files during the build.

---

## 3. Verify the connection

- Open your Vercel site → Home page → the **Reviews** section should load
  testimonials from the backend.
- Go to the **Contact** page → submit a review → it should be saved by the
  backend and then appear on the site.
- Check the backend health endpoint again after submitting:
  ```
  curl https://rs-interiors-server.onrender.com/api/reviews
  ```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Browser shows CORS error | Ensure `CORS_ORIGIN` on Render includes your exact Vercel domain (no trailing slash). |
| Reviews show "Unable to load reviews" | Confirm `VITE_API_URL` is set for the **production** environment in Vercel, then redeploy. |
| `/api/health` reports `fallback-memory` | Verify `MONGODB_URI` is correct and Atlas Network Access includes `0.0.0.0/0`. |
| API returns 404 on `/api/...` | Confirm the request hits the Render URL (not `localhost:5000`). Check the site's Network tab. |

