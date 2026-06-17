## TODO - Vercel deployment

- [x] Confirm frontend API usage: `client/src/pages/Projects.jsx` calls `GET /api/projects`.
- [x] Add Vercel API routes under `client/api/`:
  - [x] `client/api/projects.js`
  - [x] `client/api/products.js`
  - [x] `client/api/contact.js`
- [x] Add `client/vercel.json` rewrite config for `/api/*`.
- [ ] Commit + push changes to GitHub.
- [ ] In Vercel: New Project -> Import from GitHub
- [ ] Set Vercel settings:
  - Root Directory: `client`
  - Build Command: `npm run build`
  - Output Directory: `dist`
- [ ] Deploy and verify:
  - Home loads
  - `/projects` page loads (calls `/api/projects`)
  - `/api/projects` returns JSON
- [ ] (Optional) Verify `/api/products` and `/api/contact` if used in UI.
