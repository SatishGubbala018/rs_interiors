export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};

  // Dummy behavior matching your Express backend
  return res.status(200).json({
    status: 'ok',
    message: 'Thanks! We received your message.',
    payload: { name, email, message }
  });
}

