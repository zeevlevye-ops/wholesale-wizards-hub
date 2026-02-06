import { CategoryTheme } from "@/data/category-themes";
import { Product } from "@/data/types";

interface CategorySchemaProps {
  theme: CategoryTheme;
  products: Product[];
}

const CategorySchema = ({ theme, products }: CategorySchemaProps) => {
  // Organization schema for the category page
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": theme.factoryName,
    "description": theme.seoDescription,
    "url": `https://yeshmarket.com/categoria/${theme.slug}`,
    "logo": "https://yeshmarket.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+52 55 2589 7917",
      "contactType": "sales",
      "email": "ventas@yeshmarket.com",
      "availableLanguage": ["Spanish"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Yucatán 54-16, Roma Nte.",
      "addressLocality": "Cuauhtémoc",
      "postalCode": "06700",
      "addressRegion": "CDMX",
      "addressCountry": "MX"
    }
  };

  // ItemList schema for products
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Productos de ${theme.name}`,
    "description": theme.seoDescription,
    "numberOfItems": products.length,
    "itemListElement": products.slice(0, 20).map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "sku": product.sku,
        "image": product.imageMain,
        "url": `https://yeshmarket.com/producto/${product.slug}`,
        "brand": {
          "@type": "Brand",
          "name": "Yesh Market"
        }
      }
    }))
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://yeshmarket.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": theme.name,
        "item": `https://yeshmarket.com/categoria/${theme.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default CategorySchema;
