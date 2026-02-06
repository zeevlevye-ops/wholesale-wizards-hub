export interface Product {
  slug: string;
  url: string;
  name: string;
  sku: string;
  ean: string;
  price: number;
  currency: string;
  availability: string;
  category: string;
  categorySlug: string;
  imageMain: string;
  ratingValue: number;
  ratingCount: number;
  faq: FAQItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Category {
  slug: string;
  name: string;
  url: string;
  products: Product[];
}

export interface PriceTier {
  quantity: string;
  pricePerUnit: string;
  savings: string;
  popular?: boolean;
}
