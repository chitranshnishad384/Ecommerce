export interface Product {
  id: string;
  name: string;
  category: 'Leather Bags' | 'Electronic Goods' | 'Home Electronics';
  price: number;
  description: string;
  image: string;
  images?: string[];
}

export const products: Product[] = [

  // --- Leather Bags ---
  {
    id: 'lb-2',
    name: 'HAMMONDS FLYCATCHER Genuine Leather Office Bag',
    category: 'Leather Bags',
    price: 4399,
    image: 'https://m.media-amazon.com/images/I/81oDX2BJoqL._AC_SL500_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/81oDX2BJoqL._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/819yREAmanL._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/71sEAzKpQnL._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/818G1ErGG+L._AC_SL500_.jpg',
    ],
    description: 'HAMMONDS FLYCATCHER genuine leather office bag with a spacious padded 16" laptop compartment, brass zip pulls, multiple interior pockets, and a trolley sleeve — crafted for the modern professional.'
  },
  {
    id: 'lb-5',
    name: 'Fur Jaden Brown Textured Leatherette Duffle Bag',
    category: 'Leather Bags',
    price: 839,
    image: 'https://m.media-amazon.com/images/I/71-8gqDAalL._AC_SL500_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/71-8gqDAalL._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/71AtHuUWe5L._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/81RtwUjQiFL._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/71T0fZi6uML._AC_SL500_.jpg',
    ],
    description: 'Fur Jaden Brown textured leatherette duffle bag perfect for short trips and gym. Features a large main compartment, exterior zip pocket, detachable adjustable shoulder strap, and sturdy carry handles.'
  },
  {
    id: 'lb-6',
    name: 'Red Lemon Swiss Cut Design Laptop Backpack',
    category: 'Leather Bags',
    price: 1795,
    image: 'https://m.media-amazon.com/images/I/61o3NqZ+13L._AC_SL500_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/61o3NqZ+13L._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/818G1ErGG+L._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/819yREAmanL._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/71sEAzKpQnL._AC_SL500_.jpg',
    ],
    description: 'Red Lemon Swiss Cut Design laptop backpack in premium PU leather. Features a padded 15.6" laptop sleeve, anti-theft back pocket, USB charging port, waterproof base, and multiple organizer pockets.'
  },
  {
    id: 'lb-7',
    name: 'FUR JADEN Vegan Leather Laptop Backpack',
    category: 'Leather Bags',
    price: 1899,
    image: 'https://m.media-amazon.com/images/I/710-6xeKTcL._AC_SL500_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/710-6xeKTcL._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/715ixGc6DZL._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/81Bdhfm7UuL._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/71X+ke2huIL._AC_SL500_.jpg',
    ],
    description: 'FUR JADEN premium vegan leather laptop backpack with padded 15.6" sleeve, external USB port, anti-theft back pocket, multiple compartments, and a water-resistant leatherette exterior.'
  },
  {
    id: 'lb-10',
    name: 'RIONTO Prime 15.6" Laptop Messenger Bag',
    category: 'Leather Bags',
    price: 1579,
    image: 'https://m.media-amazon.com/images/I/71sEAzKpQnL._AC_SL500_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/71sEAzKpQnL._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/61o3NqZ+13L._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/81oDX2BJoqL._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/818G1ErGG+L._AC_SL500_.jpg',
    ],
    description: 'RIONTO Prime laptop messenger bag in premium PU leather. Features a padded 15.6" laptop sleeve, front organizer panel with pen holders, adjustable cross-body strap, and multiple interior pockets.'
  },
  {
    id: 'lb-11',
    name: 'Leather World Vegan Leather Office Briefcase',
    category: 'Leather Bags',
    price: 898,
    image: 'https://m.media-amazon.com/images/I/819yREAmanL._AC_SL500_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/819yREAmanL._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/81oDX2BJoqL._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/61o3NqZ+13L._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/71sEAzKpQnL._AC_SL500_.jpg',
    ],
    description: 'Leather World vegan leather office briefcase with a padded laptop compartment, front zip pocket, dual top carry handles, and a trolley strap — a smart, professional choice for office commutes.'
  },
  {
    id: 'lb-14',
    name: 'FUR JADEN 15.6" Premium Vegan Leather Backpack',
    category: 'Leather Bags',
    price: 1099,
    image: 'https://m.media-amazon.com/images/I/715ixGc6DZL._AC_SL500_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/715ixGc6DZL._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/710-6xeKTcL._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/71X+ke2huIL._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/81f-vgvSvIL._AC_SL500_.jpg',
    ],
    description: 'FUR JADEN 15.6" vegan leather backpack with padded laptop sleeve, anti-theft back pocket, USB charging port, organizer front pocket, and water-resistant leatherette — a great everyday carry.'
  },
  {
    id: 'lb-16',
    name: 'F Gear Luxur 25L Medium Laptop Backpack',
    category: 'Leather Bags',
    price: 909,
    image: 'https://m.media-amazon.com/images/I/81RtwUjQiFL._AC_SL500_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/81RtwUjQiFL._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/81Bdhfm7UuL._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/71T0fZi6uML._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/519MZPOuITL._AC_SL500_.jpg',
    ],
    description: 'F Gear Luxur 25L laptop backpack in premium PU leather finish. Dedicated 15.6" laptop sleeve, front organizer pocket, side water-bottle pocket, and a padded back panel for all-day comfort.'
  },
  {
    id: 'lb-19',
    name: 'Lifelong Leatherette Weekender Duffle Bag',
    category: 'Leather Bags',
    price: 599,
    image: 'https://m.media-amazon.com/images/I/71AtHuUWe5L._AC_SL500_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/71AtHuUWe5L._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/71-8gqDAalL._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/71T0fZi6uML._AC_SL500_.jpg',
      'https://m.media-amazon.com/images/I/81RtwUjQiFL._AC_SL500_.jpg',
    ],
    description: 'Lifelong leatherette weekender duffle with a large main zip compartment, front zip pocket, detachable adjustable shoulder strap, and reinforced carry handles — great for weekend trips and gym use.'
  },

  // --- Electronic Goods ---

  // LAPTOPS
  {
    id: 'eg-1',
    name: 'Dell 15 13th Gen Intel Core i5-1334U (16GB/1TB SSD)',
    category: 'Electronic Goods',
    price: 66906,
    image: 'https://m.media-amazon.com/images/I/611DLBKu8JL._AC_SL500_.jpg',
    description: 'Dell 15 with 13th Gen Intel Core i5-1334U, 16GB RAM, 1TB SSD, FHD Anti-Glare 15.6" display, Windows 11, Microsoft Office Home 2024, Silver, 1.62kg. Thin & Light with Backlit Keyboard and 12-month McAfee.'
  },
  {
    id: 'eg-2',
    name: 'Acer Aspire Lite AMD Ryzen 3-5300U (8GB/512GB)',
    category: 'Electronic Goods',
    price: 44990,
    image: 'https://m.media-amazon.com/images/I/513p8BwV-RL._AC_SL500_.jpg',
    description: 'Acer Aspire Lite with AMD Ryzen 3-5300U, 8GB RAM, 512GB SSD, Full HD 15.6" display, Windows 11 Home, Steel Gray, 1.59 KG. A premium thin and light laptop for everyday productivity.'
  },
  {
    id: 'eg-3',
    name: 'HP Omen 16" i7-14650HX RTX 5050 Gaming Laptop (24GB/1TB)',
    category: 'Electronic Goods',
    price: 162996,
    image: 'https://m.media-amazon.com/images/I/710as3-Py1L._AC_SL500_.jpg',
    description: 'HP Omen with Intel Core i7-14650HX, 8GB RTX 5050, 24GB DDR5, 1TB SSD, 165Hz 2K WUXGA 3ms 400nit display, Win11, RGB Backlit Keyboard. The ultimate gaming powerhouse at 2.43kg.'
  },
  {
    id: 'eg-4',
    name: 'HP 15 13th Gen Intel Core i5-1335U (16GB/512GB)',
    category: 'Electronic Goods',
    price: 72112,
    image: 'https://m.media-amazon.com/images/I/61nSW9VmhEL._AC_SL500_.jpg',
    description: 'HP 15 with Intel Core i5-1335U 13th Gen, 16GB DDR4, 512GB SSD, Anti-Glare Micro-Edge FHD 15.6" display, Win11, M365 Basic, Silver, 1.59kg. Features Iris Xe graphics and FHD Camera with privacy shutter.'
  },
  {
    id: 'eg-5',
    name: 'HP Victus 15.6" i7 RTX 5060 Gaming Laptop (24GB/1TB)',
    category: 'Electronic Goods',
    price: 135620,
    image: 'https://m.media-amazon.com/images/I/71ZDvI4yXAL._AC_SL500_.jpg',
    description: 'HP Victus with 13th Gen Core i7-13620H, 8GB RTX 5060, 24GB DDR5, 1TB SSD, 144Hz IPS FHD 300nit 15.6" display, Win11, Office 24, Mica Silver, 2.29kg. RGB Backlit gaming laptop.'
  },
  {
    id: 'eg-6',
    name: 'Lenovo IdeaPad Slim 3 i5-13420H (24GB/1TB SSD)',
    category: 'Electronic Goods',
    price: 87990,
    image: 'https://m.media-amazon.com/images/I/71D9HSayVSL._AC_SL500_.jpg',
    description: 'Lenovo IdeaPad Slim 3 with 13th Gen Intel Core i5-13420H, 24GB RAM, 1TB SSD, WUXGA IPS 15.3" display, Windows 11, Office Home 2024, Grey, 1.6Kg. Includes Backlit Keyboard and 1-Year ADP Free warranty.'
  },
  {
    id: 'eg-7',
    name: 'HP 14 Intel Core Ultra 7 155H (24GB DDR5/1TB SSD)',
    category: 'Electronic Goods',
    price: 88415,
    image: 'https://m.media-amazon.com/images/I/71+svnkr9GL._AC_SL500_.jpg',
    description: 'HP 14 with Intel Core Ultra 7 155H, 24GB DDR5, 1TB SSD, Micro-Edge Anti-Glare FHD 14" display, Win11, Office 24, Silver, 1.4kg. Features Backlit Keyboard and FHD Camera — a premium AI-ready laptop.'
  },
  {
    id: 'eg-46',
    name: 'ASUS Vivobook 15 Intel Core i3-1315U (16GB/512GB)',
    category: 'Electronic Goods',
    price: 49990,
    image: 'https://m.media-amazon.com/images/I/71bIUPAleZL._AC_SL500_.jpg',
    description: 'ASUS Vivobook 15 with 13th Gen Intel Core i3-1315U, 16GB RAM, 512GB SSD, FHD Anti-Glare 15.6" display, Windows 11 Home, M365 Basic, Cool Silver, 1.70kg. A reliable everyday laptop.'
  },
  {
    id: 'eg-47',
    name: 'ASUS Vivobook Go 14 AMD Ryzen 5 7520U (16GB/512GB)',
    category: 'Electronic Goods',
    price: 52990,
    image: 'https://m.media-amazon.com/images/I/71AfM5k3J4L._AC_SL500_.jpg',
    description: 'ASUS Vivobook Go 14 with AMD Ryzen 5 7520U, 16GB RAM, 512GB SSD, FHD 14" 60Hz display, Windows 11, Office Home 2024, Mixed Black, 1.38kg. Thin & light with 42WHrs battery and M365 Basic.'
  },
  {
    id: 'eg-48',
    name: 'Acer Nitro V 15 i5-13420H RTX 5050 Gaming (16GB/512GB)',
    category: 'Electronic Goods',
    price: 125599,
    image: 'https://m.media-amazon.com/images/I/71dlx3fWLsL._AC_SL500_.jpg',
    description: 'Acer Nitro V 15 gaming laptop with 8-core Intel i5-13420H, GeForce RTX 5050 GDDR7 DLSS4, 16GB RAM, 512GB SSD, 165Hz FHD IPS display, Thunderbolt, WiFi 6, Windows 11. A powerhouse under ₹1.3L.'
  },
  {
    id: 'eg-49',
    name: 'ASUS TUF A15 AMD Ryzen 7 7445HS RTX 3050 (16GB/512GB)',
    category: 'Electronic Goods',
    price: 83990,
    image: 'https://m.media-amazon.com/images/I/81nPkLHN3vL._AC_SL500_.jpg',
    description: 'ASUS TUF A15 2025 with AMD Ryzen 7 7445HS, RTX 3050 4GB 75W TGP, 16GB DDR5, 512GB SSD, FHD 144Hz 15.6" display, RGB Keyboard, Windows 11, Graphite Black, 2.3Kg. Built for serious gaming.'
  },
  {
    id: 'eg-50',
    name: 'Lenovo V15 G4 AMD Athlon Silver 7120U (8GB/512GB)',
    category: 'Electronic Goods',
    price: 38000,
    image: 'https://m.media-amazon.com/images/I/61AccNkmFFL._AC_SL500_.jpg',
    description: 'Lenovo V15 G4 with AMD Athlon Silver 7120U, 8GB LPDDR5, 512GB SSD PCIe, Windows 11 Lifetime, 15.6" FHD Screen, AMD Radeon 610M, Silver. An affordable reliable business laptop with 1-year warranty.'
  },

  // SMARTPHONES
  {
    id: 'eg-65',
    name: 'Samsung Galaxy M17 5G (Sapphire Black, 6GB/128GB)',
    category: 'Electronic Goods',
    price: 15999,
    image: 'https://m.media-amazon.com/images/I/71t5CaisTqL._AC_SL500_.jpg',
    description: 'Samsung Galaxy M17 5G with 50MP OIS triple camera, Gorilla Glass Victus, IP54, Dimensity 6300 processor, 6 Gen OS upgrades, Gemini Live AI, and lag-free gaming — without charger.'
  },
  {
    id: 'eg-66',
    name: 'Samsung Galaxy M56 5G (Light Green, 8GB/256GB)',
    category: 'Electronic Goods',
    price: 24999,
    image: 'https://m.media-amazon.com/images/I/71hN1gfzDcL._AC_SL500_.jpg',
    description: "Samsung Galaxy M56 5G — segment's slimmest with Gorilla Glass Victus+, 10-bit HDR video, 50MP camera, vapour cooling chamber, AI features, and lag-free gaming — without charger."
  },
  {
    id: 'eg-67',
    name: 'Samsung Galaxy M07 (Black, 4GB/64GB)',
    category: 'Electronic Goods',
    price: 8399,
    image: 'https://m.media-amazon.com/images/I/610lbucItmL._AC_SL500_.jpg',
    description: 'Samsung Galaxy M07 with MediaTek Helio G99, 50MP camera, 7.6mm slim design, 5000mAh battery, 25W fast charging, IP54, and 6 Gen OS upgrades — without charger.'
  },
  {
    id: 'eg-68',
    name: 'IKALL Z10 Smartphone (Orange, 4GB/64GB)',
    category: 'Electronic Goods',
    price: 6799,
    image: 'https://m.media-amazon.com/images/I/51UOnCphehL._AC_SL500_.jpg',
    description: 'IKALL Z10 with 6.53" HD display, octa-core processor, 20MP rear + 8MP front camera, 5000mAh battery, and Android 14 — an affordable entry-level smartphone in Orange.'
  },
  {
    id: 'eg-69',
    name: 'Samsung Galaxy M06 5G (Sage Green, 6GB/128GB)',
    category: 'Electronic Goods',
    price: 11999,
    image: 'https://m.media-amazon.com/images/I/71evPv-TvmL._AC_SL500_.jpg',
    description: 'Samsung Galaxy M06 5G with MediaTek Dimensity 6300, 12 5G bands, 50MP camera, 25W fast charging, 4 Gen OS upgrades, and AnTuTu score of 623K+ — without charger.'
  },
  {
    id: 'eg-70',
    name: 'Samsung Galaxy M17 5G (Moonlight Silver, 4GB/128GB)',
    category: 'Electronic Goods',
    price: 14499,
    image: 'https://m.media-amazon.com/images/I/71bJ3TVfwgL._AC_SL500_.jpg',
    description: 'Samsung Galaxy M17 5G with 50MP OIS triple camera, Gorilla Glass Victus, IP54, 6 Gen OS upgrades, AI features, Gemini Live, and lag-free gaming — Moonlight Silver, without charger.'
  },
  {
    id: 'eg-71',
    name: 'iQOO Z10x 5G (Ultramarine, 8GB/128GB)',
    category: 'Electronic Goods',
    price: 18998,
    image: 'https://m.media-amazon.com/images/I/61oa+zoqwmL._AC_SL500_.jpg',
    description: 'iQOO Z10x 5G with 6500mAh large battery, Dimensity 7300 processor, military-grade durability, and 5G connectivity — built for power users who need endurance in Ultramarine.'
  },
  {
    id: 'eg-72',
    name: 'realme P4X 5G (Elegant Pink, 6GB/128GB)',
    category: 'Electronic Goods',
    price: 15690,
    image: 'https://m.media-amazon.com/images/I/71e1UTxoEOL._AC_SL500_.jpg',
    description: 'realme P4X with 6.72" 144Hz display, 7000mAh titan battery, 45W fast charge, Dimensity 7400 Ultra 5G chipset, IP64 waterproof, and dual SIM — Elegant Pink.'
  },
  {
    id: 'eg-73',
    name: 'realme NARZO 90x 5G (Nitro Blue, 6GB/128GB)',
    category: 'Electronic Goods',
    price: 15499,
    image: 'https://m.media-amazon.com/images/I/81iDmqegt4L._AC_SL500_.jpg',
    description: 'realme NARZO 90x 5G with 7000mAh battery, 60W fastest charging, 144Hz bright display, Sony 50MP AI rear camera, AI Assist, and 400% ultra boom speaker — Nitro Blue.'
  },
  {
    id: 'eg-74',
    name: 'OPPO K14x 5G (Prism Violet, 4GB/128GB)',
    category: 'Electronic Goods',
    price: 13735,
    image: 'https://m.media-amazon.com/images/I/41PqArxdhOL._AC_SL500_.jpg',
    description: 'OPPO K14x 5G with a slim design, 5G connectivity, capable camera system, and long-lasting battery — a reliable mid-range 5G smartphone in Prism Violet.'
  },
  {
    id: 'eg-75',
    name: 'iQOO Z11x 5G (Prismatic Green, 6GB/128GB)',
    category: 'Electronic Goods',
    price: 18998,
    image: 'https://m.media-amazon.com/images/I/61HBOs7MdQL._AC_SL500_.jpg',
    description: 'iQOO Z11x 5G with Dimensity 7400-Turbo processor, 7200mAh battery, powered by OriginOS 6, and 5G connectivity — designed for demanding users in Prismatic Green.'
  },
  {
    id: 'eg-76',
    name: 'Xiaomi 17 Ultra (White, 16GB/512GB)',
    category: 'Electronic Goods',
    price: 139999,
    image: 'https://m.media-amazon.com/images/I/71KfhNgK6qL._AC_SL500_.jpg',
    description: "Xiaomi 17 Ultra with world's first Leica 1-inch LOFIC sensor, Snapdragon 8 Elite Gen 5, 2K AMOLED display, 90W HyperCharge, and HyperOS 3 with HyperAI flagship experience — White."
  },
  {
    id: 'eg-77',
    name: 'Xiaomi 17 (Ice Blue, 12GB/512GB)',
    category: 'Electronic Goods',
    price: 89999,
    image: 'https://m.media-amazon.com/images/I/71DsWDIYobL._AC_SL500_.jpg',
    description: 'Xiaomi 17 with 50MP Leica triple camera, Snapdragon 8 Elite Gen 5, 6.3" CrystalRes 1-120Hz AMOLED, 6330mAh battery, 100W HyperCharge, and 3500nits display — Ice Blue.'
  },
  {
    id: 'eg-78',
    name: 'Redmi A4 5G (Starry Black, 4GB/64GB)',
    category: 'Electronic Goods',
    price: 10999,
    image: 'https://m.media-amazon.com/images/I/718HzJbvY1L._AC_SL500_.jpg',
    description: 'Redmi A4 5G with segment-largest 6.88" 120Hz display, 50MP dual camera, 18W fast charging, charger in box, and 5G connectivity — the most affordable 5G option in Starry Black.'
  },
  {
    id: 'eg-79',
    name: 'Lava Bold N1 Pro (Stealth Black, 4GB/128GB)',
    category: 'Electronic Goods',
    price: 8499,
    image: 'https://m.media-amazon.com/images/I/71LIzk0Uj8L._AC_SL500_.jpg',
    description: 'Lava Bold N1 Pro with 6.67" HD+ IP54 display, 120Hz refresh rate, 50MP AI triple rear camera, 8MP front camera, 5000mAh battery, and charger in box — Stealth Black.'
  },
  {
    id: 'eg-80',
    name: 'Redmi Note 15 5G (Glacier Blue, 8GB/256GB)',
    category: 'Electronic Goods',
    price: 24998,
    image: 'https://m.media-amazon.com/images/I/81SxS-bDvVL._AC_SL500_.jpg',
    description: "Redmi Note 15 5G with 108MP OIS camera, Snapdragon 6 Gen 3, segment's slimmest curved AMOLED screen, 5520mAh Si/C battery, and 45W fast charging — Glacier Blue."
  },
  {
    id: 'eg-81',
    name: 'OnePlus Nord CE5 (Black Infinity, 8GB/128GB)',
    category: 'Electronic Goods',
    price: 24996,
    image: 'https://m.media-amazon.com/images/I/61IOa9IrlaL._AC_SL500_.jpg',
    description: 'OnePlus Nord CE5 with MediaTek Dimensity processor, massive 7100mAh battery, OnePlus AI features, and 5G connectivity — a powerful mid-ranger in Black Infinity.'
  },
  {
    id: 'eg-82',
    name: 'realme C71 4G (Obsidian Black, 6GB/128GB)',
    category: 'Electronic Goods',
    price: 10999,
    image: 'https://m.media-amazon.com/images/I/61JZr5lcZaL._AC_SL500_.jpg',
    description: 'realme C71 with 6.75" 90Hz eye comfort display, 6300mAh battery, 37MP cameras, octa-core chipset, IP54 protection, and a large screen — Obsidian Black.'
  },
  {
    id: 'eg-83',
    name: 'Motorola g57 Power 5G (Corsair, 8GB/128GB)',
    category: 'Electronic Goods',
    price: 14536,
    image: 'https://m.media-amazon.com/images/I/41kKGEM47iL._AC_SL500_.jpg',
    description: 'Motorola g57 Power 5G with 7000mAh battery, Snapdragon 6s Gen 4 processor, 6.72" FHD+ display, 50MP + 8MP dual rear camera, and 8MP front camera — Pantone Corsair.'
  },
  {
    id: 'eg-84',
    name: 'iQOO Z11x 5G (Prismatic Green, 8GB/128GB)',
    category: 'Electronic Goods',
    price: 20998,
    image: 'https://m.media-amazon.com/images/I/61HBOs7MdQL._AC_SL500_.jpg',
    description: 'iQOO Z11x 5G (8GB variant) with Dimensity 7400-Turbo processor, 7200mAh battery, OriginOS 6, and 5G connectivity — extra RAM for seamless multitasking in Prismatic Green.'
  },
  {
    id: 'eg-85',
    name: 'Redmi Note 15 Pro+ 5G (Coffee Mocha, 12GB/256GB)',
    category: 'Electronic Goods',
    price: 39999,
    image: 'https://m.media-amazon.com/images/I/81pHku2Z4KL._AC_SL500_.jpg',
    description: 'Redmi Note 15 Pro+ with 200MP OIS camera, Snapdragon 7s Gen 4, CrystalRes AMOLED, IP69/69K rating, 6500mAh Si/C battery, and 100W HyperCharge — Coffee Mocha.'
  },
  {
    id: 'eg-86',
    name: 'Motorola G96 (Greener Pastures, 8GB/128GB)',
    category: 'Electronic Goods',
    price: 17879,
    image: 'https://m.media-amazon.com/images/I/51h0rsXmIXL._AC_SL500_.jpg',
    description: 'Motorola G96 with 144Hz 3D curved pOLED display, 8GB RAM, 128GB storage, and premium design — delivering a smooth, immersive visual experience in PANTONE Greener Pastures.'
  },

  // HEADPHONES
  {
    id: 'eg-26',
    name: 'boAt Rockerz 480 Wireless Over Ear Headphones with Mic',
    category: 'Electronic Goods',
    price: 1499,
    image: 'https://m.media-amazon.com/images/I/711l4y8aNlL._AC_SL500_.jpg',
    description: 'boAt Rockerz 480 with RGB LEDs, 6 light modes, 40mm drivers, Beast Mode, 60H battery, ENx tech for clear calls, Bluetooth 5.3, and foldable over-ear design. Stream ad-free via App support.'
  },
  {
    id: 'eg-27',
    name: 'Sony WH-CH520 Wireless Bluetooth On-Ear Headphones',
    category: 'Electronic Goods',
    price: 3979,
    image: 'https://m.media-amazon.com/images/I/41JACWT-wWL._AC_SL500_.jpg',
    description: 'Sony WH-CH520 with up to 50Hrs battery, Quick Charge, DSEE Upscale audio enhancement, multipoint connectivity, voice assistant support, and foldable on-ear design — in Blue.'
  },
  {
    id: 'eg-28',
    name: 'JBL Tune 770NC Wireless Over Ear ANC Headphones',
    category: 'Electronic Goods',
    price: 4999,
    image: 'https://m.media-amazon.com/images/I/61JU2HicMQL._AC_SL500_.jpg',
    description: 'JBL Tune 770NC with ANC, up to 70Hrs battery, Speed Charge, customised EQ via JBL app, Google Fast Pair, dual pairing, Bluetooth 5.3, and foldable design — in Black.'
  },
  {
    id: 'eg-29',
    name: 'Bose QuietComfort Ultra Bluetooth Headphones (2nd Gen)',
    category: 'Electronic Goods',
    price: 49900,
    image: 'https://m.media-amazon.com/images/I/619DQSC3N1L._AC_SL500_.jpg',
    description: 'Bose QuietComfort Ultra (2nd Gen) with Spatial Audio, world-class ANC, up to 30Hrs playtime, Aware Mode, CustomTune technology, and premium lightweight comfort — Midnight Violet Limited Edition.'
  },
  {
    id: 'eg-30',
    name: 'Sony WH-CH720N Active Noise Cancellation Wireless Headphones',
    category: 'Electronic Goods',
    price: 8239,
    image: 'https://m.media-amazon.com/images/I/51rpbVmi9XL._AC_SL500_.jpg',
    description: 'Sony WH-CH720N with Adaptive Sound Control, Quick Charge (10 min = 1.5 hrs), up to 35Hrs battery, Bluetooth multipoint, customised EQ, and Alexa/Google Assistant support — in Black.'
  },
  {
    id: 'eg-31',
    name: 'boAt Rockerz 650 Pro Wireless Over Ear Headphones',
    category: 'Electronic Goods',
    price: 2499,
    image: 'https://m.media-amazon.com/images/I/61faDMBMdmL._AC_SL500_.jpg',
    description: 'boAt Rockerz 650 Pro 2025 with touch/swipe controls, Dolby Audio, 80Hrs battery, 2-mic ENx noise cancellation, Fast Charge, App support, dual pairing, and Bluetooth over-ear design — Starry Night.'
  },
  {
    id: 'eg-32',
    name: 'boAt Rockerz 551ANC Hybrid ANC Over Ear Headphones',
    category: 'Electronic Goods',
    price: 1899,
    image: 'https://m.media-amazon.com/images/I/61WFLydWqpL._AC_SL500_.jpg',
    description: 'boAt Rockerz 551ANC with hybrid ANC (~35dB), 100Hrs battery, Fast Charge, Ambient Sound Mode, dual EQ modes, ENx tech, and Bluetooth 5.3 — designed for immersive all-day listening in Sage Green.'
  },
  {
    id: 'eg-51',
    name: 'Noise Airwave Max 4 Wireless Over Ear Headphones',
    category: 'Electronic Goods',
    price: 1699,
    image: 'https://m.media-amazon.com/images/I/614Hd3JaGOL._AC_SL500_.jpg',
    description: 'Noise Airwave Max 4 with 70H playtime, ENC, 40mm drivers, low latency (up to 40ms), dual pairing, and Bluetooth v5.4. A long-lasting daily headphone in Calm Beige.'
  },
  {
    id: 'eg-52',
    name: 'Noise Airwave Max 5 Wireless Over-Ear Headphones with ANC',
    category: 'Electronic Goods',
    price: 4999,
    image: 'https://m.media-amazon.com/images/I/51YKwVXBhIL._AC_SL500_.jpg',
    description: 'Noise Airwave Max 5 with Adaptive Hybrid ANC (up to 50dB), HFA Tech, 80H playtime, dual pairing, and Bluetooth v5.4. Premium noise isolation with an extended battery for all-day use — Calm Beige.'
  },
  {
    id: 'eg-53',
    name: 'Snaphead Vibe Bluetooth Wireless Over Ear Headphones',
    category: 'Electronic Goods',
    price: 999,
    image: 'https://m.media-amazon.com/images/I/51cKpI1SqOL._AC_SL500_.jpg',
    description: 'Snaphead Vibe with Type-C charging, up to 13Hrs non-stop music, 40mm speaker driver, super bass, and wireless Bluetooth connectivity — Sapphire Blue. Budget-friendly everyday headphone.'
  },
  {
    id: 'eg-54',
    name: 'Bose QuietComfort Ultra Bluetooth Headphones (2nd Gen) Black',
    category: 'Electronic Goods',
    price: 49900,
    image: 'https://m.media-amazon.com/images/I/51revx-zToL._AC_SL500_.jpg',
    description: 'Bose QuietComfort Ultra (2nd Gen) with Spatial Audio, industry-leading ANC, up to 30Hrs playtime, Aware Mode, and CustomTune personalisation technology — in classic Black.'
  },
  {
    id: 'eg-55',
    name: 'boAt Rockerz 411 Wireless Over Ear Headphones (2025)',
    category: 'Electronic Goods',
    price: 1399,
    image: 'https://m.media-amazon.com/images/I/61RbNdlNWIL._AC_SL500_.jpg',
    description: 'boAt Rockerz 411 2025 with 40ms low latency, 40Hrs battery, 40mm drivers, ENx tech, App support, Bluetooth 5.3, and an over-ear foldable build — Bold Blue. Great value wireless headphone.'
  },
  {
    id: 'eg-56',
    name: 'pTron Studio Wireless Over-Ear Headphones with HD Mic',
    category: 'Electronic Goods',
    price: 599,
    image: 'https://m.media-amazon.com/images/I/51tM5eJfqWL._AC_SL500_.jpg',
    description: 'pTron Studio with 60Hrs playtime, immersive sound, 40mm drivers, BT5.4, dual-device pairing, 3.5mm aux port, TF card slot, and Type-C fast charging — Jet Black. Ultra-affordable wireless audio.'
  },
  {
    id: 'eg-57',
    name: 'Noise Two Wireless On Ear Headphones',
    category: 'Electronic Goods',
    price: 1699,
    image: 'https://m.media-amazon.com/images/I/517lSvEVVsL._AC_SL500_.jpg',
    description: 'Noise Two with 50H playtime, low latency (up to 45ms), 4 play modes, dual pairing, and Bluetooth v5.3. A versatile on-ear headphone for music, gaming, and calls — Serene Blue.'
  },
  {
    id: 'eg-58',
    name: 'Bose QuietComfort Wireless Noise Cancelling Headphones',
    category: 'Electronic Goods',
    price: 22290,
    image: 'https://m.media-amazon.com/images/I/51f7KKP25PL._AC_SL500_.jpg',
    description: 'Bose QuietComfort wireless headphones with up to 24Hrs battery, world-class noise cancellation, Aware Mode, TriPort acoustic architecture, and balanced sound — in Black. A benchmark ANC headphone.'
  },
  {
    id: 'eg-59',
    name: 'pTron Studio Evo Wireless Over Ear Headphones',
    category: 'Electronic Goods',
    price: 799,
    image: 'https://m.media-amazon.com/images/I/51hLUxJVLBL._AC_SL500_.jpg',
    description: 'pTron Studio Evo with 70Hrs playtime, HD mic, low-latency game/movie/music modes, punchy bass, BT5.3, dual device pairing, voice assistant, and Type-C fast charging — Blue.'
  },
  {
    id: 'eg-60',
    name: 'boAt Rockerz 512 ANC Hybrid Noise Cancelling Headphones',
    category: 'Electronic Goods',
    price: 2599,
    image: 'https://m.media-amazon.com/images/I/61qdD0zSk8L._AC_SL500_.jpg',
    description: 'boAt Rockerz 512 with hybrid ANC (~40dB), 80H battery, 40mm drivers, 40ms low latency, ENx tech, App support, Bluetooth 5.3, and ASAP Charge — Cosmic Black.'
  },
  {
    id: 'eg-61',
    name: 'boAt Rockerz 371 Wireless Over Ear Headphones',
    category: 'Electronic Goods',
    price: 999,
    image: 'https://m.media-amazon.com/images/I/61BWskzWNIL._AC_SL500_.jpg',
    description: 'boAt Rockerz 371 with 40mm drivers, 50Hrs battery, 60ms low latency, ENx tech, BT v5.4, foldable cups, voice assistant, and Bluetooth 5.4 — Sage Green. Compact and affordable daily headphone.'
  },
  {
    id: 'eg-62',
    name: 'soundcore by Anker H30i Wireless On-Ear Headphones',
    category: 'Electronic Goods',
    price: 1299,
    image: 'https://m.media-amazon.com/images/I/51MKRHXe65L._AC_SL500_.jpg',
    description: 'soundcore H30i with foldable design, Pure Bass, 70H playtime, Bluetooth 5.3, lightweight comfortable build, app connectivity, and multipoint connection — Black. Anker quality at a budget price.'
  },
  {
    id: 'eg-63',
    name: 'pTron Studio Pro Wireless Over Ear Headphones',
    category: 'Electronic Goods',
    price: 699,
    image: 'https://m.media-amazon.com/images/I/61Qk3p2fXQL._AC_SL500_.jpg',
    description: 'pTron Studio Pro with 65Hrs playtime, TruTalk AI-ENC calls, HD mic, low-latency game & music modes, 40mm drivers, BT5.4, dual device pairing, and Type-C fast charging — Jet Black.'
  },
  {
    id: 'eg-64',
    name: 'Noise Airwave Max XR Wireless Over-Ear Headphones',
    category: 'Electronic Goods',
    price: 3499,
    image: 'https://m.media-amazon.com/images/I/51lPcFkwYmL._AC_SL500_.jpg',
    description: 'Noise Airwave Max XR with 120H playtime, ANC, HFA Tech, Spatial Audio, dual pairing, and Bluetooth v6.0. Next-gen over-ear headphone with ultra-long battery and premium sound — Pearl Beige.'
  },

  // --- Home Electronics ---

  // KITCHEN & SMALL APPLIANCES
  {
    id: 'he-16',
    name: 'NutriPro Bullet Juicer Grinder 500W (3 Jars)',
    category: 'Home Electronics',
    price: 1599,
    image: 'https://m.media-amazon.com/images/I/71rH4vEE4nL._AC_SL500_.jpg',
    description: 'NutriPro Bullet Juicer Grinder with 500W motor and 3 multipurpose jars for juicing, grinding, and blending. Compact design with stainless steel blades for efficient processing of fruits, vegetables, and spices.'
  },
  {
    id: 'he-17',
    name: 'Pigeon 2 Slice Pop Up Toaster 700W',
    category: 'Home Electronics',
    price: 1217,
    image: 'https://m.media-amazon.com/images/I/51x15vgzI2L._AC_SL500_.jpg',
    description: 'Pigeon 2 Slice Pop Up Toaster with 700W power, 6 browning levels, and automatic pop-up function. Features cancel, defrost, and reheat modes with a removable crumb tray for easy cleaning.'
  },
  {
    id: 'he-18',
    name: 'Wonderchef Swift Brew Coffee Machine 600W',
    category: 'Home Electronics',
    price: 1353,
    image: 'https://m.media-amazon.com/images/I/71bBUdEXlbL._AC_SL500_.jpg',
    description: 'Wonderchef Swift Brew Coffee Machine with 600W heating element brews fresh coffee in minutes. Compact drip coffee maker with reusable filter, keep-warm plate, and transparent water tank for easy monitoring.'
  },
  {
    id: 'he-19',
    name: 'Prestige Sandwich Toaster PGMFB 800W',
    category: 'Home Electronics',
    price: 1299,
    image: 'https://m.media-amazon.com/images/I/51ZtiPd0PVL._AC_SL500_.jpg',
    description: 'Prestige Sandwich Toaster with 800W power and non-stick coated plates for perfectly grilled sandwiches. Features indicator lights for power and ready status, cool-touch handle, and floating hinge for different bread thicknesses.'
  },
  {
    id: 'he-20',
    name: 'Cookwell Bullet Mixer Grinder 500W (3 Jars)',
    category: 'Home Electronics',
    price: 2199,
    image: 'https://m.media-amazon.com/images/I/81yobRRV8nL._AC_SL500_.jpg',
    description: 'Cookwell Bullet Mixer Grinder with 500W motor and 3 stainless steel jars for mixing, grinding, and blending. Equipped with sharp stainless steel blades, safety lock lid, and overload protection for long-lasting performance.'
  },
  {
    id: 'he-21',
    name: 'Pigeon Healthifry Digital Air Fryer 4.2L 1200W',
    category: 'Home Electronics',
    price: 2899,
    image: 'https://m.media-amazon.com/images/I/71NZiryyhbL._AC_SL500_.jpg',
    description: 'Pigeon Healthifry Digital Air Fryer with 360° high-speed air circulation technology, 4.2L non-stick basket, 1200W, and digital touch controls — fry, bake, grill and roast with up to 80% less oil.'
  },
  {
    id: 'he-22',
    name: 'Cadlec Cruise Pro 12L Multi-Function OTG 1000W',
    category: 'Home Electronics',
    price: 1899,
    image: 'https://m.media-amazon.com/images/I/61kGQfVJdcL._AC_SL500_.jpg',
    description: 'Cadlec Cruise Pro 12L OTG with 1000W heating, bake/grill/toast functions, adjustable temperature and timer controls, and 2-year warranty. Compact oven toaster griller for everyday baking needs.'
  },
  {
    id: 'he-23',
    name: 'Rico Cold Press Slow Juicer with Ice Cream Maker',
    category: 'Home Electronics',
    price: 8499,
    image: 'https://m.media-amazon.com/images/I/61k34IN0NSL._AC_SL500_.jpg',
    description: 'Rico Cold Press Slow Juicer extracts 10% more juice from fruits, vegetables, and nut milk with low noise, anti-drip nozzle, and easy-clean design. Also doubles as an ice cream maker.'
  },
  {
    id: 'he-24',
    name: 'Milton Rapid Electric Kettle 1.8L 1500W Stainless Steel',
    category: 'Home Electronics',
    price: 636,
    image: 'https://m.media-amazon.com/images/I/51lYFOP2mUL._AC_SL500_.jpg',
    description: 'Milton Rapid Electric Kettle with 1500W heating, 1.8L stainless steel body, auto shut-off, wide mouth, cool-touch handle, and single-touch lid lock. Fast boiling for home and office use.'
  },
];
