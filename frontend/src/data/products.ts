export interface Product {
  id: string;
  name: string;
  category: 'Leather Bags' | 'Electronic Goods' | 'Home Electronics';
  price: number;
  description: string;
  image: string;
}

export const products: Product[] = [
  // --- Leather Bags (20 items) ---
  {
    id: 'lb-1',
    name: 'Executive Leather Briefcase',
    category: 'Leather Bags',
    price: 19900,
    image: '/images/Leather/leather-bag-1.jpg',
    description: 'The definitive companion for the modern executive. Handcrafted from premium full-grain Italian leather, this briefcase features a padded 16-inch laptop compartment and brushed steel hardware.'
  },
  {
    id: 'lb-2',
    name: 'Weekend Voyager Duffle',
    category: 'Leather Bags',
    price: 28900,
    image: '/images/Leather/leather-bag-2.jpg',
    description: 'Travel in unparalleled style with our flagship duffle. Designed for 48-hour getaways, it offers a spacious main compartment and a separate shoe compartment.'
  },
  {
    id: 'lb-3',
    name: 'Urban Minimalist Backpack',
    category: 'Leather Bags',
    price: 15900,
    image: '/images/Leather/leather-bag-3.jpg',
    description: 'A seamless blend of urban versatility and classic luxury. This minimalist backpack features hidden magnetic closures and an ergonomic profile for daily commuting.'
  },
  {
    id: 'lb-4',
    name: 'Precision Slim Wallet',
    category: 'Leather Bags',
    price: 6400,
    image: '/images/Leather/leather-bag-4.jpg',
    description: 'The pinnacle of minimalist carry. Our slim bi-fold wallet is engineered to reduce bulk while maintaining capacity for cards and cash.'
  },
  {
    id: 'lb-5',
    name: 'Heritage Messenger Bag',
    category: 'Leather Bags',
    price: 17900,
    image: '/images/Leather/leather-bag-5.jpg',
    description: 'Inspired by traditional postal bags. This vintage-treated leather messenger bag accommodates an 11-inch tablet with rugged brass hardware.'
  },
  {
    id: 'lb-6',
    name: 'Pebble-Grain Luxury Tote',
    category: 'Leather Bags',
    price: 14500,
    image: '/images/Leather/leather-bag-6.jpg',
    description: 'An elegant solution for everyday essentials. This spacious tote bag is crafted from textured pebble-grain leather for a timeless aesthetic.'
  },
  {
    id: 'lb-7',
    name: 'Digital Organizer Pouch',
    category: 'Leather Bags',
    price: 4900,
    image: '/images/Leather/leather-bag-7.jpg',
    description: 'Elevate your organization. This compact tech pouch is designed to house your cables, chargers, and small digital accessories.'
  },
  {
    id: 'lb-8',
    name: 'Artisan Full-Grain Belt',
    category: 'Leather Bags',
    price: 7500,
    image: '/images/Leather/leather-bag-8.jpg',
    description: 'A staple of any refined wardrobe. Cut from a single piece of thick full-grain leather and finished with a solid brass buckle.'
  },
  {
    id: 'lb-9',
    name: 'Nappa Leather Card Holder',
    category: 'Leather Bags',
    price: 3900,
    image: '/images/Leather/leather-bag-9.jpg',
    description: 'Designed for the true minimalist. This ultra-slim card holder features precision-cut slots for your most essential cards.'
  },
  {
    id: 'lb-10',
    name: 'Classic Structured Satchel',
    category: 'Leather Bags',
    price: 16900,
    image: '/images/Leather/leather-bag-10.jpg',
    description: 'A heritage design reimagined. This handcrafted leather satchel fits a 13-inch laptop with traditional buckle closures.'
  },
  {
    id: 'lb-11',
    name: 'Executive Grooming Kit',
    category: 'Leather Bags',
    price: 8500,
    image: '/images/Leather/leather-bag-11.jpg',
    description: 'The ultimate travel companion. Our leather wash bag features a waterproof lining and internal mesh pockets for your essentials.'
  },
  {
    id: 'lb-12',
    name: 'Professional Camera Bag',
    category: 'Leather Bags',
    price: 14900,
    image: '/images/Leather/leather-bag-12.jpg',
    description: 'Luxury protection for your creative gear. This padded leather bag is designed for mirrorless and compact DSLR systems.'
  },
  {
    id: 'lb-13',
    name: 'Artisan Portfolio Sleeve',
    category: 'Leather Bags',
    price: 11900,
    image: '/images/Leather/leather-bag-13.jpg',
    description: 'Make a statement in the boardroom. This elegant portfolio features a dedicated tablet sleeve and premium hand-stitched leather.'
  },
  {
    id: 'lb-14',
    name: 'Urban Crossbody Sling',
    category: 'Leather Bags',
    price: 9900,
    image: '/images/Leather/messenger.png',
    description: 'A sleek sling bag for the urban explorer. Features quick-access pockets and a weather-resistant leather finish.'
  },
  {
    id: 'lb-15',
    name: 'Luxury Passport Sleeve',
    category: 'Leather Bags',
    price: 3500,
    image: '/images/Leather/wallet.png',
    description: 'Protect your window to the world. Handcrafted from soft Nappa leather with additional slots for travel documents.'
  },
  {
    id: 'lb-16',
    name: 'Silent Leather Key Stack',
    category: 'Leather Bags',
    price: 3200,
    image: '/images/Leather/wallet.png',
    description: 'Silence the jingle. This elegant organizer holds up to 7 keys in a quiet, compact stack without scratching your phone.'
  },
  {
    id: 'lb-17',
    name: 'Officer Briefcase Slate',
    category: 'Leather Bags',
    price: 25900,
    image: '/images/Leather/briefcase.png',
    description: 'An evolution of professional carry. Features a hidden trolley sleeve and reinforced stress points for the global traveler.'
  },
  {
    id: 'lb-18',
    name: 'Petite Crossbody Flap',
    category: 'Leather Bags',
    price: 10900,
    image: '/images/Leather/messenger.png',
    description: 'Compact elegance for daily ventures. Ideally sized for a smartphone and wallet with a secure magnetic flap.'
  },
  {
    id: 'lb-19',
    name: 'Handwoven Artisan Duffle',
    category: 'Leather Bags',
    price: 39900,
    image: '/images/Leather/duffle.png',
    description: 'A masterpiece of craftsmanship. Meticulously handwoven from premium calfskin leather to create a unique, durable texture.'
  },
  {
    id: 'lb-20',
    name: 'Grand Expedition Duffle',
    category: 'Leather Bags',
    price: 34900,
    image: '/images/Leather/duffle.png',
    description: 'Our most expansive luggage piece. Designed for extended trips with maximum capacity and reinforced corners.'
  },

  // --- Electronic Goods (45 items) ---
  {
    id: 'eg-1',
    name: 'Zenith Pro 14 Workstation',
    category: 'Electronic Goods',
    price: 124900,
    image: '/images/Laptop.jpg',
    description: 'A creative powerhouse. Featuring a color-accurate display and high-performance processor in a sleek, professional chassis.'
  },
  {
    id: 'eg-2',
    name: 'Vortex Alpha Smartphone',
    category: 'Electronic Goods',
    price: 32900,
    image: '/images/Phone.jpg',
    description: 'Experience pure speed. The Vortex Alpha offers an advanced camera system and bezel-less design for the modern user.'
  },
  {
    id: 'eg-3',
    name: 'Stellar View Tablet',
    category: 'Electronic Goods',
    price: 109900,
    image: '/images/Tablet.jpg',
    description: 'Your portable studio. A massive, responsive display with precision touch for artist and designers.'
  },
  {
    id: 'eg-4',
    name: 'PureAudio Studio Over-Ears',
    category: 'Electronic Goods',
    price: 64900,
    image: '/images/Headphone.jpg',
    description: 'Professional grade audio. High-fidelity drivers and comfortable cushions for marathon listening sessions.'
  },
  {
    id: 'eg-5',
    name: 'ClearComm Business Headset',
    category: 'Electronic Goods',
    price: 44900,
    image: '/images/Headeset.jpg',
    description: 'Crystal clear communication. Optimized for long calls with noise-canceling technology and a lightweight frame.'
  },
  {
    id: 'eg-6',
    name: 'OmniBook Air 13',
    category: 'Electronic Goods',
    price: 24900,
    image: '/images/Laptop (2).jpg',
    description: 'The ultimate portable companion. Feather-light design with exceptional battery life for productivity on the go.'
  },
  {
    id: 'eg-7',
    name: 'Nexus Pad Gen 2',
    category: 'Electronic Goods',
    price: 12900,
    image: '/images/Tablet (2).jpg',
    description: 'Versatile and powerful. A high-resolution screen perfect for media consumption and light creative work.'
  },
  {
    id: 'eg-8',
    name: 'Stealth Gaming Headphones',
    category: 'Electronic Goods',
    price: 18900,
    image: '/images/Headset (2).jpg',
    description: 'Immersive soundstage. Low-latency wireless audio with a broadcast-quality microphone for serious gamers.'
  },
  {
    id: 'eg-9',
    name: 'Horizon Phone Pro',
    category: 'Electronic Goods',
    price: 189000,
    image: '/images/Phone (2).jpg',
    description: 'A new dimension of mobile tech. Features a folding OLED display and professional-grade triple camera setup.'
  },
  {
    id: 'eg-10',
    name: 'AeroStream 15 Laptop',
    category: 'Electronic Goods',
    price: 54900,
    image: '/images/Laptop (3).jpg',
    description: 'Balance of power and price. Features a fast SSD and vibrant display for students and creative professionals.'
  },
  {
    id: 'eg-11',
    name: 'Visionary 10" Tablet',
    category: 'Electronic Goods',
    price: 8900,
    image: '/images/Tablet (3).jpg',
    description: 'Sleek and accessible. The Visionary tablet provides a smooth touch experience and long-lasting battery life.'
  },
  {
    id: 'eg-12',
    name: 'SonicBoom Studio Buds',
    category: 'Electronic Goods',
    price: 11900,
    image: '/images/Headset.jpg',
    description: 'Big sound in a small package. These wireless buds offer deep bass and active noise cancellation.'
  },
  {
    id: 'eg-13',
    name: 'ChatPro Elite Wireless',
    category: 'Electronic Goods',
    price: 18900,
    image: '/images/Headset (3).jpg',
    description: 'Master your meetings. Superior voice pickup and high-comfort ear cups for all-day office use.'
  },
  {
    id: 'eg-14',
    name: 'Elite Audio Cans',
    category: 'Electronic Goods',
    price: 38900,
    image: '/images/Headset (4).jpg',
    description: 'Audiophile performance. Open-back design for an expansive soundstage and precise frequency response.'
  },
  {
    id: 'eg-15',
    name: 'Titan Core Gamer',
    category: 'Electronic Goods',
    price: 89900,
    image: '/images/Laptop (4).jpg',
    description: 'Unleash the performance. Advanced cooling and high-refresh display for competitive gaming.'
  },
  {
    id: 'eg-16',
    name: 'SmartLink Pro Phone',
    category: 'Electronic Goods',
    price: 59900,
    image: '/images/smartphone.png',
    description: 'Sleek design, powerful features. An optimized software experience with a brilliant always-on display.'
  },
  {
    id: 'eg-17',
    name: 'Aura SmartWatch 9',
    category: 'Electronic Goods',
    price: 24900,
    image: '/images/smartwatch.png',
    description: 'Your health on your wrist. Advanced sensors for heart rate, blood oxygen, and sleep tracking.'
  },
  {
    id: 'eg-18',
    name: 'SwiftBook 14',
    category: 'Electronic Goods',
    price: 74900,
    image: '/images/laptop.png',
    description: 'No-compromise productivity. A solid aluminum body with a fast processor and all-day battery.'
  },
  {
    id: 'eg-19',
    name: 'Nexus Slate Tablet',
    category: 'Electronic Goods',
    price: 28900,
    image: '/images/tablet.png',
    description: 'The perfect companion for students. Lightweight, durable, and compatible with stylus support.'
  },
  {
    id: 'eg-20',
    name: 'PureWave ANC Headphones',
    category: 'Electronic Goods',
    price: 19900,
    image: '/images/headphones.png',
    description: 'Quiet your world. Industry-leading noise cancellation with rich, balanced sound profile.'
  },
  {
    id: 'eg-21',
    name: 'Luxe Audio Over-Ears',
    category: 'Electronic Goods',
    price: 38900,
    image: '/images/headphones.jpg',
    description: 'Merging style and sound. Premium materials and custom drivers for a luxury personal audio experience.'
  },
  {
    id: 'eg-22',
    name: 'Compact Travel Projector',
    category: 'Electronic Goods',
    price: 14900,
    image: '/images/tv.png',
    description: 'Big screen in your bag. A portable 1080p projector with built-in speakers for cinema nights anywhere.'
  },
  {
    id: 'eg-23',
    name: 'Business Pro Smartphone',
    category: 'Electronic Goods',
    price: 9900,
    image: '/images/Phone.jpg',
    description: 'Reliable and secure. A durable smartphone with enhanced security features for professional use.'
  },
  {
    id: 'eg-24',
    name: 'Designer Series Laptop',
    category: 'Electronic Goods',
    price: 54900,
    image: '/images/Laptop (2).jpg',
    description: 'Elegant Form, Powerful Function. A stunning laptop designed for the modern creative professional.'
  },
  {
    id: 'eg-25',
    name: 'Wireless Master Earbuds',
    category: 'Electronic Goods',
    price: 64900,
    image: '/images/Headset.jpg',
    description: 'Seamless connectivity. Fast pairing and crystal clear audio for a life on the go.'
  },
  {
    id: 'eg-26',
    name: 'Pro Streamer Mic Interface',
    category: 'Electronic Goods',
    price: 18900,
    image: '/images/Headeset.jpg',
    description: 'Take control of your audio. Professional-grade preamps and intuitive controls for streamers.'
  },
  {
    id: 'eg-27',
    name: 'Smart Fitness Band',
    category: 'Electronic Goods',
    price: 24900,
    image: '/images/smartwatch.png',
    description: 'Discreety and powerful. Track your activity and calories throughout the day.'
  },
  {
    id: 'eg-28',
    name: 'Mechanical Numeric Pad',
    category: 'Electronic Goods',
    price: 7900,
    image: '/images/laptop.png',
    description: 'Tactile data entry. High-quality mechanical switches for the numbers-driven professional.'
  },
  {
    id: 'eg-29',
    name: 'Lite Vision Phone',
    category: 'Electronic Goods',
    price: 12900,
    image: '/images/Phone (2).jpg',
    description: 'Essential features, premium feel. A great entry-point into high-end mobile technology.'
  },
  {
    id: 'eg-30',
    name: 'QuietFocus Headphones',
    category: 'Electronic Goods',
    price: 24900,
    image: '/images/Headset (2).jpg',
    description: 'Concentrate on your work. Effective noise isolation and a comfortable over-ear design.'
  },
  {
    id: 'eg-31',
    name: 'Mini Smart Projector',
    category: 'Electronic Goods',
    price: 64900,
    image: '/images/tv.png',
    description: 'The smart way to watch. Integrated streaming apps and easy setup for any wall surface.'
  },
  {
    id: 'eg-32',
    name: 'High-Speed Wi-Fi Router',
    category: 'Electronic Goods',
    price: 48000,
    image: '/images/laptop.png',
    description: 'Eliminate dead zones. Robust coverage and fast speeds for a connected modern home.'
  },
  {
    id: 'eg-33',
    name: 'Digital Photo Frame',
    category: 'Electronic Goods',
    price: 19900,
    image: '/images/tablet.png',
    description: 'Display your memories. A high-res screen that cycles through your favorite moments with family.'
  },
  {
    id: 'eg-34',
    name: 'Studio Monitor Cans',
    category: 'Electronic Goods',
    price: 3500,
    image: '/images/headphones.png',
    description: 'Flat response for audio work. Affordable and reliable monitoring for home studios.'
  },
  {
    id: 'eg-35',
    name: 'Flash Photography Unit',
    category: 'Electronic Goods',
    price: 32900,
    image: '/images/smartwatch.png',
    description: 'Master the light. Professional sync and consistent performance for studio shooting.'
  },
  {
    id: 'eg-36',
    name: 'Wireless Instrument Link',
    category: 'Electronic Goods',
    price: 14900,
    image: '/images/Headset (4).jpg',
    description: 'Unplug and play. Zero-latency wireless connection for guitars and other instruments.'
  },
  {
    id: 'eg-37',
    name: 'Smart Weather Console',
    category: 'Electronic Goods',
    price: 28900,
    image: '/images/Phone.jpg',
    description: 'Real-time local data. Monitor temperature and humidity with surgical precision.'
  },
  {
    id: 'eg-38',
    name: 'Custom Mechanical Keyboard',
    category: 'Electronic Goods',
    price: 34900,
    image: '/images/Laptop (4).jpg',
    description: 'Premium typing experience. Gasket-mounted design for the ultimate sound and feel.'
  },
  {
    id: 'eg-39',
    name: 'Reference Mix Ears',
    category: 'Electronic Goods',
    price: 49900,
    image: '/images/headphones.png',
    description: 'Accuracy above all. These headphones reveal every detail in your mix for precise mastering.'
  },
  {
    id: 'eg-40',
    name: 'Turbo Graphic Dock',
    category: 'Electronic Goods',
    price: 39900,
    image: '/images/Laptop (2).jpg',
    description: 'Desktop power for your laptop. An external GPU enclosure for rendering and editing.'
  },
  {
    id: 'eg-41',
    name: 'Scale Pro Smart',
    category: 'Electronic Goods',
    price: 11900,
    image: '/images/smartphone.png',
    description: 'Advanced body metrics. Heart rate and body fat percentage tracking with app sync.'
  },
  {
    id: 'eg-42',
    name: 'Field Audio Recorder',
    category: 'Electronic Goods',
    price: 28900,
    image: '/images/Headeset.jpg',
    description: 'Capture nature in detail. High-res recording with built-in X/Y stereo microphones.'
  },
  {
    id: 'eg-43',
    name: 'Hydroponic Garden Unit',
    category: 'Electronic Goods',
    price: 19900,
    image: '/images/tablet.png',
    description: 'Automated indoor greens. Smart LED lighting for growing fresh herbs in your kitchen.'
  },
  {
    id: 'eg-44',
    name: 'Smart Label Printer',
    category: 'Electronic Goods',
    price: 16900,
    image: '/images/laptop.png',
    description: 'Organize your office. Thermal printing technology for high-res labels in seconds.'
  },
  {
    id: 'eg-45',
    name: 'Premium USB Interface',
    category: 'Electronic Goods',
    price: 44900,
    image: '/images/headphones.png',
    description: 'The center of your studio. Pristine preamps for professional vocal and instrument recording.'
  },

  // --- Home Electronics (20 items) ---
  { id: 'he-1', name: '8K OLED Cinema Display', category: 'Home Electronics', price: 349900, image: '/images/tv.png', description: 'Step into the picture. Our flagship 8K OLED TV features self-lit pixels and an AI processor for an uncompromising home theater experience.' },
  { id: 'he-2', name: 'Smart Inverter Refrigerator', category: 'Home Electronics', price: 189900, image: '/images/refrigerator.png', description: 'The centerpiece of the contemporary kitchen. French door design with precise temperature control and matte black finish.' },
  { id: 'he-3', name: 'Series 9 AI Washing Machine', category: 'Home Electronics', price: 64900, image: '/images/washing-machine.png', description: 'Experience the future of garment care. AI-driven cycles analyze fabric type for the perfect wash every time.' },
  { id: 'he-4', name: 'Arctic Flow Inverter AC', category: 'Home Electronics', price: 42900, image: '/images/ac.png', description: 'Superior climate control. Maintain the perfect temperature while consuming 40% less energy with advanced purification filters.' },
  { id: 'he-5', name: 'Lidar Robot Vacuum Max', category: 'Home Electronics', price: 44900, image: '/images/robot-vacuum.png', description: 'Spotless floors, automatically. Features Lidar mapping and AI obstacle avoidance for a truly hands-off cleaning experience.' },
  { id: 'he-6', name: 'Elite Cordless Mop', category: 'Home Electronics', price: 32900, image: '/images/Electric Mop.jpg', description: 'High-speed spinning pads for effortless floor shine. The Elite cordless mop makes maintenance a breeze.' },
  { id: 'he-7', name: 'WaveSense Robot Sweeper', category: 'Home Electronics', price: 21900, image: '/images/Robot Vaccum.jpg', description: 'Efficient and quiet. A smart sweeper that navigates under furniture to keep your hard floors dust-free daily.' },
  { id: 'he-8', name: 'Pro-Steam Inverter Washer', category: 'Home Electronics', price: 89900, image: '/images/washing-machine.png', description: 'Deep cleaning with the power of steam. Removes allergens and tough stains while remaining gentle on your most delicate fabrics.' },
  { id: 'he-9', name: 'Modern Living Tablet Display', category: 'Home Electronics', price: 34900, image: '/images/tablet.png', description: 'Control your smart home from one place. A wall-mountable 12-inch display for lighting, climate, and security.' },
  { id: 'he-10', name: 'Cinema Surround System', category: 'Home Electronics', price: 64900, image: '/images/tv.png', description: 'Immersive 7.1 audio experience. Calibrates to your room automatically to deliver crystal clear dialogue and deep bass.' },
  { id: 'he-11', name: 'Matte Series Refrigerator', category: 'Home Electronics', price: 84900, image: '/images/refrigerator.png', description: 'Sleek and spacious. A slim-profile fridge that offers massive storage capacity for modern apartments.' },
  { id: 'he-12', name: 'Quiet Zone AC', category: 'Home Electronics', price: 18900, image: '/images/ac.png', description: 'Sleep in peace. An ultra-quiet air conditioner designed for bedrooms with a dedicated night mode.' },
  { id: 'he-13', name: 'Corner Clean Robot', category: 'Home Electronics', price: 7900, image: '/images/robot-vacuum.png', description: 'Gets where others cant. Specialized sensors ensure corners and edges are thoroughly cleaned every time.' },
  { id: 'he-14', name: 'Compact Studio Washer', category: 'Home Electronics', price: 115900, image: '/images/washing-machine.png', description: 'Professional performance for tight spaces. All the power of a full-size machine in a space-saving footprint.' },
  { id: 'he-15', name: 'Smart Kitchen Hub', category: 'Home Electronics', price: 145900, image: '/images/refrigerator.png', description: 'The brain of your kitchen. A connected refrigerator with a built-in screen for recipes, calendars, and family notes.' },
  { id: 'he-16', name: 'Pure Air Pro', category: 'Home Electronics', price: 18900, image: '/images/ac.png', description: 'Breathe easy. Combining air conditioning with medical-grade HEPA filtration for the ultimate indoor air quality.' },
  { id: 'he-17', name: 'Gourmet Induction Hob', category: 'Home Electronics', price: 28900, image: '/images/tablet.png', description: 'Precision cooking at your fingertips. Instant heat response and precise temperature control for professional results.' },
  { id: 'he-18', name: 'ClearView Security Tablet', category: 'Home Electronics', price: 34900, image: '/images/tablet.png', description: 'Dedicated security monitor for your home cameras. High-res display with multi-camera split view.' },
  { id: 'he-19', name: 'Quiet Cycle Dishwasher', category: 'Home Electronics', price: 49900, image: '/images/washing-machine.png', description: 'Silent but powerful. Intensive steam cleaning that operates at a near-inaudible volume.' },
  { id: 'he-20', name: 'Elite Home Cinema VR', category: 'Home Electronics', price: 125900, image: '/images/smartwatch.png', description: 'Personal theater on the go. High-res wearable display for a truly immersive movie-watching experience.' },
];
