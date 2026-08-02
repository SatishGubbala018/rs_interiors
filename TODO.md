# Frontend Console Logging for MongoDB Data Status

## Objective
Add console logs in the frontend to clearly show whether MongoDB data is coming through or not.

## Steps
- [x] Add `console.log` in `client/src/components/Reviews.jsx` showing source (`mongodb` vs `memory`), review count, and sample data
- [x] Log the error case in `Reviews.jsx` when data fails to load
- [x] Add `console.log` in `client/src/pages/ContactUs.jsx` after submitting a review (shows where it was saved)
- [x] Add a global MongoDB health check log in `client/src/App.jsx` calling `/api/health`
- [x] Verify changes (syntax check / build)

