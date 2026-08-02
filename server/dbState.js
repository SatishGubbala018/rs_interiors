// Shared state for MongoDB connectivity and in-memory fallback.
// When MongoDB is unreachable (e.g., Atlas IP whitelist), the API
// transparently falls back to this in-memory store so the app
// remains fully functional during the session.

module.exports = {
  connected: false,
  memoryReviews: [
    {
      _id: 'mem-1',
      name: 'Ravi Kumar',
      rating: 5,
      review: 'Excellent work! RS Interiors did a fantastic job on our WPC wardrobes. Very professional team and premium finish.',
      createdAt: new Date('2024-11-10T10:00:00.000Z'),
    },
    {
      _id: 'mem-2',
      name: 'Sneha Reddy',
      rating: 5,
      review: 'Loved the PVC cupboards they installed in our kitchen. Water-resistant and looks great. Highly recommended!',
      createdAt: new Date('2024-11-25T14:30:00.000Z'),
    },
    {
      _id: 'mem-3',
      name: 'Mohammed Imran',
      rating: 4,
      review: 'Good quality materials and timely installation. The modular kitchen turned out beautiful.',
      createdAt: new Date('2024-12-05T09:15:00.000Z'),
    },
  ],
};

