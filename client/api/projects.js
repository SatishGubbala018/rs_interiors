export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const projects = [
    {
      id: 1,
      title: 'Contemporary Apartment Fitout (PVC)',
      description:
        'Complete PVC cabinetry for a 3BHK with soft-close drawers, laminated finish, and integrated LED lighting.',
      image:
        'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: 2,
      title: 'Office Storage Solutions (WPC)',
      description:
        'WPC storage units for an open-plan office with modular shelving, cable channels, and stain-resistant panels.',
      image:
        'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  ];

  // Keep compatible with your Express dummy data shape
  return res.status(200).json(projects);
}

