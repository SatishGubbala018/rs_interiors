const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const dbState = require('../dbState');

// GET /api/reviews - Fetch all published reviews (sorted newest first)
router.get('/', async (req, res) => {
  try {
    if (!dbState.connected) {
      // In-memory fallback: sorted newest first
      const reviews = [...dbState.memoryReviews]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 50);
      return res.json({
        success: true,
        count: reviews.length,
        data: reviews,
        source: 'memory',
      });
    }

    const reviews = await Review.find()
      .sort({ createdAt: -1 })
      .limit(50);
    res.json({ success: true, count: reviews.length, data: reviews, source: 'mongodb' });
  } catch (error) {
    console.error('Error fetching reviews:', error.message);
    res.status(500).json({ success: false, error: 'Server error while fetching reviews' });
  }
});

// POST /api/reviews - Submit a new review
router.post('/', async (req, res) => {
  try {
    const { name, rating, review } = req.body;

    // Basic validation
    if (!name || !rating || !review) {
      return res.status(400).json({ success: false, error: 'Name, rating, and review are required' });
    }

    const parsedRating = Number(rating);
    if (isNaN(parsedRating) || parsedRating < 1 || parsedRating > 5) {
      return res.status(400).json({ success: false, error: 'Rating must be between 1 and 5' });
    }

    // In-memory fallback when MongoDB is unreachable
    if (!dbState.connected) {
      const newReview = {
        _id: `mem-${Date.now()}`,
        name: name.trim(),
        rating: parsedRating,
        review: review.trim(),
        createdAt: new Date(),
      };
      dbState.memoryReviews.push(newReview);
      return res.status(201).json({ success: true, data: newReview, source: 'memory' });
    }

    const newReview = await Review.create({
      name: name.trim(),
      rating: parsedRating,
      review: review.trim()
    });

    res.status(201).json({ success: true, data: newReview, source: 'mongodb' });
  } catch (error) {
    console.error('Error creating review:', error.message);
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(e => e.message);
      return res.status(400).json({ success: false, error: messages.join(', ') });
    }
    res.status(500).json({ success: false, error: 'Server error while creating review' });
  }
});

module.exports = router;

