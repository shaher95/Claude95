export interface Product {
  id: string;
  name: string;
  nameAr: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  currency: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  sku: string;
  images: string[];
  description: string;
  ingredients: string;
  howToUse: string;
  warnings: string;
  volume: string;
  sfdaApproved: boolean;
  tags: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
  helpful: number;
}

export interface RelatedProduct {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  inStock: boolean;
  tag?: string;
}
