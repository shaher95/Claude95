import { Product, Review, RelatedProduct } from "@/types/product";

export const mainProduct: Product = {
  id: "HIM-NEEM-FW-150",
  name: "Himalaya Purifying Neem Face Wash",
  nameAr: "غسول الوجه بالنيم من هيمالايا",
  brand: "Himalaya",
  category: "Personal Care / Skincare",
  price: 29.95,
  originalPrice: 39.95,
  currency: "SAR",
  rating: 4.6,
  reviewCount: 1247,
  inStock: true,
  stockCount: 38,
  sku: "HIM-NM-FW-150ML",
  images: [
    "/images/product-main.jpg",
    "/images/product-angle.jpg",
    "/images/product-back.jpg",
    "/images/product-texture.jpg",
  ],
  description:
    "Himalaya's Purifying Neem Face Wash is a soap-free, herbal formulation that cleans impurities and helps clear pimples, leaving you with a clear, problem-free skin. Neem, well-known for its purifying and antibacterial properties, kills problem-causing bacteria. Turmeric, known for its antibacterial properties, controls the recurrence of pimples, while keeping your skin smooth and hydrated. Suitable for normal to oily skin types. Dermatologically tested and clinically proven to be gentle on your skin.",
  ingredients:
    "Aqua, Cocamidopropyl Betaine, Neem (Azadirachta indica) Leaf Extract, Turmeric (Curcuma longa) Rhizome Extract, Sodium Cocoyl Isethionate, Glycerin, Decyl Glucoside, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Sodium Chloride, Phenoxyethanol, Fragrance, Citric Acid, Disodium EDTA, FD&C Blue No. 1 (CI 42090), D&C Yellow No. 10 (CI 47005).",
  howToUse:
    "Moisten face and neck. Apply a small amount of Purifying Neem Face Wash and gently work up a lather using a circular motion. Wash off and pat dry. Use twice daily, morning and evening, for best results. Follow with Himalaya Purifying Neem Scrub for deeper cleansing.",
  warnings:
    "For external use only. Avoid contact with eyes. If contact occurs, rinse thoroughly with water. Discontinue use if irritation occurs. Keep out of reach of children. Store in a cool, dry place away from direct sunlight.",
  volume: "150 ml",
  sfdaApproved: true,
  tags: ["Bestseller", "Herbal", "Soap-Free", "For Oily Skin"],
};

export const reviews: Review[] = [
  {
    id: "r1",
    author: "Sarah A.",
    rating: 5,
    date: "2026-03-15",
    title: "Best face wash for oily skin!",
    content:
      "I've been using this face wash for 3 months now and the results are amazing. My skin is so much clearer and less oily. The neem really works wonders. Highly recommend for anyone dealing with oily skin in Saudi's hot climate.",
    verified: true,
    helpful: 42,
  },
  {
    id: "r2",
    author: "Mohammed K.",
    rating: 4,
    date: "2026-03-02",
    title: "Good product, gentle on skin",
    content:
      "Works well for daily use. Doesn't dry out my skin like other face washes. The scent is mild and pleasant. Only giving 4 stars because I wish the tube was bigger for the price.",
    verified: true,
    helpful: 28,
  },
  {
    id: "r3",
    author: "Nora H.",
    rating: 5,
    date: "2026-02-20",
    title: "Finally cleared my acne",
    content:
      "After trying so many products, this one actually worked for my acne-prone skin. I use it twice daily as recommended and my breakouts have reduced significantly. The herbal formula is gentle yet effective.",
    verified: true,
    helpful: 35,
  },
  {
    id: "r4",
    author: "Khalid M.",
    rating: 4,
    date: "2026-02-10",
    title: "Great value for money",
    content:
      "Affordable and effective. I've been recommending it to all my friends. Works great especially during summer when skin gets extra oily. Fast delivery from NahdiCare too!",
    verified: false,
    helpful: 15,
  },
  {
    id: "r5",
    author: "Fatima R.",
    rating: 5,
    date: "2026-01-28",
    title: "Repurchased for the 5th time!",
    content:
      "This is my holy grail face wash. I keep coming back to it because nothing else works as well for my combination skin. The turmeric and neem combo is perfect. SFDA approved gives me confidence too.",
    verified: true,
    helpful: 51,
  },
];

export const relatedProducts: RelatedProduct[] = [
  {
    id: "him-scrub-01",
    name: "Himalaya Purifying Neem Scrub",
    brand: "Himalaya",
    price: 24.95,
    originalPrice: 32.0,
    rating: 4.4,
    reviewCount: 632,
    image: "/images/related-scrub.jpg",
    inStock: true,
    tag: "Pair With",
  },
  {
    id: "him-mask-01",
    name: "Himalaya Purifying Neem Face Pack",
    brand: "Himalaya",
    price: 27.5,
    rating: 4.3,
    reviewCount: 418,
    image: "/images/related-mask.jpg",
    inStock: true,
  },
  {
    id: "him-toner-01",
    name: "Himalaya Refreshing & Clarifying Toner",
    brand: "Himalaya",
    price: 31.95,
    originalPrice: 38.0,
    rating: 4.5,
    reviewCount: 289,
    image: "/images/related-toner.jpg",
    inStock: true,
    tag: "Popular",
  },
  {
    id: "him-moist-01",
    name: "Himalaya Nourishing Skin Cream",
    brand: "Himalaya",
    price: 19.95,
    rating: 4.7,
    reviewCount: 891,
    image: "/images/related-cream.jpg",
    inStock: false,
  },
];
