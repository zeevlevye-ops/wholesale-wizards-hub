import { Product, Category, FAQItem } from './types';
import catalogData from './products-catalog.csv?raw';

interface RawCSVRow {
  url: string;
  type: string;
  name: string;
  sku: string;
  ean: string;
  price: string;
  currency: string;
  availability: string;
  category: string;
  image_main: string;
  rating_value: string;
  rating_count: string;
  faq_json: string;
}

function parseCSV(csvText: string): RawCSVRow[] {
  const lines = csvText.split('\n');
  const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/ /g, '_'));
  
  const rows: RawCSVRow[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    
    // Handle CSV with potential commas in JSON fields
    const values: string[] = [];
    let current = '';
    let inQuotes = false;
    
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"' && (j === 0 || line[j-1] !== '\\')) {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());
    
    const row: Record<string, string> = {};
    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });
    
    rows.push(row as unknown as RawCSVRow);
  }
  
  return rows;
}

function extractSlugFromUrl(url: string): string {
  const match = url.match(/\/productos\/([^.]+)\.html/);
  if (match) return match[1];
  
  const categoryMatch = url.match(/\/categorias\/([^.]+)\.html/);
  if (categoryMatch) return categoryMatch[1];
  
  return '';
}

function parseFAQ(faqJson: string): FAQItem[] {
  if (!faqJson || faqJson.trim() === '') return [];
  
  try {
    // Remove outer quotes if present
    let cleanJson = faqJson;
    if (cleanJson.startsWith('"') && cleanJson.endsWith('"')) {
      cleanJson = cleanJson.slice(1, -1);
    }
    // Unescape double quotes
    cleanJson = cleanJson.replace(/""/g, '"');
    
    const parsed = JSON.parse(cleanJson);
    if (parsed.mainEntity && Array.isArray(parsed.mainEntity)) {
      return parsed.mainEntity.map((item: any) => ({
        question: item.name || '',
        answer: item.acceptedAnswer?.text || ''
      }));
    }
  } catch (e) {
    console.warn('Failed to parse FAQ JSON:', e);
  }
  
  return [];
}

function getCategorySlug(categoryName: string): string {
  // Use the mapping from category-themes if available
  const mappings: Record<string, string> = {
    "Cajas Plásticas": "cajas-plasticas",
    "Racks y Estantería": "racks-y-estanteria",
    "Movilidad": "movilidad",
    "Equipamiento Cocina": "equipamiento-cocina",
    "Fine Dining": "fine-dining",
    "Fast Food": "fast-food",
    "Papel Corporativo": "papel-corporativo",
    "Papelería Escolar": "papeleria-escolar",
    "Acrílicos y Exhibición": "acrilicos-y-exhibicion",
    "Mobiliario Comercial": "mobiliario-comercial",
    "Botes de Basura": "botes-de-basura",
    "Deportes y Wellness": "deportes-y-wellness",
    "Artículos Infantiles": "articulos-infantiles"
  };
  
  if (mappings[categoryName]) {
    return mappings[categoryName];
  }
  
  return categoryName
    .toLowerCase()
    .replace(/[áà]/g, 'a')
    .replace(/[éè]/g, 'e')
    .replace(/[íì]/g, 'i')
    .replace(/[óò]/g, 'o')
    .replace(/[úù]/g, 'u')
    .replace(/ñ/g, 'n')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Parse the CSV data
const rawRows = parseCSV(catalogData);

// Separate categories and products
const categoriesMap = new Map<string, Category>();
const products: Product[] = [];

let currentCategory = '';
let currentCategorySlug = '';

rawRows.forEach(row => {
  if (row.type === 'category') {
    // Use the category field (column 9) as canonical name, fallback to row name
    const canonicalName = row.category?.trim() || row.name?.trim() || '';
    currentCategory = canonicalName;
    currentCategorySlug = getCategorySlug(currentCategory);
    
    if (currentCategory && !categoriesMap.has(currentCategorySlug)) {
      categoriesMap.set(currentCategorySlug, {
        slug: currentCategorySlug,
        name: currentCategory,
        url: row.url,
        products: []
      });
    }
  } else if (row.type === 'product' && row.name && row.price) {
    const slug = extractSlugFromUrl(row.url);
    if (!slug) return;
    
    // Use product's own category field if available, fallback to parent
    const productCategory = row.category?.trim() || currentCategory;
    const productCategorySlug = getCategorySlug(productCategory);
    
    const product: Product = {
      slug,
      url: row.url,
      name: row.name.trim(),
      sku: row.sku || '',
      ean: row.ean || '',
      price: parseFloat(row.price) || 0,
      currency: row.currency || 'MXN',
      availability: row.availability || 'InStock',
      category: productCategory,
      categorySlug: productCategorySlug,
      imageMain: row.image_main || '',
      ratingValue: parseFloat(row.rating_value) || 0,
      ratingCount: parseInt(row.rating_count) || 0,
      faq: parseFAQ(row.faq_json)
    };
    
    products.push(product);
    
    // Add to category
    const category = categoriesMap.get(productCategorySlug);
    if (category) {
      category.products.push(product);
    }
  }
});

export const allProducts: Product[] = products;
export const allCategories: Category[] = Array.from(categoriesMap.values());

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find(p => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return allProducts.filter(p => p.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return allCategories.find(c => c.slug === slug);
}

// Generate price tiers based on base price
export function generatePriceTiers(basePrice: number): { quantity: string; pricePerUnit: string; savings: string; popular?: boolean }[] {
  return [
    {
      quantity: "10 - 49",
      pricePerUnit: `$${basePrice.toFixed(2)}`,
      savings: "Precio Base"
    },
    {
      quantity: "50 - 99",
      pricePerUnit: `$${(basePrice * 0.90).toFixed(2)}`,
      savings: "10% de ahorro"
    },
    {
      quantity: "100 - 249",
      pricePerUnit: `$${(basePrice * 0.82).toFixed(2)}`,
      savings: "18% de ahorro",
      popular: true
    },
    {
      quantity: "250 - 499",
      pricePerUnit: `$${(basePrice * 0.75).toFixed(2)}`,
      savings: "25% de ahorro"
    },
    {
      quantity: "500+",
      pricePerUnit: `$${(basePrice * 0.68).toFixed(2)}`,
      savings: "32% de ahorro"
    }
  ];
}
