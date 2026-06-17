const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Dummy products data
const products = [
  {
    id: 1,
    name: 'PVC Modular Cupboard - Gloss White',
    type: 'PVC',
    description: 'High-gloss PVC finish, water-resistant, long-lasting.',
    image: 'https://images.pexels.com/photos/3935692/pexels-photo-3935692.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 2,
    name: 'WPC Wardrobe - Woodgrain',
    type: 'WPC',
    description: 'Wood-plastic composite with warm oak texture and sturdy frame.',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 3,
    name: 'PVC Kitchen Cabinet - Matte Slate',
    type: 'PVC',
    description: 'Matte finish cabinets ideal for modern kitchens.',
    image: 'https://images.pexels.com/photos/3752171/pexels-photo-3752171.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
];

// Dummy projects data
const projects = [
  {
    id: 1,
    title: 'Contemporary Apartment Fitout (PVC)',
    description:
      'Complete PVC cabinetry for a 3BHK with soft-close drawers, laminated finish, and integrated LED lighting.',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 2,
    title: 'Office Storage Solutions (WPC)',
    description:
      'WPC storage units for an open-plan office with modular shelving, cable channels, and stain-resistant panels.',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 3,
    title: 'WPVC Kitchen Counter & Chimney Wall',
    description:
      'WPVC kitchen counter and chimney cladding with water-resistant surfaces and durable edge finishing.',
    image: 'https://images.pexels.com/photos/3935692/pexels-photo-3935692.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 4,
    title: '3-Layer Wardrobe with Woodgrain Texture',
    description:
      '3-layer wardrobe installation featuring a warm oak woodgrain look, tough hinges, and long-term stability.',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 5,
    title: 'PVC Kids Room Storage Unit',
    description:
      'PVC storage drawers for a kids room with easy-clean surfaces, rounded edges, and safe soft-close fittings.',
    image: 'https://images.pexels.com/photos/3752171/pexels-photo-3752171.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 6,
    title: 'WPC Bathroom Vanity & Utility Cabinet',
    description:
      'WPC vanity with moisture-safe panels and a utility cabinet layout for organized storage in humid areas.',
    image: 'https://images.pexels.com/photos/2459597/pexels-photo-2459597.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 7,
    title: 'WPVC Modular Study Cabinet',
    description:
      'WPVC study cabinetry with desk integration, cable management, and smooth shutter motion.',
    image: 'https://images.pexels.com/photos/3749895/pexels-photo-3749895.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 8,
    title: 'PVC Laundry & Utility Tall Unit',
    description:
      'PVC tall unit designed for laundry use—chemical resistant surfaces and efficient shelf spacing.',
    image: 'https://images.pexels.com/photos/3816883/pexels-photo-3816883.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 9,
    title: '3-Layer TV Console & Display Wall',
    description:
      '3-layer TV console with display niches, concealed wire routing, and a premium matte finish.',
    image: 'https://images.pexels.com/photos/350426/pexels-photo-350426.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: 10,
    title: 'WPC Shop-Fit Counter & Billing Cabinet',
    description:
      'WPC shop-fit counter with sturdy storage, high durability for daily usage, and easy-clean lamination.',
    image: 'https://images.pexels.com/photos/373999/pexels-photo-373999.jpeg?auto=compress&cs=tinysrgb&w=1200'
  }
];


app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form received:', { name, email, message });
  // In real app you'd save/send email etc.
  res.json({ status: 'ok', message: 'Thanks! We received your message.' });
});

// Serve static client in production (if built into /client/dist)
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
