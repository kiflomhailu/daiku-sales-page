import daikuPruner from '../assets/used_images/daiku-share-pruner.png'
import mowerHero from '../assets/used_images/hero-mower-offer-daiku.png'
import mowerProduct from '../assets/used_images/product-cordless-mower-daiku.png'
import sprayerProduct from '../assets/used_images/product-pressure-sprayer-daiku.png'
import hoseProduct from '../assets/used_images/product-hose-reel-daiku.png'
import sawCategory from '../assets/used_images/category-saw-action-daiku.png'
import mowerCategory from '../assets/used_images/category-mower-daiku.png'
import gardenToolsCategory from '../assets/used_images/category-garden-tools-daiku.png'
import mowerProject from '../assets/used_images/project-mower-action-daiku.png'
import sawProduct from '../assets/used_images/image.png'
import mowerKit from '../assets/used_images/deal-mower-kit-daiku.png'
import mowerPack from '../assets/used_images/hover-mower-pack-daiku.png'
import mowerLifestyle from '../assets/used_images/hover-mower-lifestyle-daiku.png'
import chainsawShare from '../assets/used_images/product-chainsaw-share-daiku.png'
import mowerOutside from '../assets/used_images/1.png'
import sprayerAlt from '../assets/used_images/2.png'
import kitInside from '../assets/used_images/3.png'
import mowerFeature from '../assets/used_images/4.png'
import mowerInUse from '../assets/used_images/5.png'
import kitOutside from '../assets/used_images/7.png'
import sprayerOutside from '../assets/used_images/8.png'
import best1 from '../assets/best1.jpg'
import best1Inuse from '../assets/best1-inuse.jpg'
import best1InuseMale from '../assets/best1-inuse-male.jpg'
import best1InuseReal from '../assets/best1-inuse-real.jpg'

export const images = {
  daikuPruner,
  mowerHero,
  mowerProduct,
  sprayerProduct,
  hoseProduct,
  sawCategory,
  mowerCategory,
  gardenToolsCategory,
  mowerProject,
  sawProduct,
  mowerKit,
  mowerPack,
  mowerLifestyle,
  chainsawShare,
  best1,
  best1Inuse,
  best1InuseMale,
  best1InuseReal,
}

export function formatPrice(value) {
  return `EUR ${value.toLocaleString('en-US', { minimumFractionDigits: 0 })}`
}

export function getDiscountPercent(price, oldPrice) {
  if (!oldPrice || oldPrice <= price) return 0
  return Math.round((1 - price / oldPrice) * 100)
}

export const categories = [
  {
    slug: 'drills',
    name: 'Drills',
    image: best1,
    count: 18,
    blurb: 'Impact drivers, hammer drills and combi kits for every job.',
  },
  {
    slug: 'saws',
    name: 'Saws',
    image: sawCategory,
    count: 14,
    blurb: 'Circular, chain and reciprocating saws for clean, fast cuts.',
  },
  {
    slug: 'lawn-mowers',
    name: 'Lawn Mowers',
    image: mowerCategory,
    count: 11,
    blurb: 'Cordless and brushless mowers for small and large gardens.',
  },
  {
    slug: 'batteries',
    name: 'Batteries',
    image: daikuPruner,
    count: 9,
    blurb: 'Share+ 20V and 40V packs that power the whole ecosystem.',
  },
  {
    slug: 'chargers',
    name: 'Chargers',
    image: mowerKit,
    count: 7,
    blurb: 'Fast, dual and travel chargers to keep tools ready.',
  },
  {
    slug: 'garden-tools',
    name: 'Garden Tools',
    image: gardenToolsCategory,
    count: 22,
    blurb: 'Trimmers, sprayers, hose reels and outdoor essentials.',
  },
  {
    slug: 'accessories',
    name: 'Accessories',
    image: mowerProject,
    count: 31,
    blurb: 'Blades, bits, guides and add-ons for daily work.',
  },
  {
    slug: 'bundles',
    name: 'Bundles',
    image: mowerPack,
    count: 8,
    blurb: 'Curated weekend kits with the best value per order.',
  },
]

export const products = [
  {
    id: 'mower-40v',
    slug: 'daiku-cordless-lawn-mower-40v',
    name: 'DAIKU Cordless Lawn Mower 40V',
    category: 'lawn-mowers',
    categoryName: 'Lawn Mowers',
    tag: 'New',
    rating: 4.9,
    reviews: 218,
    price: 499,
    oldPrice: 589,
    stock: 'in',
    spec: 'Brushless motor',
    bestseller: true,
    description:
      'A powerful 40V brushless cordless mower built for medium and large gardens. Quiet, fume-free and ready in seconds, it delivers petrol-level cutting power with the convenience of the Share+ battery system.',
    features: [
      'Brushless motor for longer runtime and life',
      '6 cutting heights from 25 to 75 mm',
      '50 L collection box with level indicator',
      'Foldable handle for compact storage',
    ],
    specs: {
      Voltage: '40V',
      'Cutting width': '37 cm',
      'Battery system': 'Share+ 40V',
      Weight: '14.2 kg',
      Warranty: '3 years',
    },
    image: best1,
    gallery: [best1, best1InuseMale, best1InuseReal, mowerProduct],
  },
  {
    id: 'impact-drill',
    slug: 'daiku-20v-impact-drill-pro',
    name: 'DAIKU 20V Impact Drill Pro',
    category: 'drills',
    categoryName: 'Drills',
    tag: 'Bestseller',
    rating: 5.0,
    reviews: 342,
    price: 129,
    oldPrice: 169,
    stock: 'in',
    spec: 'Share+ 20V system',
    bestseller: true,
    description:
      'A professional-grade 20V impact drill with brushless power and precise torque control. Part of the Share+ system, so one battery powers your whole DAIKU collection.',
    features: [
      '2000 Nm maximum torque',
      '21 + 1 torque settings',
      'LED work light',
      'Ergonomic anti-slip grip',
    ],
    specs: {
      Voltage: '20V',
      'Max torque': '2000 Nm',
      'Battery system': 'Share+ 20V',
      Weight: '1.4 kg',
      Warranty: '3 years',
    },
    image: best1,
    gallery: [best1, best1Inuse, best1InuseMale, best1InuseReal],
  },
  {
    id: 'pressure-sprayer',
    slug: 'daiku-garden-pressure-sprayer',
    name: 'DAIKU Garden Pressure Sprayer',
    category: 'garden-tools',
    categoryName: 'Garden Tools',
    tag: 'Bundle',
    rating: 4.8,
    reviews: 96,
    price: 49,
    oldPrice: 69,
    stock: 'in',
    spec: 'Garden care kit',
    bestseller: true,
    description:
      'A comfortable, pressure-controlled garden sprayer for plants, fences and cleaning tasks. Lightweight tank with an adjustable nozzle for fine mist or direct jet.',
    features: [
      '5 L pressurised tank',
      'Adjustable brass nozzle',
      'Comfort shoulder strap',
      'Safety pressure release valve',
    ],
    specs: {
      Capacity: '5 L',
      Nozzle: 'Adjustable brass',
      Material: 'Reinforced polymer',
      Weight: '1.1 kg',
      Warranty: '2 years',
    },
    image: sprayerProduct,
    gallery: [sprayerProduct, sprayerOutside, sprayerAlt, mowerProject],
  },
  {
    id: 'hose-reel',
    slug: 'daiku-wall-mounted-hose-reel',
    name: 'DAIKU Wall-Mounted Hose Reel',
    category: 'garden-tools',
    categoryName: 'Garden Tools',
    tag: 'Sale',
    rating: 5.0,
    reviews: 73,
    price: 149,
    oldPrice: 199,
    stock: 'low',
    spec: 'Wall mounted',
    bestseller: true,
    description:
      'An auto-rewind wall-mounted hose reel with a 20 m hose, wall bracket and swivel mount. Keeps the garden tidy and the hose protected from sun and weather.',
    features: [
      '20 m reinforced hose included',
      'Automatic guided rewind',
      '180° swivel wall bracket',
      'UV and frost resistant casing',
    ],
    specs: {
      'Hose length': '20 m',
      Mount: 'Swivel wall bracket',
      Rewind: 'Automatic',
      Material: 'UV-stable ABS',
      Warranty: '2 years',
    },
    image: hoseProduct,
    gallery: [hoseProduct, mowerKit, mowerPack, mowerProject],
  },
  {
    id: 'mini-chainsaw',
    slug: 'daiku-20v-mini-chainsaw-kit',
    name: 'DAIKU 20V Mini Chainsaw Kit',
    category: 'saws',
    categoryName: 'Saws',
    tag: 'Hot',
    rating: 4.9,
    reviews: 187,
    price: 199,
    oldPrice: 249,
    stock: 'in',
    spec: 'Share+ cordless kit',
    bestseller: true,
    description:
      'A compact one-handed 20V mini chainsaw for pruning, garden clean-up and small logs. Tool-free chain tensioning and Share+ battery compatibility.',
    features: [
      '6-inch guide bar',
      'Tool-free chain tensioning',
      'Automatic chain lubrication',
      'Safety lock trigger',
    ],
    specs: {
      Voltage: '20V',
      'Bar length': '6 inch',
      'Battery system': 'Share+ 20V',
      Weight: '1.6 kg',
      Warranty: '3 years',
    },
    image: sawProduct,
    gallery: [sawProduct, kitOutside, kitInside, sawCategory],
  },
  {
    id: 'mower-kit',
    slug: 'daiku-4-in-1-mower-kit',
    name: 'DAIKU 4-in-1 Mower Kit',
    category: 'bundles',
    categoryName: 'Bundles',
    tag: 'Deal',
    rating: 4.8,
    reviews: 64,
    price: 349,
    oldPrice: 449,
    stock: 'in',
    spec: 'Weekend bundle',
    bestseller: true,
    description:
      'Everything to start a Share+ garden: mower, trimmer head, battery and charger in one high-value weekend bundle. The smart way to begin the ecosystem.',
    features: [
      'Mower + trimmer attachments',
      '4.0 Ah Share+ battery included',
      'Fast charger included',
      'Single battery powers all tools',
    ],
    specs: {
      Includes: 'Mower, trimmer, battery, charger',
      Battery: '4.0 Ah Share+',
      'Battery system': 'Share+ 20V',
      Weight: '9.8 kg',
      Warranty: '3 years',
    },
    image: mowerKit,
    gallery: [mowerKit, mowerOutside, mowerFeature, mowerInUse],
  },
  {
    id: 'pruning-shears',
    slug: 'daiku-share-pruning-shears',
    name: 'DAIKU Share+ Pruning Shears',
    category: 'garden-tools',
    categoryName: 'Garden Tools',
    tag: 'Top pick',
    rating: 4.9,
    reviews: 142,
    price: 89,
    oldPrice: 119,
    stock: 'in',
    spec: 'Share+ 20V system',
    description:
      'Effortless electric pruning shears for branches up to 30 mm. Reduce hand fatigue with battery-powered cuts and a precision blade.',
    features: [
      '30 mm cutting capacity',
      'SK5 precision blade',
      'Up to 8 hours runtime',
      'Safety double-trigger',
    ],
    specs: {
      'Cutting capacity': '30 mm',
      Blade: 'SK5 steel',
      'Battery system': 'Share+ 20V',
      Weight: '0.8 kg',
      Warranty: '2 years',
    },
    image: daikuPruner,
    gallery: [daikuPruner, sawProduct, chainsawShare, sawCategory],
  },
  {
    id: 'hero-mower',
    slug: 'daiku-hero-lawn-mower-offer',
    name: 'DAIKU Hero Lawn Mower Offer',
    category: 'lawn-mowers',
    categoryName: 'Lawn Mowers',
    tag: 'Featured',
    rating: 5.0,
    reviews: 109,
    price: 429,
    oldPrice: 529,
    stock: 'in',
    spec: 'Limited launch deal',
    description:
      'Our headline mower offer with a launch discount. Brushless power, large capacity and the comfort features that make weekend work fast.',
    features: [
      'Brushless high-efficiency motor',
      '55 L collection capacity',
      'Single-lever height control',
      'Soft-grip foldable handle',
    ],
    specs: {
      Voltage: '40V',
      'Cutting width': '40 cm',
      'Battery system': 'Share+ 40V',
      Weight: '15.0 kg',
      Warranty: '3 years',
    },
    image: mowerHero,
    gallery: [mowerHero, mowerLifestyle, mowerProduct, mowerProject],
  },
  {
    id: 'garden-action-kit',
    slug: 'daiku-garden-action-kit',
    name: 'DAIKU Garden Action Kit',
    category: 'bundles',
    categoryName: 'Bundles',
    tag: 'New',
    rating: 4.8,
    reviews: 51,
    price: 179,
    oldPrice: 229,
    stock: 'in',
    spec: 'Garden starter set',
    description:
      'A starter set for new gardeners: trimmer, sprayer and accessories built around the Share+ battery system for easy expansion.',
    features: [
      'Trimmer + sprayer combo',
      'Accessory storage bag',
      'Share+ battery compatible',
      'Beginner-friendly setup',
    ],
    specs: {
      Includes: 'Trimmer, sprayer, accessories',
      'Battery system': 'Share+ 20V',
      Material: 'Composite + steel',
      Weight: '4.4 kg',
      Warranty: '2 years',
    },
    image: gardenToolsCategory,
    gallery: [gardenToolsCategory, mowerProject, daikuPruner, sprayerProduct],
  },
  {
    id: 'accessories-bundle',
    slug: 'daiku-accessories-bundle',
    name: 'DAIKU Accessories Bundle',
    category: 'accessories',
    categoryName: 'Accessories',
    tag: 'Bundle',
    rating: 4.7,
    reviews: 38,
    price: 69,
    oldPrice: 99,
    stock: 'in',
    spec: 'Mower accessories',
    description:
      'A practical bundle of blades, guides and maintenance accessories to keep your DAIKU tools performing at their best.',
    features: [
      'Replacement blades set',
      'Maintenance oil and brush',
      'Storage organiser',
      'Universal fit accessories',
    ],
    specs: {
      Includes: 'Blades, oil, organiser',
      Compatibility: 'DAIKU range',
      Material: 'Steel + polymer',
      Weight: '1.9 kg',
      Warranty: '1 year',
    },
    image: mowerCategory,
    gallery: [mowerCategory, daikuPruner, mowerKit, mowerProject],
  },
  {
    id: 'chainsaw-share',
    slug: 'daiku-chainsaw-share-kit',
    name: 'DAIKU Chainsaw Share+ Kit',
    category: 'saws',
    categoryName: 'Saws',
    tag: 'Hot',
    rating: 4.9,
    reviews: 88,
    price: 219,
    oldPrice: 279,
    stock: 'low',
    spec: 'Cordless saw system',
    description:
      'A full cordless chainsaw kit with battery and charger included. Built for firewood, pruning and outdoor projects on the Share+ system.',
    features: [
      '10-inch guide bar',
      'Battery and charger included',
      'Automatic oiling system',
      'Anti-kickback chain brake',
    ],
    specs: {
      Voltage: '20V',
      'Bar length': '10 inch',
      'Battery system': 'Share+ 20V',
      Weight: '3.2 kg',
      Warranty: '3 years',
    },
    image: chainsawShare,
    gallery: [chainsawShare, sawCategory, sawProduct, kitOutside],
  },
  {
    id: 'mower-lifestyle',
    slug: 'daiku-mower-lifestyle-pack',
    name: 'DAIKU Mower Lifestyle Pack',
    category: 'bundles',
    categoryName: 'Bundles',
    tag: 'Sale',
    rating: 4.8,
    reviews: 47,
    price: 399,
    oldPrice: 499,
    stock: 'in',
    spec: 'Weekend mower combo',
    description:
      'A complete weekend mower combo with mower, spare battery and care accessories. Designed for households that want a ready-to-go garden setup.',
    features: [
      'Mower + spare battery',
      'Care and cleaning kit',
      'Quick-fold storage design',
      'Share+ battery compatible',
    ],
    specs: {
      Includes: 'Mower, spare battery, care kit',
      Voltage: '40V',
      'Battery system': 'Share+ 40V',
      Weight: '16.4 kg',
      Warranty: '3 years',
    },
    image: mowerLifestyle,
    gallery: [mowerLifestyle, mowerPack, mowerHero, mowerProduct],
  },
]

export const reviews = [
  {
    id: 1,
    name: 'Thomas V.',
    location: 'Genk, BE',
    rating: 5,
    date: 'May 2026',
    title: 'Powerful and quiet',
    text: 'The 40V mower cuts like a petrol model but without the noise and fumes. The Share+ battery also fits my drill, which is brilliant.',
    product: 'DAIKU Cordless Lawn Mower 40V',
  },
  {
    id: 2,
    name: 'Sofie D.',
    location: 'Hasselt, BE',
    rating: 5,
    date: 'May 2026',
    title: 'Best drill I have owned',
    text: 'Plenty of torque, comfortable grip and the LED light is genuinely useful. Delivery was next day too.',
    product: 'DAIKU 20V Impact Drill Pro',
  },
  {
    id: 3,
    name: 'Marc P.',
    location: 'Antwerp, BE',
    rating: 4,
    date: 'Apr 2026',
    title: 'Great value bundle',
    text: 'The 4-in-1 kit was a smart way to start. One battery for everything saves money over time.',
    product: 'DAIKU 4-in-1 Mower Kit',
  },
  {
    id: 4,
    name: 'Elena R.',
    location: 'Leuven, BE',
    rating: 5,
    date: 'Apr 2026',
    title: 'Perfect for pruning',
    text: 'The electric shears saved my hands during a big garden clean-up. Light and very sharp.',
    product: 'DAIKU Share+ Pruning Shears',
  },
  {
    id: 5,
    name: 'Jonas K.',
    location: 'Gent, BE',
    rating: 5,
    date: 'Mar 2026',
    title: 'Compact but strong',
    text: 'The mini chainsaw handled branches easily and the tool-free tensioning is very convenient.',
    product: 'DAIKU 20V Mini Chainsaw Kit',
  },
  {
    id: 6,
    name: 'Amira S.',
    location: 'Brussels, BE',
    rating: 4,
    date: 'Mar 2026',
    title: 'Tidy garden at last',
    text: 'The wall hose reel rewinds smoothly and looks clean on the wall. Wish it came in more colours.',
    product: 'DAIKU Wall-Mounted Hose Reel',
  },
]

export const batteries = [
  { model: 'Share+ 2.0 Ah', voltage: '20V', capacity: '2.0 Ah', runtime: 'Up to 35 min', weight: '0.4 kg', best: 'Light tools' },
  { model: 'Share+ 4.0 Ah', voltage: '20V', capacity: '4.0 Ah', runtime: 'Up to 70 min', weight: '0.7 kg', best: 'Everyday use' },
  { model: 'Share+ 6.0 Ah', voltage: '20V', capacity: '6.0 Ah', runtime: 'Up to 110 min', weight: '0.9 kg', best: 'Heavy tools' },
  { model: 'Share+ 40V 4.0 Ah', voltage: '40V', capacity: '4.0 Ah', runtime: 'Up to 45 min', weight: '1.3 kg', best: 'Mowers & saws' },
]

export const batteryFaqs = [
  {
    q: 'Will one battery work with all my DAIKU tools?',
    a: 'Yes. Every tool in the Share+ 20V range uses the same battery platform, so a single pack powers drills, saws, trimmers and more. The 40V line uses higher-capacity packs for mowers and chainsaws.',
  },
  {
    q: 'How long does a battery take to charge?',
    a: 'A standard charger refills a 4.0 Ah pack in about 60 minutes. The fast charger does it in roughly 35 minutes.',
  },
  {
    q: 'Can I use a 20V battery on a 40V tool?',
    a: 'No. The 20V and 40V platforms are separate. However, both share the same charger family for convenience.',
  },
  {
    q: 'What is the warranty on batteries?',
    a: 'All Share+ batteries carry a 2-year warranty. Registered tools may qualify for an extended 3-year cover.',
  },
]

export const productBySlug = (slug) => products.find((p) => p.slug === slug)
export const productsByCategory = (cat) => products.filter((p) => p.category === cat)
export const bestSellers = () => products.filter((p) => p.bestseller)
export function searchProducts(query) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.categoryName.toLowerCase().includes(q) ||
      p.spec.toLowerCase().includes(q),
  )
}
