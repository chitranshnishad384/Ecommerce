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
    description: 'The definitive companion for the modern executive. Handcrafted from premium full-grain Italian leather, this briefcase features a padded 16-inch laptop compartment, brushed steel hardware, and a meticulously organized interior for your essential documents and tech accessories.'
  },
  {
    id: 'lb-2',
    name: 'Leather Weekend Duffle',
    category: 'Leather Bags',
    price: 28900,
    image: '/images/Leather/leather-bag-2.jpg',
    description: 'Travel in unparalleled style with our flagship duffle. Designed for 48-hour getaways, it offers a spacious main compartment, separate shoe compartment, and reinforced base. The vegetable-tanned leather develops a beautiful unique patina over time, telling the story of your journeys.'
  },
  {
    id: 'lb-3',
    name: 'Minimalist Leather Backpack',
    category: 'Leather Bags',
    price: 15900,
    image: '/images/Leather/leather-bag-3.jpg',
    description: 'A seamless blend of urban versatility and classic luxury. This minimalist backpack features hidden magnetic closures, a slim profile, and ergonomic straps. Crafted for the daily commute, it protects your laptop while maintaining a sophisticated silhouette.'
  },
  {
    id: 'lb-4',
    name: 'Slim Leather Wallet',
    category: 'Leather Bags',
    price: 6400,
    image: '/images/Leather/leather-bag-4.jpg',
    description: 'The pinnacle of minimalist carry. Our slim bi-fold wallet is engineered to reduce bulk without sacrificing capacity. Featuring RFID-blocking technology and six precision-cut card slots, it is handcrafted from the finest top-grain leather.'
  },
  {
    id: 'lb-5',
    name: 'Vintage Messenger Bag',
    category: 'Leather Bags',
    price: 17900,
    image: '/images/Leather/leather-bag-5.jpg',
    description: 'Inspired by traditional postal bags, updated for today. This vintage-treated leather messenger bag accommodates an 11-inch tablet and features brass hardware and a rugged canvas lining. Perfect for the professional who values heritage and functionality.'
  },
  {
    id: 'lb-6',
    name: 'Premium Leather Tote',
    category: 'Leather Bags',
    price: 14500,
    image: '/images/Leather/leather-bag-6.jpg',
    description: 'An elegant solution for everyday essentials. This spacious tote bag is crafted from pebble-grain leather and features an internal zip pocket for valuables. Its timeless design ensures it transitions perfectly from work meetings to weekend outings.'
  },
  {
    id: 'lb-7',
    name: 'Leather Tech Pouch',
    category: 'Leather Bags',
    price: 4900,
    image: '/images/Leather/leather-bag-7.jpg',
    description: 'Elevate your organization. This compact pouch is designed to house your cables, chargers, and small tech accessories. Genuine leather exterior and elastic internal organizers provide a sophisticated home for your digital lifecycle.'
  },
  {
    id: 'lb-8',
    name: 'Handcrafted Leather Belt',
    category: 'Leather Bags',
    price: 7500,
    image: '/images/Leather/leather-bag-8.jpg',
    description: 'A staple of any refined wardrobe. Our belts are cut from a single piece of thick full-grain leather and finished with a solid brass buckle. Hand-burnished edges and a subtle embossed logo signify true quality.'
  },
  {
    id: 'lb-9',
    name: 'Leather Card Holder',
    category: 'Leather Bags',
    price: 3900,
    image: '/images/Leather/leather-bag-9.jpg',
    description: 'Designed for the true minimalist. This ultra-slim card holder features three slots and a central pocket for folded cash. Perfect for evening events or when you only need the bare essentials, crafted from smooth Nappa leather.'
  },
  {
    id: 'lb-10',
    name: 'Classic Leather Satchel',
    category: 'Leather Bags',
    price: 16900,
    image: '/images/Leather/leather-bag-10.jpg',
    description: 'A heritage design reimagined for the 21st century. This handcrafted leather satchel features a structured design, traditional buckle closures, and a removable shoulder strap. It comfortably fits a 13-inch laptop and your daily notepad.'
  },
  {
    id: 'lb-11',
    name: 'Leather Travel Kit',
    category: 'Leather Bags',
    price: 8500,
    image: '/images/Leather/leather-bag-11.jpg',
    description: 'The ultimate travel companion for the well-groomed man. Our leather wash bag features a waterproof lining, internal mesh pockets, and a wide-mouth opening for easy access to your grooming essentials.'
  },
  {
    id: 'lb-12',
    name: 'Leather Camera Bag',
    category: 'Leather Bags',
    price: 14900,
    image: '/images/Leather/leather-bag-12.jpg',
    description: 'Luxury protection for your creative gear. This padded leather bag is designed for mirrorless or compact DSLR cameras. Featuring adjustable internal dividers and external pockets for memory cards and batteries.'
  },
  {
    id: 'lb-13',
    name: 'Artisan Business Portfolio',
    category: 'Leather Bags',
    price: 11900,
    image: '/images/Leather/leather-bag-13.jpg',
    description: 'Make a statement in the boardroom. This elegant A4 portfolio features a dedicated tablet sleeve, pen loops, and card slots. Hand-stitched leather and premium YKK zippers ensure a lifetime of professional service.'
  },
  {
    id: 'lb-14',
    name: 'Urban Crossbody Pro',
    category: 'Leather Bags',
    price: 9900,
    image: '/images/Leather/messenger.png',
    description: 'The ultimate cross-body bag for the urban explorer. This sleek sling bag offers quick-access pockets, an adjustable strap for left or right carry, and a weather-resistant leather finish. Ideal for keeping your pockets empty and your hands free.'
  },
  {
    id: 'lb-15',
    name: 'Nomad Passport Cover',
    category: 'Leather Bags',
    price: 3500,
    image: '/images/Leather/wallet.png',
    description: 'Protect your window to the world. Our passport covers are handcrafted from soft, supple leather and feature additional slots for boarding passes and frequent flyer cards. A sophisticated essential for global travelers.'
  },
  {
    id: 'lb-16',
    name: 'Silent Key Organizer',
    category: 'Leather Bags',
    price: 3200,
    image: '/images/Leather/wallet.png',
    description: 'Silence the jingle. This elegant leather organizer holds up to 7 keys in a quiet, compact stack. Prevent scratches on your phone and other essentials while adding a touch of luxury to your daily carry.'
  },
  {
    id: 'lb-17',
    name: 'Command Briefcase X',
    category: 'Leather Bags',
    price: 25900,
    image: '/images/Leather/briefcase.png',
    description: 'An evolution of our most popular design. The X features an updated internal layout, reinforced stress points, and a hidden trolley sleeve for effortless travel. Crafted from heavy-duty leather that stands up to the rigors of travel.'
  },
  {
    id: 'lb-18',
    name: 'Petite Luxury Crossbody',
    category: 'Leather Bags',
    price: 10900,
    image: '/images/Leather/messenger.png',
    description: 'Compact elegance for your daily ventures. Perfectly sized for a smartphone, wallet, and keys, this mini crossbody bag is the embodiment of minimalist luxury. Features an adjustable strap and a secure magnetic flap.'
  },
  {
    id: 'lb-19',
    name: 'Artisan Woven Duffle',
    category: 'Leather Bags',
    price: 39900,
    image: '/images/Leather/duffle.png',
    description: 'A masterpiece of artisanal craftsmanship. Each bag is meticulously handwoven from strips of premium calfskin leather, creating a unique texture that is both soft and durable. A limited production piece for the true connoisseur.'
  },
  {
    id: 'lb-20',
    name: 'Grand Expedition Duffle',
    category: 'Leather Bags',
    price: 34900,
    image: '/images/Leather/duffle.png',
    description: 'Our most expansive luggage piece. The Grand Expedition is designed for extended trips, offering maximum capacity without compromising on airline carry-on requirements. Handcrafted from heavy pebbled leather with reinforced corners.'
  },

  // --- Electronic Goods (45 items) ---
  {
    id: 'eg-1',
    name: 'Zenith Pro 14 Laptop',
    category: 'Electronic Goods',
    price: 124900,
    image: '/images/Laptop.jpg',
    description: 'The ultimate workstation for professionals. Equipped with an cutting-edge processor and a stunning color-accurate display, this laptop is designed to handle the most demanding creative tasks with effortless grace.'
  },
  {
    id: 'eg-2',
    name: 'Vortex Alpha Smartphone',
    category: 'Electronic Goods',
    price: 32900,
    image: '/images/Phone.jpg',
    description: 'Experience the future of connectivity. The Vortex Alpha features a revolutionary neural camera system, ultra-fast charging, and a beautiful bezel-less display that fits perfectly in your hand.'
  },
  {
    id: 'eg-3',
    name: 'Stellar View Tablet Pro',
    category: 'Electronic Goods',
    price: 109900,
    image: '/images/Tablet.jpg',
    description: 'Bring your ideas to life on the Stellar View. This high-performance tablet offers a massive canvas with incredibly precise touch response, making it the perfect choice for artists, architects, and designers.'
  },
  {
    id: 'eg-4',
    name: 'OmniBook Pro X',
    category: 'Electronic Goods',
    price: 64900,
    image: '/images/Laptop (2).jpg',
    description: 'The OmniBook Pro X is a masterclass in versatility. Featuring a stunning 360-degree hinge, a high-fidelity touchscreen, and a super-fast processor, it adapts to your work and play with ease.'
  },
  {
    id: 'eg-5',
    name: 'PureAudio Studio Max',
    category: 'Electronic Goods',
    price: 44900,
    image: '/images/Headphone.jpg',
    description: 'Experience audio in its purest form. These studio-grade headphones feature custom-tuned drivers and comfortable memory foam cushions, perfect for marathon listening sessions and precise audio mixing.'
  },
  {
    id: 'eg-6',
    name: 'ClearComm Business Headset',
    category: 'Electronic Goods',
    price: 24900,
    image: '/images/Headeset.jpg',
    description: 'The ClearComm is built for the professional who needs crystal-clear audio. With its noise-cancelling microphone and all-day comfort, it is the perfect headset for long meetings and important calls.'
  },
  {
    id: 'eg-7',
    name: 'AeroStream 13 Ultrabook',
    category: 'Electronic Goods',
    price: 12900,
    image: '/images/Laptop (3).jpg',
    description: 'Power meets portability. The AeroStream 13 features a feather-light aluminum chassis and a powerful processor that delivers exceptional performance for its size, making it the ideal travel companion.'
  },
  {
    id: 'eg-8',
    name: 'Nexus Pad Slate',
    category: 'Electronic Goods',
    price: 18900,
    image: '/images/Tablet (2).jpg',
    description: 'The Nexus Pad Slate is designed for maximum productivity. With its high-resolution display and ultra-fast storage, it handles everything from complex calculations to intensive creative projects with ease.'
  },
  {
    id: 'eg-9',
    name: 'Horizon Z1 Phone',
    category: 'Electronic Goods',
    price: 189000,
    image: '/images/Phone (2).jpg',
    description: 'The Horizon Z1 is more than just a phone; it is a gateway to the future. With its advanced AI integration and stunning display, it redefine what a mobile device can do for your lifestyle.'
  },
  {
    id: 'eg-10',
    name: 'Titan Core Gaming Laptop',
    category: 'Electronic Goods',
    price: 54900,
    image: '/images/Laptop (4).jpg',
    description: 'Unleash your gaming potential. The Titan Core is built with the latest graphics technology and advanced cooling systems, providing a smooth and immersive gaming experience even in the most intense sessions.'
  },
  {
    id: 'eg-11',
    name: 'SonicBoom Gear V2',
    category: 'Electronic Goods',
    price: 8900,
    image: '/images/Headset.jpg',
    description: 'Feel every beat with the SonicBoom Gear V2. These headphones deliver powerful bass and crystal-clear highs, and their wireless design gives you the freedom to move as much as you want while you enjoy your music.'
  },
  {
    id: 'eg-12',
    name: 'ChatPro Elite Headset',
    category: 'Electronic Goods',
    price: 11900,
    image: '/images/Headset (2).jpg',
    description: 'The ChatPro Elite is designed for those who demand the best in communication. With its industry-leading noise cancellation and superior audio quality, it makes every conversation feel like a face-to-face meeting.'
  },
  {
    id: 'eg-13',
    name: 'Stealth Gaming Cans',
    category: 'Electronic Goods',
    price: 18900,
    image: '/images/Headset (3).jpg',
    description: 'Hear your enemies before they see you. The Stealth Gaming Cans provide immersive spatial audio and a lightweight design that keeps you comfortable even during long gaming sessions.'
  },
  {
    id: 'eg-14',
    name: 'Visionary 2nd Gen Tablet',
    category: 'Electronic Goods',
    price: 38900,
    image: '/images/Tablet (3).jpg',
    description: 'The Visionary 2nd Gen Tablet is the ultimate canvas for your creativity. With its large, ultra-sharp display and responsive touch interface, it allows you to see your ideas in more detail than ever before.'
  },
  {
    id: 'eg-15',
    name: 'Elite Audio Cans X',
    category: 'Electronic Goods',
    price: 89900,
    image: '/images/Headset (4).jpg',
    description: 'Elite Audio Cans X deliver a truly professional sound experience. With their large drivers and open-back design, they offer an expansive soundstage that is perfect for audiophiles and audio engineers alike.'
  },
  {
    id: 'eg-16',
    name: 'Fusion Gaming Handheld',
    category: 'Electronic Goods',
    price: 59900,
    image: '/images/Laptop (2).jpg',
    description: 'The Fusion Gaming Handheld brings desktop-class gaming to the palm of your hands. Featuring a revolutionary integrated GPU and a high-refresh OLED screen, it is the ultimate device for gaming on the move.'
  },
  {
    id: 'eg-17',
    name: 'Sonic Studio Hybrid Mike',
    category: 'Electronic Goods',
    price: 24900,
    image: '/images/Headset (3).jpg',
    description: 'Engineered for the modern creator, the Sonic Studio Mike offers both USB and XLR connectivity. Whether you are podcasting from home or recording in a professional studio, it delivers warm, detailed audio every time.'
  },
  {
    id: 'eg-18',
    name: 'SkyEye 8K Cinewhoop',
    category: 'Electronic Goods',
    price: 74900,
    image: '/images/Laptop (3).jpg',
    description: 'Capture the world from a new perspective. The SkyEye is a compact, high-performance drone that features a stabilized 8K camera and advanced autonomous flight modes, making professional aerial cinematography accessible to everyone.'
  },
  {
    id: 'eg-19',
    name: 'InkFlow E-Reader Max',
    category: 'Electronic Goods',
    price: 28900,
    image: '/images/Tablet (2).jpg',
    description: 'The InkFlow Max is the perfect companion for avid readers. Its massive E-Ink display provides a paper-like reading experience even in direct sunlight, and its integrated stylus allows you to take notes directly on the page.'
  },
  {
    id: 'eg-20',
    name: 'OmniPort 12-in-1 Dock',
    category: 'Electronic Goods',
    price: 19900,
    image: '/images/Laptop (4).jpg',
    description: 'Transform your laptop into a full workstation with a single cable. The OmniPort provides high-speed charging, multiple 4K display outputs, and a plethora of ports for all your peripherals and accessories.'
  },
  {
    id: 'eg-21',
    name: 'Precision Desk Tower',
    category: 'Electronic Goods',
    price: 38900,
    image: '/images/Laptop.jpg',
    description: 'The Precision Desk Tower is designed for high-performance computing in a compact form factor. Reliable, quiet, and powerful, it is the ideal choice for developers and data analysts who need consistency.'
  },
  {
    id: 'eg-22',
    name: 'SwiftLink Mobile Pro',
    category: 'Electronic Goods',
    price: 14900,
    image: '/images/Phone.jpg',
    description: 'Stay connected wherever you go with the SwiftLink Mobile Pro. This robust smartphone offers exceptional battery life and a crystal-clear communication experience, perfect for professionals on the move.'
  },
  {
    id: 'eg-23',
    name: 'UltraCore 15 Laptop',
    category: 'Electronic Goods',
    price: 9900,
    image: '/images/Laptop (2).jpg',
    description: 'The UltraCore 15 defines the next generation of portable computing. With its ultra-slim profile and incredible energy efficiency, it provides a seamless experience for everyday tasks and casual creative work.'
  },
  {
    id: 'eg-24',
    name: 'Graphix Pro Studio Laptop',
    category: 'Electronic Goods',
    price: 54900,
    image: '/images/Laptop (3).jpg',
    description: 'Designed for the visual enthusiast, the Graphix Pro features a color-calibrated display and dedicated graphics hardware, making it the perfect choice for photo editing and graphic design.'
  },
  {
    id: 'eg-25',
    name: 'SonicStream Wireless Buds',
    category: 'Electronic Goods',
    price: 64900,
    image: '/images/Headset.jpg',
    description: 'Immerse yourself in rich, wireless sound with SonicStream. These earbuds offer adaptive noise cancellation and an incredibly long battery life, ensuring your music stays with you all day long.'
  },
  {
    id: 'eg-26',
    name: 'ClearVoice Studio Cam',
    category: 'Electronic Goods',
    price: 18900,
    image: '/images/Tablet.jpg',
    description: 'Look your best in every video conference. The ClearVoice Studio Cam offers high-definition video and AI-powered light correction, ensuring you always appear professional regardless of your environment.'
  },
  {
    id: 'eg-27',
    name: 'HealthSync Smart Watch',
    category: 'Electronic Goods',
    price: 24900,
    image: '/images/smartwatch.png',
    description: 'Track your fitness and stay on top of your day with HealthSync. This sleek smartwatch monitors your heart rate, sleep, and activity, providing valuable insights to help you live a healthier life.'
  },
  {
    id: 'eg-28',
    name: 'Tactile Pro Numpad',
    category: 'Electronic Goods',
    price: 7900,
    image: '/images/laptop.png',
    description: 'Enhance your productivity with the Tactile Pro Numpad. Featuring high-quality mechanical switches and a programmable interface, it is the perfect tool for data entry and complex calculations.'
  },
  {
    id: 'eg-29',
    name: 'Galaxy Vision Phone X',
    category: 'Electronic Goods',
    price: 12900,
    image: '/images/Phone (2).jpg',
    description: 'Experience a new world of mobile technology with the Galaxy Vision. With its stunning foldable display and advanced camera system, it pushes the boundaries of what a smartphone can be.'
  },
  {
    id: 'eg-30',
    name: 'QuietFocus Pro Headset',
    category: 'Electronic Goods',
    price: 24900,
    image: '/images/Headset (2).jpg',
    description: 'Block out the world and focus on what matters. The QuietFocus Pro provides industry-leading noise cancellation and superior audio quality, making it the perfect companion for work and travel.'
  },
  {
    id: 'eg-31',
    name: 'CinemaGlide Portable Projector',
    category: 'Electronic Goods',
    price: 64900,
    image: '/images/tv.png',
    description: 'Turn any space into a private cinema. The CinemaGlide is a compact, high-definition projector that offers vibrant colors and deep contrast, perfect for movie nights and professional presentations.'
  },
  {
    id: 'eg-32',
    name: 'MeshLink Wi-Fi 7 Hub',
    category: 'Electronic Goods',
    price: 48000,
    image: '/images/laptop.png',
    description: 'Say goodbye to dead zones with the MeshLink. This advanced Wi-Fi 7 hub provides lightning-fast connectivity and wide coverage, ensuring everyone in your home stays connected without interruption.'
  },
  {
    id: 'eg-33',
    name: 'VividView Digital Frame',
    category: 'Electronic Goods',
    price: 19900,
    image: '/images/tablet.png',
    description: 'Bring your memories to life with the VividView. This high-resolution digital frame allows you to display your favorite photos in stunning detail, and its elegant design complements any room in your home.'
  },
  {
    id: 'eg-34',
    name: 'StudioConnect Audio Interface',
    category: 'Electronic Goods',
    price: 3500,
    image: '/images/headphones.png',
    description: 'The StudioConnect offers professional audio quality in a compact and easy-to-use interface. Reliable and versatile, it is the perfect choice for anyone looking to record high-quality audio at home.'
  },
  {
    id: 'eg-35',
    name: 'FlashMaster Pro Unit',
    category: 'Electronic Goods',
    price: 32900,
    image: '/images/smartphone.png',
    description: 'Master the art of photography with the FlashMaster. This powerful and versatile flash unit provides consistent lighting for any situation, ensuring your shots always look their absolute best.'
  },
  {
    id: 'eg-36',
    name: 'Cordless Guitar Link',
    category: 'Electronic Goods',
    price: 14900,
    image: '/images/Headset (4).jpg',
    description: 'Experience true freedom on stage with the Cordless Guitar Link. This high-performance wireless system offers latency-free audio and a robust connection, allowing you to perform without being tied down.'
  },
  {
    id: 'eg-37',
    name: 'EnviroWatch Weather Station',
    category: 'Electronic Goods',
    price: 28900,
    image: '/images/refrigerator.png',
    description: 'Stay ahead of the weather with EnviroWatch. This advanced station provides accurate, real-time data on temperature, humidity, and more, helping you plan your day with confidence.'
  },
  {
    id: 'eg-38',
    name: 'CustomClick Mechanical Board',
    category: 'Electronic Goods',
    price: 34900,
    image: '/images/laptop.png',
    description: 'The CustomClick is designed for the keyboard enthusiast. Featuring high-quality mechanical switches and a customizable layout, it provides a premium typing experience and uncompromised performance.'
  },
  {
    id: 'eg-39',
    name: 'PureReference Studio Ears',
    category: 'Electronic Goods',
    price: 49900,
    image: '/images/headphones.png',
    description: 'Hear every nuance of your audio with the PureReference Studio Ears. These headphones offer a balanced and accurate frequency response, making them the perfect choice for critical listening and professional audio work.'
  },
  {
    id: 'eg-40',
    name: 'TurboBoost eGPU Station',
    category: 'Electronic Goods',
    price: 39900,
    image: '/images/Laptop (2).jpg',
    description: 'Give your laptop a massive performance boost with the TurboBoost eGPU. Engineered for the demanding creative professional, it provides the extra graphics power you need for rendering, editing, and more.'
  },
  {
    id: 'eg-41',
    name: 'VitalTrack AI Smart Scale',
    category: 'Electronic Goods',
    price: 11900,
    image: '/images/smartphone.png',
    description: 'Monitor your health with precision. The VitalTrack uses advanced bio-impedance sensors to provide detailed insights into your body composition, and it syncs seamlessly with your smartphone to track your progress over time.'
  },
  {
    id: 'eg-42',
    name: 'MasterRec Field Recorder',
    category: 'Electronic Goods',
    price: 28900,
    image: '/images/Headeset.jpg',
    description: 'Capture pristine audio wherever you go. The MasterRec features studio-quality preamps and an intuitive interface that makes it easy to record everything from interviews to live performances in high-resolution detail.'
  },
  {
    id: 'eg-43',
    name: 'GreenGrow automated Hub',
    category: 'Electronic Goods',
    price: 19900,
    image: '/images/tablet.png',
    description: 'Grow a lush garden indoors with zero effort. The GreenGrow Hub uses AI to optimize lighting, watering, and nutrients for your plants, ensuring they thrive year-round regardless of the weather outside.'
  },
  {
    id: 'eg-44',
    name: 'PrintSwift Thermal Pro',
    category: 'Electronic Goods',
    price: 16900,
    image: '/images/laptop.png',
    description: 'Say goodbye to ink and toner. The PrintSwift uses advanced thermal technology to produce high-resolution labels and documents in seconds, making it the perfect choice for busy home offices and small businesses.'
  },
  {
    id: 'eg-45',
    name: 'Corelink Audio Interface',
    category: 'Electronic Goods',
    price: 44900,
    image: '/images/headphones.png',
    description: 'The bridge between your creativity and your computer. The Corelink offers ultra-low latency, pristine preamps, and a versatile range of inputs and outputs, providing everything you need for professional home recording.'
  },

  // --- Home Electronics (20 items) ---
  { id: 'he-1', name: 'Ultra-Quiet Series 9 Washer', category: 'Home Electronics', price: 64900, image: '/images/washing-machine.png', description: 'Experience the ultimate in garment care. The Series 9 uses AI to detect fabric types and adjust cycles automatically, while its dampening system ensures near-silent operation even during high-speed spins.' },
  { id: 'he-2', name: 'Smart Inverter Plus AC', category: 'Home Electronics', price: 42900, image: '/images/ac.png', description: 'Maintain the perfect climate with ease. The Smart Inverter Plus offers surgical temperature control and advanced air filtration, and its energy-efficient design helps you stay cool while saving on your utility bills.' },
  { id: 'he-3', name: '8K OLED Cinema Display TV', category: 'Home Electronics', price: 349900, image: '/images/tv.png', description: 'Step into a world of breathtaking detail with our 8K OLED TV. Featuring self-lit pixels and an advanced AI processor, it delivers unparalleled contrast, color accuracy, and cinematic depth for an immersive home theater experience.' },
  { id: 'he-4', name: 'FreshFlow French Door Fridge', category: 'Home Electronics', price: 189900, image: '/images/refrigerator.png', description: 'The ultimate center for your kitchen. The FreshFlow features customizable cooling zones and a dedicated drawer for delicate produce, ensuring your groceries stay fresh for longer while its sleek design enhances your home decor.' },
  { id: 'he-5', name: 'CleanSweep Robot Vacuum Pro', category: 'Home Electronics', price: 44900, image: '/images/Robot Vaccum.jpg', description: 'Take back your weekends. The CleanSweep uses advanced Lidar mapping to navigate your home with precision, automatically adjusting its suction for different floor types and emptying itself so you dont have to.' },
  { id: 'he-6', name: 'Electric Mop Elite X', category: 'Home Electronics', price: 32900, image: '/images/Electric Mop.jpg', description: 'Make floor cleaning a breeze. The Elite X features dual spinning brushes and an integrated spray system to tackle tough stains with ease, and its cordless design gives you the freedom to reach every corner of your home.' },
  { id: 'he-7', name: 'WaveSense Convection Oven', category: 'Home Electronics', price: 21900, image: '/images/tv.png', description: 'Cook like a pro with WaveSense. This versatile convection oven uses precise sensor technology to ensure even heating for everything from delicate pastries to hearty roasts, providing perfect results every single time.' },
  { id: 'he-8', name: 'AromaElite Espresso Machine', category: 'Home Electronics', price: 89900, image: '/images/refrigerator.png', description: 'Experience the art of coffee at home. The AromaElite features a professional-grade pressure system and an integrated milk frother, allowing you to create your favorite barista-quality drinks with just a touch of a button.' },
  { id: 'he-9', name: 'SenseTouch Induction Cooktop', category: 'Home Electronics', price: 34900, image: '/images/washing-machine.png', description: 'The future of cooking is here. SenseTouch offers instant heat and precise control, making it easier and safer to prepare your favorite meals, and its smooth glass surface is incredibly easy to clean after you are done.' },
  { id: 'he-10', name: 'AuraSurround 7.1 Soundbar', category: 'Home Electronics', price: 64900, image: '/images/ac.png', description: 'Bring the cinema home with AuraSurround. This powerful 7.1 channel system delivers immersive audio that wraps around you, making every movie night and gaming session feel like a professional theater experience.' },
  { id: 'he-11', name: 'SilentWash Series 7 Dishwasher', category: 'Home Electronics', price: 84900, image: '/images/robot-vacuum.png', description: 'Get a sparkling clean without the noise. The Series 7 operates so quietly you might forget it is even on, and its flexible rack system allows you to easily fit everything from oversized pots to delicate glassware.' },
  { id: 'he-17', name: 'PowerBlend Pro Station', category: 'Home Electronics', price: 18900, image: '/images/refrigerator.png', description: 'The ultimate tool for the healthy kitchen. PowerBlend features a high-performance motor and precision blades that can handle everything from frozen fruits to tough leafy greens, providing smooth and consistent results every time.' },
  { id: 'he-18', name: 'PureTemp Smart Kettle', category: 'Home Electronics', price: 7900, image: '/images/washing-machine.png', description: 'Brew the perfect cup every time. PureTemp allows you to set the exact temperature for different types of tea and coffee, and its insulated design keeps your water hot for longer while remaining cool to the touch.' },
  { id: 'he-19', name: 'Vintage Cellar Wine Cooler', category: 'Home Electronics', price: 115900, image: '/images/ac.png', description: 'Protect your wine collection with the Vintage Cellar. Featuring precise temperature and humidity control, UV-protected glass, and vibration-dampening technology, it provides the ideal environment for aging and storing your favorite bottles.' },
  { id: 'he-20', name: 'AutoMow Robotic Lawn Station', category: 'Home Electronics', price: 145900, image: '/images/robot-vacuum.png', description: 'Enjoy a perfectly manicured lawn without lifting a finger. AutoMow uses GPS guidance to maintain your yard with precision, and its smart sensors allow it to navigate around obstacles and even return to its charging station when it rains.' },
];
