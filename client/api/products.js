export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const products = [
    {
      id: 1,
      name: 'PVC Modular Cupboard - Gloss White',
      type: 'PVC',
      description: 'High-gloss PVC finish, water-resistant, long-lasting.',
      image:
        'https://images.pexels.com/photos/3935692/pexels-photo-3935692.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: 2,
      name: 'WPC Wardrobe - Woodgrain',
      type: 'WPC',
      description:
        'Wood-plastic composite with warm oak texture and sturdy frame.',
      image:
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: 3,
      name: 'PVC Kitchen Cabinet - Matte Slate',
      type: 'PVC',
      description: 'Matte finish cabinets ideal for modern kitchens.',
      image:
        'https://images.pexels.com/photos/3752171/pexels-photo-3752171.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  ];

  return res.status(200).json(products);
}

