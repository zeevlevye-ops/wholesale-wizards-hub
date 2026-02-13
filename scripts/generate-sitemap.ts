import { allProducts, allCategories } from '../src/data/products';

const BASE_URL = 'https://yeshmarket.com';

function generateSitemap(): string {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
`;

  // Category pages
  for (const cat of allCategories) {
    xml += `  <url>
    <loc>${BASE_URL}/categoria/${cat.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  }

  // Product pages
  for (const product of allProducts) {
    xml += `  <url>
    <loc>${BASE_URL}/producto/${product.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
  }

  xml += `</urlset>`;
  return xml;
}

// Write sitemap
const sitemap = generateSitemap();
await Bun.write('public/sitemap.xml', sitemap);
console.log(`✅ Sitemap generated with ${allCategories.length} categories and ${allProducts.length} products`);
