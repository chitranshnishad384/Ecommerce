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
    image: '/images/leather-bag-1.jpg',
    description: 'The definitive companion for the modern executive. Handcrafted from premium full-grain Italian leather, this briefcase features a padded 16-inch laptop compartment, brushed steel hardware, and a meticulously organized interior for your essential documents and tech accessories.'
  },
  {
    id: 'lb-2',
    name: 'Leather Weekend Duffle',
    category: 'Leather Bags',
    price: 28900,
    image: '/images/leather-bag-2.jpg',
    description: 'Travel in unparalleled style with our flagship duffle. Designed for 48-hour getaways, it offers a spacious main compartment, separate shoe compartment, and reinforced base. The vegetable-tanned leather develops a beautiful unique patina over time, telling the story of your journeys.'
  },
  {
    id: 'lb-3',
    name: 'Minimalist Leather Backpack',
    category: 'Leather Bags',
    price: 15900,
    image: '/images/leather-bag-3.jpg',
    description: 'A seamless blend of urban versatility and classic luxury. This minimalist backpack features hidden magnetic closures, a slim profile, and ergonomic straps. Crafted for the daily commute, it protects your laptop while maintaining a sophisticated silhouette.'
  },
  {
    id: 'lb-4',
    name: 'Slim Leather Wallet',
    category: 'Leather Bags',
    price: 6400,
    image: '/images/leather-bag-4.jpg',
    description: 'The pinnacle of minimalist carry. Our slim bi-fold wallet is engineered to reduce bulk without sacrificing capacity. Featuring RFID-blocking technology and six precision-cut card slots, it is handcrafted from the finest top-grain leather.'
  },
  {
    id: 'lb-5',
    name: 'Vintage Messenger Bag',
    category: 'Leather Bags',
    price: 17900,
    image: '/images/leather-bag-5.jpg',
    description: 'Inspired by traditional postal bags, updated for today. This vintage-treated leather messenger bag accommodates an 11-inch tablet and features brass hardware and a rugged canvas lining. Perfect for the professional who values heritage and functionality.'
  },
  {
    id: 'lb-6',
    name: 'Premium Leather Tote',
    category: 'Leather Bags',
    price: 14500,
    image: '/images/leather-bag-6.jpg',
    description: 'An elegant solution for everyday essentials. This spacious tote bag is crafted from pebble-grain leather and features an internal zip pocket for valuables. Its timeless design ensures it transitions perfectly from work meetings to weekend outings.'
  },
  {
    id: 'lb-7',
    name: 'Leather Tech Pouch',
    category: 'Leather Bags',
    price: 4900,
    image: '/images/leather-bag-7.jpg',
    description: 'Elevate your organization. This compact pouch is designed to house your cables, chargers, and small tech accessories. Genuine leather exterior and elastic internal organizers provide a sophisticated home for your digital lifecycle.'
  },
  {
    id: 'lb-8',
    name: 'Handcrafted Leather Belt',
    category: 'Leather Bags',
    price: 7500,
    image: '/images/leather-bag-8.jpg',
    description: 'A staple of any refined wardrobe. Our belts are cut from a single piece of thick full-grain leather and finished with a solid brass buckle. Hand-burnished edges and a subtle embossed logo signify true quality.'
  },
  {
    id: 'lb-9',
    name: 'Leather Card Holder',
    category: 'Leather Bags',
    price: 3900,
    image: '/images/leather-bag-9.jpg',
    description: 'Designed for the true minimalist. This ultra-slim card holder features three slots and a central pocket for folded cash. Perfect for evening events or when you only need the bare essentials, crafted from smooth Nappa leather.'
  },
  {
    id: 'lb-10',
    name: 'Classic Leather Satchel',
    category: 'Leather Bags',
    price: 16900,
    image: '/images/leather-bag-10.jpg',
    description: 'A heritage design reimagined for the 21st century. This handcrafted leather satchel features a structured design, traditional buckle closures, and a removable shoulder strap. It comfortably fits a 13-inch laptop and your daily notepad.'
  },
  {
    id: 'lb-11',
    name: 'Leather Travel Kit',
    category: 'Leather Bags',
    price: 8500,
    image: '/images/leather-bag-11.jpg',
    description: 'The ultimate travel companion for the well-groomed man. Our leather wash bag features a waterproof lining, internal mesh pockets, and a wide-mouth opening for easy access to your grooming essentials.'
  },
  {
    id: 'lb-12',
    name: 'Leather Camera Bag',
    category: 'Leather Bags',
    price: 14900,
    image: '/images/leather-bag-12.jpg',
    description: 'Luxury protection for your creative gear. This padded leather bag is designed for mirrorless or compact DSLR cameras. Featuring adjustable internal dividers and external pockets for memory cards and batteries.'
  },
  {
    id: 'lb-13',
    name: 'Leather Bag',
    category: 'Leather Bags',
    price: 11900,
    image: '/images/leather-bag-13.jpg',
    description: 'Make a statement in the boardroom. This elegant A4 portfolio features a dedicated tablet sleeve, pen loops, and card slots. Hand-stitched leather and premium YKK zippers ensure a lifetime of professional service.'
  },
  {
    id: 'lb-14',
    name: 'Sling Bag Elite',
    category: 'Leather Bags',
    price: 9900,
    image: '/images/leather-bag-1.jpg',
    description: 'The ultimate cross-body bag for the urban explorer. This sleek sling bag offers quick-access pockets, an adjustable strap for left or right carry, and a weather-resistant leather finish. Ideal for keeping your pockets empty and your hands free.'
  },
  {
    id: 'lb-15',
    name: 'Leather Passport Cover',
    category: 'Leather Bags',
    price: 3500,
    image: '/images/leather-bag-2.jpg',
    description: 'Protect your window to the world. Our passport covers are handcrafted from soft, supple leather and feature additional slots for boarding passes and frequent flyer cards. A sophisticated essential for global travelers.'
  },
  {
    id: 'lb-16',
    name: 'Leather Key Organizer',
    category: 'Leather Bags',
    price: 3200,
    image: '/images/leather-bag-3.jpg',
    description: 'Silence the jingle. This elegant leather organizer holds up to 7 keys in a quiet, compact stack. Prevent scratches on your phone and other essentials while adding a touch of luxury to your daily carry.'
  },
  {
    id: 'lb-17',
    name: 'Officer Briefcase V2',
    category: 'Leather Bags',
    price: 25900,
    image: '/images/leather-bag-4.jpg',
    description: 'An evolution of our most popular design. The V2 features an updated internal layout, reinforced stress points, and a hidden trolley sleeve for effortless travel. Crafted from heavy-duty leather that stands up to the rigors of travel.'
  },
  {
    id: 'lb-18',
    name: 'Leather Crossbody Mini',
    category: 'Leather Bags',
    price: 10900,
    image: '/images/leather-bag-5.jpg',
    description: 'Compact elegance for your daily ventures. Perfectly sized for a smartphone, wallet, and keys, this mini crossbody bag is the embodiment of minimalist luxury. Features an adjustable strap and a secure magnetic flap.'
  },
  {
    id: 'lb-19',
    name: 'Handwoven Leather Bag',
    category: 'Leather Bags',
    price: 39900,
    image: '/images/leather-bag-6.jpg',
    description: 'A masterpiece of artisanal craftsmanship. Each bag is meticulously handwoven from strips of premium calfskin leather, creating a unique texture that is both soft and durable. A limited production piece for the true connoisseur.'
  },
  {
    id: 'lb-20',
    name: 'The Weekend Master',
    category: 'Leather Bags',
    price: 34900,
    image: '/images/leather-bag-7.jpg',
    description: 'Our most expansive luggage piece. The Weekend Master is designed for extended trips, offering maximum capacity without compromising on airline carry-on requirements. Handcrafted from heavy pebbled leather with reinforced corners.'
  },

  // --- Electronic Goods (45 items) ---
  {
    id: 'eg-1',
    name: 'Ultra-Slim Premium Smart Laptop',
    category: 'Electronic Goods',
    price: 124900,
    image: '/images/electronic-1.jpg',
    description: 'Power beyond boundaries. This ultra-slim Smart Phone features the latest 14-core processor, a stunning OLED display with 100% DCI-P3 coverage, and a whisper-quiet cooling system. Housed in a precision-milled aluminum chassis for ultimate portability and strength.'
  },
  {
    id: 'eg-2',
    name: 'Ultra-Slim Premium Smart Phone',
    category: 'Electronic Goods',
    price: 32900,
    image: '/images/electronic-2.jpg',
    description: 'The ultimate tool for the digital native. Featuring a 200MP camera system, an integrated stylus, and a titanium frame. Powered by a bespoke AI engine that optimizes everything from battery life to photo processing.'
  },
  {
    id: 'eg-3',
    name: 'Flagship Laptop',
    category: 'Electronic Goods',
    price: 109900,
    image: '/images/electronic-3.jpg',
    description: 'The ultimate tool for the digital native. Featuring a 200MP camera system, an integrated stylus, and a titanium frame. Powered by a bespoke AI engine that optimizes everything from battery life to photo processing.'
  },
  {
    id: 'eg-4',
    name: 'Pro Laptop Workstation',
    category: 'Electronic Goods',
    price: 64900,
    image: '/images/electronic-4.jpg',
    description: 'The canvas for the modern artist. This 12.9-inch tablet offers a liquid retina display and 512 pressure sensitivity levels with its precision pen. Perfect for professional illustrators, designers, and photo editors on the go.'
  },
  {
    id: 'eg-5',
    name: 'Titanium Edition Headphones',
    category: 'Electronic Goods',
    price: 44900,
    image: '/images/electronic-5.jpg',
    description: 'Elegance meets intelligence. Housed in aerospace-grade titanium with a custom leather strap, this smartwatch tracks advanced health metrics and offers seamless global connectivity. A sophisticated timepiece that powers your active lifestyle.'
  },
  {
    id: 'eg-6',
    name: 'Wireless Pro Audio Speaker',
    category: 'Electronic Goods',
    price: 24900,
    image: '/images/electronic-6.jpg',
    description: 'Room-filling sound from a minimalist design. This 360-degree speaker features acoustic lens technology and deep bass optimization. Connect multiple units for a wireless multi-room audio experience that doesn\'t compromise on quality.'
  },
  {
    id: 'eg-7',
    name: 'Mechanical Travel Headset',
    category: 'Electronic Goods',
    price: 12900,
    image: '/images/electronic-7.jpg',
    description: 'The typist\'s dream, made portable. Featuring low-profile tactile mechanical switches and multi-device bluetooth connectivity. Encased in a slim aluminum body, it provides a premium typing experience wherever you work.'
  },
  {
    id: 'eg-8',
    name: 'Ultra-Fast Tablet',
    category: 'Electronic Goods',
    price: 18900,
    image: '/images/electronic-8.jpg',
    description: 'Speed that matches your creative flow. With read speeds up to 2800MB/s, this Thunderbolt-compatible SSD handles 8K video editing with ease. Rugged, pocket-sized, and finished in a matte black titanium shell.'
  },
  {
    id: 'eg-9',
    name: 'Vivo v23',
    category: 'Electronic Goods',
    price: 189000,
    image: '/images/electronic-9.jpg',
    description: 'Cinematic storytelling in the palm of your hand. This full-frame mirrorless camera offers 10-bit internal recording and exceptional low-light performance. A professional-grade tool for filmmakers and high-end content creators.'
  },
  {
    id: 'eg-10',
    name: 'Macbook Pro',
    category: 'Electronic Goods',
    price: 54900,
    image: '/images/electronic-10.jpg',
    description: 'Enter a new dimension. Featuring dual 4K mini-LED displays and advanced hand-tracking technology. Whether for high-fidelity gaming or professional architectural visualization, Horizon Pro offers unparalleled immersion.'
  },
  {
    id: 'eg-11',
    name: 'Smartbook Laptop',
    category: 'Electronic Goods',
    price: 8900,
    image: '/images/laptop.png',
    description: 'Massive power, refined form. This 40,000mAh powerbank features 100W USB-C Power Delivery to laptop-level charging on the go. An integrated digital display shows precise charging status and remaining capacity.'
  },
  {
    id: 'eg-12',
    name: 'Wireless High-Precision Headeset',
    category: 'Electronic Goods',
    price: 11900,
    image: '/images/headphones.png',
    description: 'Ergonomic mastery for professional workflows. Featuring an 8K DPI sensor that tracks on any surface, including glass. Quiet clicks and a customizable thumb wheel allow for deep focus and maximum productivity.'
  },
  {
    id: 'eg-13',
    name: 'Oneplus 13R',
    category: 'Electronic Goods',
    price: 18900,
    image: '/images/smartphone.png',
    description: 'The ultimate truly wireless experience. Featuring adaptive noise cancellation and personalized EQ. These earbuds offer crystal clear calls via a 6-microphone array and a compact leather-wrapped charging case.'
  },
  {
    id: 'eg-14',
    name: 'Smart Touch Air Tablet',
    category: 'Electronic Goods',
    price: 38900,
    image: '/images/tablet.png',
    description: 'The future of wearable tech. These augmented reality glasses overlay digital information onto the real world. View navigation, notifications, and translations directly in your field of vision, all within a stylish frame.'
  },
  {
    id: 'eg-15',
    name: 'Pro SmartWatch',
    category: 'Electronic Goods',
    price: 89900,
    image: '/images/smartwatch.png',
    description: 'Bring your creative vision to life. This 32-inch 5K Retina display features nano-texture glass for reduced glare and a built-in 12MP ultra-wide camera for professional video conferencing. The ultimate canvas for designers.'
  },
  {
    id: 'eg-16',
    name: 'Handheld GLuxury Bag',
    category: 'Electronic Goods',
    price: 59900,
    image: '/images/briefcase.png',
    description: 'Uncompromised gaming on the move. Powered by a custom APU, this handheld features a 7-inch OLED 120Hz display and hall-effect joysticks for maximum precision. Play your entire PC library with desktop-level settings.'
  },
  {
    id: 'eg-17',
    name: 'Leather Duffle Bag',
    category: 'Electronic Goods',
    price: 24900,
    image: '/images/duffle.png',
    description: 'Professional audio for the digital age. This USB/XLR hybrid microphone features an integrated DSP for real-time vocal processing. Perfect for podcasting, streaming, and high-fidelity music recording.'
  },
  {
    id: 'eg-18',
    name: 'Compact Backpack',
    category: 'Electronic Goods',
    price: 74900,
    image: '/images/backpack.png',
    description: 'Aerial cinematography made simple. Featuring an 8K sensor, 45 minutes of flight time, and omnidirectional obstacle sensing. Folds down to the size of a water bottle for a tool that goes anywhere you do.'
  },
  {
    id: 'eg-19',
    name: 'Premium Wallet',
    category: 'Electronic Goods',
    price: 28900,
    image: '/images/wallet.png',
    description: 'A bookstore in your bag. This 10.3-inch e-ink reader allows for distraction-free reading and note-taking. Featuring a warm light adjustable screen and pressure-sensitive stylus for a natural writing experience.'
  },
  {
    id: 'eg-20',
    name: 'Docking Bag',
    category: 'Electronic Goods',
    price: 19900,
    image: '/images/messenger.png',
    description: 'The command center of your workspace. Single cable connectivity provides 90W charging and supports up to three 4K displays. Featuring 12 ports for a seamless transition from laptop to full workstation.'
  },
  {
    id: 'eg-21',
    name: 'High-Fidelity Mac',
    category: 'Electronic Goods',
    price: 38900,
    image: '/images/electronic-1.jpg',
    description: 'Breathe life into your audio. This digital-to-analog converter and amplifier reveals details in your music you never knew existed. Milled from a solid block of aluminum to eliminate electrical interference.'
  },
  {
    id: 'eg-22',
    name: 'Smart Phone Pro',
    category: 'Electronic Goods',
    price: 14900,
    image: '/images/electronic-2.jpg',
    description: 'The brain of your contemporary home. Featuring a 10-inch rotating display and integrated Zigbee/Matter support. Control your lights, security, and climate with intuitive voice and touch commands.'
  },
  {
    id: 'eg-23',
    name: 'Mackbook Pro',
    category: 'Electronic Goods',
    price: 9900,
    image: '/images/electronic-3.jpg',
    description: 'Power your ecosystem with elegance. This weighted leather and aluminum base charges your phone, watch, and earbuds simultaneously. A sophisticated solution for your bedside or office desk.'
  },
  {
    id: 'eg-24',
    name: 'Mackbook Pro',
    category: 'Electronic Goods',
    price: 54900,
    image: '/images/electronic-4.jpg',
    description: 'True sound representation. These active desktop speakers feature ribbon tweeters and 5-inch woofers for an accurate frequency response. Ideal for music producers and discerning listeners alike.'
  },
  {
    id: 'eg-25',
    name: 'Portable High-Res Headset',
    category: 'Electronic Goods',
    price: 64900,
    image: '/images/electronic-5.jpg',
    description: 'Pure music, anywhere. A dedicated audio player with dual DACs and balanced output. Skip the noisy phone circuitry and experience your Lossless library as the artist intended.'
  },
  {
    id: 'eg-26',
    name: 'Portable High-Res Headset 2',
    category: 'Electronic Goods',
    price: 18900,
    image: '/images/electronic-6.jpg',
    description: 'Look your best on every call. This 4K webcam features AI-powered framing, high dynamic range, and a glass optic lens for professional-grade video. Integrated noise-cancelling mics ensure your voice is as clear as your image.'
  },
  {
    id: 'eg-27',
    name: 'Smart Fitness Headset',
    category: 'Electronic Goods',
    price: 24900,
    image: '/images/electronic-7.jpg',
    description: 'Health tracking, simplified. This discreet titanium ring monitors your sleep, activity, and recovery 24/7. Long-lasting battery and water resistance up to 100 meters, syncs seamlessly with your devices.'
  },
  {
    id: 'eg-28',
    name: 'Mechanical Numpad Elite',
    category: 'Electronic Goods',
    price: 7900,
    image: '/images/electronic-8.jpg',
    description: 'The ultimate tool for data analysts. A dedicated wireless mechanical numpad with hot-swappable switches and a programmable dial. Enhance your productivity with a custom tactile experience.'
  },
  {
    id: 'eg-29',
    name: 'Pro SmartPhone',
    category: 'Electronic Goods',
    price: 12900,
    image: '/images/electronic-9.jpg',
    description: 'Control your broadcast with a touch. This console features 15 customizable LCD keys for launching apps, controlling audio, and changing scenes. A must-have for professional streamers and content creators.'
  },
  {
    id: 'eg-30',
    name: 'Macbook Pro',
    category: 'Electronic Goods',
    price: 24900,
    image: '/images/electronic-10.jpg',
    description: 'Unmatched clarity for critical communication. This headset combines pro-grade audio drivers with a broadcast-quality microphone. Perfect for remote collaboration in busy environments.'
  },
  {
    id: 'eg-31',
    name: 'Macbook',
    category: 'Electronic Goods',
    price: 64900,
    image: '/images/laptop.png',
    description: 'A 100-inch screen that fits in your pack. This 1080p projector features integrated smart TV apps and a 2-hour battery life. Turn any wall into a private cinema experience.'
  },
  {
    id: 'eg-32',
    name: 'Dual-Band Mesh Wi-FI Headeset',
    category: 'Electronic Goods',
    price: 48000,
    image: '/images/headphones.png',
    description: 'Eliminate dead zones with extreme speed. Our Wi-Fi 7 mesh system provides multi-gigabit coverage throughout your entire home. Sleek, minimalist nodes that blend into your decor.'
  },
  {
    id: 'eg-33',
    name: 'Smart Digital Phone',
    category: 'Electronic Goods',
    price: 19900,
    image: '/images/smartphone.png',
    description: 'Bring your memories to life. This 15-inch high-res display features an anti-glare finish that looks like real paper. Invite family members to share photos directly to the frame via the app.'
  },
  {
    id: 'eg-34',
    name: 'Professional XLR Tablet',
    category: 'Electronic Goods',
    price: 3500,
    image: '/images/tablet.png',
    description: 'Quality without compromise. Quad-core balanced cable with gold-plated connectors. Ensure your studio-grade equipment receives the cleanest signal possible.'
  },
  {
    id: 'eg-35',
    name: 'Pro SmartWatch',
    category: 'Electronic Goods',
    price: 32900,
    image: '/images/smartwatch.png',
    description: 'Master the light. A high-speed sync flash with an integrated radio trigger system. Powerful, reliable, and consistent performance for professional portrait and event photography.'
  },
  {
    id: 'eg-36',
    name: 'Leather Bookholder',
    category: 'Electronic Goods',
    price: 14900,
    image: '/images/briefcase.png',
    description: 'Freedom on stage. This digital wireless system offers uncompressed 24-bit audio with ultra-low latency. Plug and play simplicity for the performing musician.'
  },
  {
    id: 'eg-37',
    name: 'eather DuffleBag',
    category: 'Electronic Goods',
    price: 28900,
    image: '/images/duffle.png',
    description: 'Personalized meteorology. Monitor temperature, humidity, air quality, and wind speed with surgical precision. Data is synced to your phone and the indoor console for real-time local updates.'
  },
  {
    id: 'eg-38',
    name: 'Leather Backpack',
    category: 'Electronic Goods',
    price: 34900,
    image: '/images/backpack.png',
    description: 'Build your perfection. This hot-swappable keyboard base features an integrated OLED screen and a rotary encoder. Gasket-mounted for a premium typing sound and feel.'
  },
  {
    id: 'eg-39',
    name: 'Leather Wallet',
    category: 'Electronic Goods',
    price: 49900,
    image: '/images/wallet.png',
    description: 'Open-back headphones for critical mixing and mastering. These reference ears provide a vast soundstage and pinpoint accuracy, ensuring your audio translates perfectly to any system.'
  },
  {
    id: 'eg-40',
    name: 'Leather Side Bag',
    category: 'Electronic Goods',
    price: 39900,
    image: '/images/messenger.png',
    description: 'Unlock desktop power for your laptop. This eGPU enclosure features 85W laptop charging and support for the latest full-size graphic cards. Perfect for mobile professionals who need heavy rendering power at their desk.'
  },
  {
    id: 'eg-41',
    name: 'Smart Digital Laptop',
    category: 'Electronic Goods',
    price: 11900,
    image: '/images/electronic-1.jpg',
    description: 'Comprehensive health monitoring. Measures body fat, muscle mass, water percentage, and heart rate. Syncs with all major fitness apps to track your long-term wellness progress.'
  },
  {
    id: 'eg-42',
    name: 'Asus Rog Phone',
    category: 'Electronic Goods',
    price: 28900,
    image: '/images/electronic-2.jpg',
    description: 'Capture the moment in 32-bit float. This compact recorder features built-in X/Y mics and two combo inputs. Never worry about clipping or gain again with this professional field recording tool.'
  },
  {
    id: 'eg-43',
    name: 'Macbook',
    category: 'Home Electronics',
    price: 19900,
    image: '/images/electronic-3.jpg',
    description: 'Nature, automated. This hydroponic system features automated LED lighting and water circulation. Grow fresh herbs and greens in your kitchen year-round with zero effort.'
  },
  {
    id: 'eg-44',
    name: 'Macbook',
    category: 'Electronic Goods',
    price: 16900,
    image: '/images/electronic-4.jpg',
    description: 'Professional organization for your workspace. This thermal printer connects via Wi-Fi and prints high-resolution labels in seconds. No ink or toner required, just sleek efficiency.'
  },
  {
    id: 'eg-45',
    name: 'Desktop Audio Pro',
    category: 'Electronic Goods',
    price: 44900,
    image: '/images/electronic-5.jpg',
    description: 'The center of your home studio. Featuring boutique preamps and world-class conversion. Two inputs and four outputs provide the professional connectivity you need for recording and monitoring.'
  },

  // --- Home Electronics (20 items) ---
  { id: 'he-1', name: '75" 8K OLED Cinema TV', category: 'Home Electronics', price: 64900, image: '/images/tv.png', description: 'Experience the future of garment care. Our AI-driven washing machine analyzes fabric type and soil level to provide the perfect cycle every time. Ultra-quiet operation and A+++ energy efficiency make it as gentle on your home as it is on the environment.' },
  { id: 'he-2', name: 'Inverter Fridge', category: 'Home Electronics', price: 42900, image: '/images/refrigerator.png', description: 'Superior climate control with intelligence. This inverter AC maintains the perfect temperature with surgical precision while consuming 40% less energy. Featuring a medical-grade air purification filter to ensure your home remains a healthy sanctuary.' },
  { id: 'he-3', name: 'Smart Front-Load Washer', category: 'Home Electronics', price: 349900, image: '/images/washing-machine.png', description: 'Step into the picture. Our flagship 8K OLED TV features over 33 million self-lit pixels and an AI processor that upscales all content to near-8K quality. With integrated Dolby Atmos sound, it delivers an uncompromising home theater experience.' },
  { id: 'he-4', name: 'Luxury AC', category: 'Home Electronics', price: 189900, image: '/images/ac.png', description: 'The centerpiece of the contemporary kitchen. This French door refrigerator offers dual cooling systems and a flexible middle drawer for precise temperature control. Finished in fingerprint-resistant matte black with an integrated water and ice dispenser.' },
  { id: 'he-5', name: 'Robot Vacuum & Mop Max', category: 'Home Electronics', price: 44900, image: '/images/robot-vacuum.png', description: 'Spotless floors, automatically. This dual-function robot features Lidar mapping and AI obstacle avoidance. It automatically empties its bin and washes its mop pads, providing a truly hands-off cleaning experience for several weeks.' },
  { id: 'he-6', name: 'Mac Air', category: 'Home Electronics', price: 32900, image: '/images/laptop.png', description: 'Breathe easier. Our Elite air purifier captures 99.97% of airborne particles, including allergens and pollutants. Real-time air quality sensors automatically adjust the fan speed, and the minimalist design fits perfectly in any modern room.' },
  { id: 'he-7', name: 'Convection Pro', category: 'Home Electronics', price: 21900, image: '/images/headphones.png', description: 'Versatile cooking made simple. This premium microwave combines convection, grill, and microwave tech. Precision sensors ensure even heating for everything from quick snacks to complex roasts. Elegant touch controls and a ceramic interior.' },
  { id: 'he-8', name: 'Asus ROg Phone', category: 'Home Electronics', price: 89900, image: '/images/smartphone.png', description: 'Be your own barista. This dual-boiler espresso machine provides commercial-grade performance at home. Precise PID temperature control and a powerful steam wand ensure you get the perfect shot and silky micro-foam every single morning.' },
  { id: 'he-9', name: 'Smart Tablet', category: 'Home Electronics', price: 34900, image: '/images/tablet.png', description: 'Precision meet speed. Our induction cooktop boils water in seconds and offers exact temperature control for delicate sauces. Featuring an intuitive bridge mode for large pans and a sleek, easy-to-clean glass surface.' },
  { id: 'he-10', name: 'Heim-Cinema SmartWatch 7.1', category: 'Home Electronics', price: 64900, image: '/images/smartwatch.png', description: 'Sound that surrounds you. This 7.1.4 channel soundbar features up-firing drivers for true Dolby Atmos immersion. Calibrates to your room automatically to deliver crystal clear dialogue and earth-shaking bass without the wire clutter.' },
  { id: 'he-11', name: 'Leather Bag', category: 'Home Electronics', price: 84900, image: '/images/briefcase.png', description: 'Silent but powerful. This premium dishwasher operates at a near-inaudible 38dB. Featuring a 3rd rack for cutlery and high-temperature steam wash for surgical-level clean. Smart connectivity notifies you when the cycle is done.' },
  { id: 'he-17', name: 'High-Speed Blender Max Pro', category: 'Home Electronics', price: 18900, image: '/images/refrigerator.png', description: 'Power through any ingredient. With a 1500W professional-grade motor and stainless steel blades, this blender prepares everything from smoothies to hot soups in seconds. Sleek digital interface and automated cleaning cycle.' },
  { id: 'he-18', name: 'Smart Electric Kettle Elite', category: 'Home Electronics', price: 7900, image: '/images/washing-machine.png', description: 'The perfect brew starts here. Set your exact desired temperature for different types of tea or coffee. Features a keep-warm function for 30 minutes and a double-walled design that remains cool to the touch.' },
  { id: 'he-19', name: 'Luxury Wine Cooler Pro', category: 'Home Electronics', price: 115900, image: '/images/ac.png', description: 'Protect your collection. This dual-zone wine cooler stores up to 48 bottles at their specific ideal temperatures. Features UV-protected glass, vibration-dampening cooling, and elegant wooden sliding shelves.' },
  { id: 'he-20', name: 'Robot Lawn Mower S Pro', category: 'Home Electronics', price: 145900, image: '/images/robot-vacuum.png', description: 'A perfectly manicured lawn, every day. This GPS-guided robot mower handles slopes up to 45% and automatically returns to its dock when it rains. Whisper-quiet operation allows for night-time mowing without disturbing the neighbors.' },
];
