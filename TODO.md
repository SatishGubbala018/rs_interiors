# Connecting Render Backend + Vercel Frontend

## Config Files
- [x] Create `client/.env.example` documenting `VITE_API_URL`
- [x] Create `client/.env.production` with Render URL baked into production build
- [x] Update `client/.gitignore` so `client/.env.production` is committed (public, non-secret)

## Backend (Render) Hardening
- [x] Harden CORS in `server/index.js` via configurable `CORS_ORIGIN` env var (dev still allows all)
- [x] Verify server syntax (`node --check index.js`)

## Documentation
- [x] Create `DEPLOYMENT.md` with step-by-step Render + Vercel + MongoDB Atlas setup
- [x] Update `README.md` with "Connecting Frontend & Backend" section

## Build & Connectivity Verification
- [x] Client production build succeeds (`npm run build`)
- [x] `VITE_API_URL=https://rs-interiors-server.onrender.com` confirmed baked into `dist` bundle
- [x] Backend reachable — `GET /api/health` returns `{ "status": "ok", "db": "fallback-memory" }`

## Dashboard Steps (manual, documented in DEPLOYMENT.md)
- [ ] Render: set `MONGODB_URI` so `/api/health` reports `db: connected`
- [ ] Render: set `CORS_ORIGIN=https://rsinteriordesigns.in,https://www.rsinteriordesigns.in`
- [ ] MongoDB Atlas: whitelist `0.0.0.0/0` in Network Access
- [ ] Vercel: confirm `VITE_API_URL=https://rs-interiors-server.onrender.com` (Production env) and redeploy
- [ ] Verify reviews load + review submission works on the live site

