const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection state
const dbState = require('./dbState');
const mongoUri = process.env.MONGODB_URI;

// Connect to MongoDB (with a bounded selection timeout so the app
// starts promptly even if the cluster is unreachable)
if (mongoUri) {
  mongoose.connect(mongoUri, {
    serverSelectionTimeoutMS: 10000,
    connectTimeoutMS: 10000,
  })
    .then(() => {
      dbState.connected = true;
      console.log('✅ Connected to MongoDB');
    })
    .catch((err) => {
      // Surface the REAL underlying error (the generic message often
      // hides the actual cause such as an IP whitelist / TLS failure)
      const cause =
        (err.cause && (err.cause.message || err.cause.code)) ||
        (err.reason && JSON.stringify(err.reason, null, 2)) ||
        err.message;
      console.error('❌ MongoDB connection error:');
      console.error('   ', String(cause).split('\n')[0]);
      console.error('   ℹ️  The server will run in fallback (in-memory) mode until MongoDB is reachable.');
      dbState.connected = false;
    });
} else {
  console.warn('⚠️  MONGODB_URI not set. Running in fallback (in-memory) mode.');
  dbState.connected = false;
}

// Routes
app.use('/api/reviews', require('./routes/reviews'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    db: dbState.connected ? 'connected' : 'fallback-memory',
    timestamp: new Date().toISOString(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
