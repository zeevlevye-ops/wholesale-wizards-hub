const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Yesh Market",
    "alternateName": "Yesh Market Mayoreo",
    "description": "Fabricante y proveedor mayorista en México. Distribuimos cajas plásticas, equipamiento de cocina, salsas, racks y más para empresas, hoteles y restaurantes.",
    "url": "https://yeshmarket.com",
    "logo": "https://yeshmarket.com/logo.png",
    "telephone": "+52 55 2589 7917",
    "email": "ventas@yeshmarket.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Yucatán 54-16, Roma Nte.",
      "addressLocality": "Cuauhtémoc",
      "postalCode": "06700",
      "addressRegion": "CDMX",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.4203,
      "longitude": -99.1617
    },
    "areaServed": {
      "@type": "Country",
      "name": "México"
    },
    "sameAs": [],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+52 55 2589 7917",
        "contactType": "sales",
        "email": "ventas@yeshmarket.com",
        "availableLanguage": ["Spanish"]
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default OrganizationSchema;
