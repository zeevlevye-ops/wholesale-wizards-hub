import { Product } from "@/data/types";

interface ProductSchemaProps {
  product: Product;
}

const ProductSchema = ({ product }: ProductSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "sku": product.sku,
    "gtin13": product.ean || undefined,
    "image": product.imageMain,
    "description": `Venta al mayoreo de ${product.name}. Fabricación mexicana con garantía de calidad. SKU: ${product.sku}. Disponibilidad inmediata para distribuidores y empresas.`,
    "brand": {
      "@type": "Brand",
      "name": "Yesh Market"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Yesh Market",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Yucatán 54-16, Roma Nte.",
        "addressLocality": "Cuauhtémoc",
        "postalCode": "06700",
        "addressRegion": "CDMX",
        "addressCountry": "MX"
      },
      "telephone": "+52 55 2589 7917",
      "email": "ventas@yeshmarket.com"
    },
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "availability": product.availability === "InStock" 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock",
      "priceCurrency": product.currency,
      "priceSpecification": {
        "@type": "PriceSpecification",
        "eligibleQuantity": {
          "@type": "QuantitativeValue",
          "unitText": "tarima",
          "minValue": 1
        }
      },
      "seller": {
        "@type": "Organization",
        "name": "Yesh Market"
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 30
      }
    },
    ...(product.ratingValue > 0 && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": product.ratingValue,
        "reviewCount": product.ratingCount,
        "bestRating": 5,
        "worstRating": 1
      }
    }),
    ...(product.faq.length > 0 && {
      "mainEntity": product.faq.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ProductSchema;
