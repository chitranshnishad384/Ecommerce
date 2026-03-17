import fs from 'fs';

const productsPath = 'd:\\AIgenLabs\\Ecommerce\\frontend\\src\\data\\products.ts';
let content = fs.readFileSync(productsPath, 'utf8');

const leatherImages = Array.from({ length: 13 }, (_, i) => `/images/leather-bag-${i + 1}.jpg`);
const electronicImages = Array.from({ length: 10 }, (_, i) => `/images/electronic-${i + 1}.jpg`);
const homeImages = [
  '/images/tv.png', '/images/refrigerator.png', '/images/washing-machine.png', 
  '/images/ac.png', '/images/robot-vacuum.png'
];
const fallbacks = [
  '/images/laptop.png', '/images/headphones.png', '/images/smartphone.png', 
  '/images/tablet.png', '/images/smartwatch.png', '/images/briefcase.png', 
  '/images/duffle.png', '/images/backpack.png', '/images/wallet.png', '/images/messenger.png'
];

let lIdx = 0, eIdx = 0, hIdx = 0;

// Regex to find each product block and its category
// We'll iterate through the categories provided in the file structure
const sections = content.split('// --- ');

const updatedSections = sections.map(section => {
  if (section.startsWith('Leather Bags')) {
    return section.replace(/id: '(lb-\d+)',[\s\S]*?image: '.*?'/g, (match, id) => {
      const img = leatherImages[lIdx % leatherImages.length];
      lIdx++;
      return match.replace(/image: '.*?'/, `image: '${img}'`);
    });
  } else if (section.startsWith('Electronic Goods')) {
    return section.replace(/id: '(eg-\d+)',[\s\S]*?image: '.*?'/g, (match, id) => {
      // Use electronic images first, then fallbacks
      const pool = [...electronicImages, ...fallbacks];
      const img = pool[eIdx % pool.length];
      eIdx++;
      return match.replace(/image: '.*?'/, `image: '${img}'`);
    });
  } else if (section.startsWith('Home Electronics')) {
    return section.replace(/id: '(he-\d+)',[\s\S]*?image: '.*?'/g, (match, id) => {
      const pool = [...homeImages, ...fallbacks];
      const img = pool[hIdx % pool.length];
      hIdx++;
      return match.replace(/image: '.*?'/, `image: '${img}'`);
    });
  }
  return section;
});

fs.writeFileSync(productsPath, updatedSections.join('// --- '));
console.log('Successfully updated products.ts with local-only images across all categories.');
