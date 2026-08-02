// Shared state for MongoDB connectivity and in-memory fallback.
// When MongoDB is unreachable (e.g., Atlas IP whitelist), the API
// transparently falls back to this in-memory store so the app
// remains fully functional during the session.
//
// NOTE: No dummy/seed reviews are included. The store starts empty and
// only contains reviews that users actually submit while MongoDB is
// unreachable (these are lost on server restart once Mongo is connected).

module.exports = {
  connected: false,
  memoryReviews: [],
};

