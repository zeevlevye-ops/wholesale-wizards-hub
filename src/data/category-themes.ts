import { LucideIcon, Package, Layers, Truck, ChefHat, Droplets, UtensilsCrossed, FileText, Pencil, Frame, Building2, Trash2, Dumbbell, Baby } from "lucide-react";

export interface CategoryTheme {
  slug: string;
  name: string;
  factoryName: string;
  heroTitle: string;
  heroSubtitle: string;
  seoDescription: string;
  keywords: string[];
  icon: LucideIcon;
  // Colors in HSL format for dynamic theming
  colors: {
    primary: string;
    primaryForeground: string;
    accent: string;
    gradient: string;
  };
  stats: {
    clients: string;
    experience: string;
    capacity: string;
  };
  benefits: string[];
  ctaText: string;
}

export const categoryThemes: Record<string, CategoryTheme> = {
  "cajas-plasticas": {
    slug: "cajas-plasticas",
    name: "Cajas Plásticas",
    factoryName: "Fábrica de Cajas Plásticas Industriales",
    heroTitle: "Fábrica de Cajas Plásticas Industriales",
    heroSubtitle: "Fabricación mexicana especializada en cajas de almacenamiento de alta resistencia para bodegas, centros de distribución y operaciones logísticas. Capacidad de producción de +50,000 unidades mensuales.",
    seoDescription: "Somos fabricantes directos de cajas plásticas industriales en México. Cajas de almacenamiento, transporte y logística para mayoristas y distribuidores. Pedidos desde 1 tarima.",
    keywords: [
      "fábrica de cajas plásticas",
      "cajas plásticas industriales mayoreo",
      "distribuidor cajas almacenamiento México",
      "cajas plásticas uso rudo al por mayor",
      "cajas apilables industriales",
      "contenedores plásticos mayoreo",
      "cajas de plástico para bodega",
      "proveedor cajas plásticas CDMX",
      "venta al mayoreo cajas organizadoras",
      "cajas plásticas con tapa para almacén",
      "contenedores de almacenaje industrial",
      "cajas plasticas resistentes logística",
      "cajas para centro de distribución"
    ],
    icon: Package,
    colors: {
      primary: "220 60% 25%",
      primaryForeground: "40 30% 96%",
      accent: "210 80% 50%",
      gradient: "linear-gradient(135deg, hsl(220 60% 20%) 0%, hsl(210 50% 30%) 50%, hsl(200 60% 35%) 100%)"
    },
    stats: {
      clients: "+800 bodegas",
      experience: "15 años",
      capacity: "50,000 cajas/mes"
    },
    benefits: [
      "Resistencia a impactos y cargas pesadas",
      "Apilables y optimizadas para almacenamiento",
      "Fabricación con plástico virgen o reciclado",
      "Personalización de colores y grabado de logo"
    ],
    ctaText: "Cotizar Cajas Plásticas"
  },
  "racks-y-estanteria": {
    slug: "racks-y-estanteria",
    name: "Racks y Estantería",
    factoryName: "Fábrica de Racks y Estantería Industrial",
    heroTitle: "Fábrica de Racks y Estantería Industrial",
    heroSubtitle: "Fabricación especializada de sistemas de almacenamiento metálico para almacenes, bodegas y centros de distribución. Ingeniería a la medida con acero de alta resistencia.",
    seoDescription: "Fabricantes de racks industriales y estantería metálica en México. Sistemas de almacenamiento para bodegas y almacenes. Instalación y diseño a medida.",
    keywords: [
      "fábrica de racks industriales",
      "estantería metálica mayoreo",
      "racks para almacén México",
      "sistemas de almacenamiento industrial",
      "estantería de carga pesada",
      "anaqueles metálicos para bodega",
      "racks de plástico resistente mayoreo",
      "estantes para almacén al por mayor",
      "proveedor racks industriales CDMX",
      "estantería para centro de distribución",
      "anaqueles de 5 repisas uso rudo",
      "rack estantería para negocio"
    ],
    icon: Layers,
    colors: {
      primary: "220 15% 30%",
      primaryForeground: "0 0% 96%",
      accent: "220 10% 50%",
      gradient: "linear-gradient(135deg, hsl(220 15% 25%) 0%, hsl(220 10% 35%) 50%, hsl(220 8% 40%) 100%)"
    },
    stats: {
      clients: "+500 almacenes",
      experience: "18 años",
      capacity: "100 toneladas/mes"
    },
    benefits: [
      "Acero estructural de alta resistencia",
      "Diseño sísmico certificado",
      "Instalación profesional incluida",
      "Capacidad de carga desde 500kg hasta 5 toneladas"
    ],
    ctaText: "Cotizar Racks Industriales"
  },
  "movilidad": {
    slug: "movilidad",
    name: "Movilidad",
    factoryName: "Fábrica de Equipo de Movilidad Industrial",
    heroTitle: "Fábrica de Equipo de Movilidad Industrial",
    heroSubtitle: "Fabricación y distribución de carros de carga, patines hidráulicos, escaleras industriales y equipo de transporte interno para operaciones eficientes.",
    seoDescription: "Fabricantes de equipo de movilidad industrial: patines hidráulicos, carros de carga, escaleras y plataformas. Distribución mayorista en todo México.",
    keywords: [
      "patines hidráulicos mayoreo",
      "carros de carga industrial",
      "equipo de transporte interno",
      "escaleras industriales México",
      "plataformas de carga",
      "diablitos de carga al por mayor",
      "carros porta garrafón mayoreo",
      "equipo de movilidad para bodega",
      "carros multiusos industrial",
      "proveedor equipo transporte CDMX"
    ],
    icon: Truck,
    colors: {
      primary: "25 90% 45%",
      primaryForeground: "0 0% 100%",
      accent: "35 100% 50%",
      gradient: "linear-gradient(135deg, hsl(25 85% 40%) 0%, hsl(30 90% 45%) 50%, hsl(35 95% 50%) 100%)"
    },
    stats: {
      clients: "+1,200 empresas",
      experience: "12 años",
      capacity: "5,000 equipos/mes"
    },
    benefits: [
      "Capacidades desde 100kg hasta 5 toneladas",
      "Ruedas industriales de alta durabilidad",
      "Estructura reforzada para uso intensivo",
      "Servicio técnico y refacciones"
    ],
    ctaText: "Cotizar Equipo de Movilidad"
  },
  "equipamiento-cocina": {
    slug: "equipamiento-cocina",
    name: "Equipamiento Cocina",
    factoryName: "Fábrica de Equipamiento para Cocina Industrial",
    heroTitle: "Fábrica de Equipamiento para Cocina Industrial",
    heroSubtitle: "Fabricación especializada de utensilios y equipo de aluminio para restaurantes, hoteles, comedores industriales y negocios de alimentos. Calidad gastronómica profesional.",
    seoDescription: "Fabricantes de equipamiento para cocina industrial en México. Ollas, vaporeras, sartenes y utensilios de aluminio para restaurantes y hoteles. Venta al mayoreo.",
    keywords: [
      "equipamiento cocina industrial",
      "utensilios aluminio mayoreo",
      "fábrica ollas industriales",
      "vaporeras industriales México",
      "equipo para restaurantes",
      "sartenes industriales aluminio mayoreo",
      "cazuelas y cazos industriales",
      "equipo HORECA profesional",
      "utensilios para cocina comercial",
      "proveedor equipo restaurantes CDMX",
      "charolas para pizza aluminio mayoreo",
      "moldes industriales repostería"
    ],
    icon: ChefHat,
    colors: {
      primary: "0 75% 45%",
      primaryForeground: "0 0% 100%",
      accent: "15 90% 50%",
      gradient: "linear-gradient(135deg, hsl(0 70% 40%) 0%, hsl(10 80% 45%) 50%, hsl(20 85% 50%) 100%)"
    },
    stats: {
      clients: "+2,500 restaurantes",
      experience: "25 años",
      capacity: "10,000 piezas/mes"
    },
    benefits: [
      "Aluminio de grado alimenticio",
      "Resistencia a altas temperaturas",
      "Acabado profesional duradero",
      "Diseños optimizados para cocinas comerciales"
    ],
    ctaText: "Cotizar Equipo de Cocina"
  },
  "fine-dining": {
    slug: "fine-dining",
    name: "Fine Dining",
    factoryName: "Distribuidora de Ingredientes Fine Dining y Aceites Premium",
    heroTitle: "Distribuidora de Ingredientes Fine Dining y Aceites Premium",
    heroSubtitle: "Importación y distribución mayorista de aceites gourmet, ingredientes orgánicos y productos premium para alta cocina. Aceite de oliva, ajonjolí, aguacate y más.",
    seoDescription: "Distribuidora mayorista de aceites gourmet e ingredientes fine dining en México. Aceite de oliva, aceites especiales, harinas sin gluten para restaurantes de alta cocina.",
    keywords: [
      "aceites gourmet mayoreo",
      "aceite de oliva extra virgen al por mayor",
      "ingredientes fine dining México",
      "aceite de aguacate profesional",
      "aceite de ajonjolí mayoreo",
      "distribuidor aceites premium CDMX",
      "aceite oliva 20 litros mayoreo",
      "ingredientes orgánicos al por mayor",
      "proveedor aceites para restaurantes",
      "aceite de linaza granel profesional",
      "harinas sin gluten mayoreo México"
    ],
    icon: Droplets,
    colors: {
      primary: "45 70% 35%",
      primaryForeground: "0 0% 100%",
      accent: "50 80% 50%",
      gradient: "linear-gradient(135deg, hsl(45 65% 30%) 0%, hsl(48 70% 38%) 50%, hsl(50 75% 45%) 100%)"
    },
    stats: {
      clients: "+1,200 restaurantes gourmet",
      experience: "18 años",
      capacity: "50,000 litros/mes"
    },
    benefits: [
      "Aceites prensados en frío extra virgen",
      "Certificación de pureza y origen garantizada",
      "Presentaciones desde 1L hasta 20L",
      "Importación directa de productos premium"
    ],
    ctaText: "Cotizar Aceites Premium"
  },
  "fast-food": {
    slug: "fast-food",
    name: "Fast Food",
    factoryName: "Fábrica de Salsas e Insumos para Fast Food",
    heroTitle: "Fábrica de Salsas e Insumos para Fast Food",
    heroSubtitle: "Fabricación y distribución de salsas, aderezos y condimentos para restaurantes de comida rápida, taquerías, pizzerías y franquicias. Presentaciones profesionales de alto rendimiento.",
    seoDescription: "Fábrica de salsas para fast food en México. BBQ, catsup, salsas picantes, aderezos para taquerías y restaurantes. Presentaciones de 20 litros.",
    keywords: [
      "salsas fast food mayoreo",
      "catsup granel profesional",
      "salsa bbq 20 litros",
      "aderezos para restaurantes México",
      "salsas para franquicias",
      "salsa habanero al por mayor",
      "aderezo chipotle 20 litros mayoreo",
      "proveedor salsas para taquerías",
      "insumos comida rápida al por mayor",
      "salsas picantes granel México",
      "condimentos industriales para negocio"
    ],
    icon: UtensilsCrossed,
    colors: {
      primary: "0 85% 40%",
      primaryForeground: "0 0% 100%",
      accent: "15 90% 55%",
      gradient: "linear-gradient(135deg, hsl(0 80% 35%) 0%, hsl(10 85% 42%) 50%, hsl(20 90% 48%) 100%)"
    },
    stats: {
      clients: "+4,000 restaurantes",
      experience: "25 años",
      capacity: "100,000 litros/mes"
    },
    benefits: [
      "Presentaciones de alto rendimiento 20L",
      "Fórmulas exclusivas para franquicias",
      "Salsas en sobres individuales disponibles",
      "Maquila con tu marca propia"
    ],
    ctaText: "Cotizar Salsas Fast Food"
  },
  "papel-corporativo": {
    slug: "papel-corporativo",
    name: "Papel Corporativo",
    factoryName: "Distribuidora de Papel Corporativo y Oficina",
    heroTitle: "Distribuidora de Papel Corporativo y Oficina",
    heroSubtitle: "Distribución mayorista de papel bond, papel para impresora, cartulinas y materiales de oficina para empresas, corporativos y centros de copiado.",
    seoDescription: "Distribuidora mayorista de papel corporativo en México. Papel bond, papel para impresora, resmas y materiales de oficina. Precios de fábrica.",
    keywords: [
      "papel corporativo mayoreo",
      "resmas de papel bond",
      "papel para oficina al por mayor",
      "distribuidora de papel México",
      "papel para impresora mayoreo",
      "papel higiénico institucional mayoreo",
      "toallas interdobladas al por mayor",
      "servilletas para negocio mayoreo",
      "proveedor papel bond CDMX",
      "opalina cartulina al por mayor",
      "insumos de oficina para empresas"
    ],
    icon: FileText,
    colors: {
      primary: "210 60% 35%",
      primaryForeground: "0 0% 100%",
      accent: "200 70% 50%",
      gradient: "linear-gradient(135deg, hsl(210 55% 30%) 0%, hsl(205 60% 38%) 50%, hsl(200 65% 45%) 100%)"
    },
    stats: {
      clients: "+600 corporativos",
      experience: "22 años",
      capacity: "500 toneladas/mes"
    },
    benefits: [
      "Papel certificado FSC disponible",
      "Gramajes desde 75g hasta 300g",
      "Entrega directa a oficinas",
      "Facturación corporativa"
    ],
    ctaText: "Cotizar Papel Corporativo"
  },
  "papeleria-escolar": {
    slug: "papeleria-escolar",
    name: "Papelería Escolar",
    factoryName: "Distribuidora de Papelería Escolar",
    heroTitle: "Distribuidora de Papelería Escolar",
    heroSubtitle: "Distribución mayorista de cuadernos, lápices, colores y materiales escolares para papelerías, escuelas y distribuidores. Marcas reconocidas a precios de mayoreo.",
    seoDescription: "Distribuidora mayorista de papelería escolar en México. Cuadernos, lápices, colores y útiles escolares. Surtido completo para papelerías.",
    keywords: [
      "papelería escolar mayoreo",
      "útiles escolares al por mayor",
      "distribuidora cuadernos México",
      "materiales escolares mayoreo",
      "surtido papelerías",
      "lista de útiles al por mayor",
      "proveedor papelería escolar CDMX",
      "temporada escolar mayoreo",
      "lápices y colores al por mayor",
      "foamy y materiales didácticos mayoreo"
    ],
    icon: Pencil,
    colors: {
      primary: "280 60% 45%",
      primaryForeground: "0 0% 100%",
      accent: "320 70% 55%",
      gradient: "linear-gradient(135deg, hsl(280 55% 40%) 0%, hsl(300 60% 48%) 50%, hsl(320 65% 55%) 100%)"
    },
    stats: {
      clients: "+2,000 papelerías",
      experience: "28 años",
      capacity: "1M piezas/mes"
    },
    benefits: [
      "Marcas reconocidas garantizadas",
      "Paquetes escolares armados",
      "Programa de temporada escolar",
      "Crédito para distribuidores"
    ],
    ctaText: "Cotizar Papelería Escolar"
  },
  "acrilicos-y-exhibicion": {
    slug: "acrilicos-y-exhibicion",
    name: "Acrílicos y Exhibición",
    factoryName: "Fábrica de Exhibidores y Acrílicos",
    heroTitle: "Fábrica de Exhibidores y Acrílicos",
    heroSubtitle: "Fabricación especializada de exhibidores de acrílico, displays y señalización para retail, tiendas departamentales y puntos de venta. Diseño personalizado disponible.",
    seoDescription: "Fábrica de exhibidores de acrílico en México. Displays, porta precios, exhibidores para tiendas y señalización comercial. Fabricación a medida.",
    keywords: [
      "exhibidores acrílico mayoreo",
      "displays para tiendas",
      "fábrica acrílicos México",
      "señalización comercial",
      "porta precios acrílico",
      "charolas acrílicas para restaurantes",
      "porta menú acrílico mayoreo",
      "exhibidores para pasteles acrílico",
      "proveedor acrílicos CDMX",
      "escaleras acrílicas exhibición mayoreo",
      "caja de propinas acrílico al por mayor"
    ],
    icon: Frame,
    colors: {
      primary: "220 20% 40%",
      primaryForeground: "0 0% 100%",
      accent: "200 30% 60%",
      gradient: "linear-gradient(135deg, hsl(220 18% 35%) 0%, hsl(210 22% 42%) 50%, hsl(200 25% 50%) 100%)"
    },
    stats: {
      clients: "+400 tiendas",
      experience: "14 años",
      capacity: "3,000 exhibidores/mes"
    },
    benefits: [
      "Acrílico cristal de alta transparencia",
      "Corte láser de precisión",
      "Diseño 3D antes de producción",
      "Armado e instalación opcional"
    ],
    ctaText: "Cotizar Exhibidores"
  },
  "mobiliario-comercial": {
    slug: "mobiliario-comercial",
    name: "Mobiliario Comercial",
    factoryName: "Fábrica de Mobiliario Comercial",
    heroTitle: "Fábrica de Mobiliario Comercial",
    heroSubtitle: "Fabricación de mobiliario para tiendas, restaurantes, oficinas y espacios comerciales. Mesas, sillas, mostradores y mobiliario a medida con acabados profesionales.",
    seoDescription: "Fábrica de mobiliario comercial en México. Mesas, sillas, mostradores y mobiliario para tiendas y restaurantes. Fabricación a medida.",
    keywords: [
      "mobiliario comercial mayoreo",
      "muebles para tiendas",
      "fábrica mobiliario México",
      "mostradores comerciales",
      "sillas para restaurantes mayoreo",
      "exhibidores de alambre para negocio",
      "maniquíes metálicos al por mayor",
      "ganchos blíster panel ranurado mayoreo",
      "proveedor mobiliario tiendas CDMX",
      "exhibidores personalizados para marcas",
      "equipo punto de venta al por mayor"
    ],
    icon: Building2,
    colors: {
      primary: "0 0% 15%",
      primaryForeground: "0 0% 100%",
      accent: "45 80% 50%",
      gradient: "linear-gradient(135deg, hsl(0 0% 12%) 0%, hsl(0 0% 20%) 50%, hsl(45 10% 25%) 100%)"
    },
    stats: {
      clients: "+700 negocios",
      experience: "20 años",
      capacity: "500 muebles/mes"
    },
    benefits: [
      "Diseño personalizado sin costo",
      "Materiales de primera calidad",
      "Acabados resistentes para uso comercial",
      "Garantía de 5 años en estructura"
    ],
    ctaText: "Cotizar Mobiliario"
  },
  "botes-de-basura": {
    slug: "botes-de-basura",
    name: "Botes de Basura",
    factoryName: "Fábrica de Botes de Basura Industriales",
    heroTitle: "Fábrica de Botes de Basura Industriales",
    heroSubtitle: "Fabricación de contenedores de basura y sistemas de reciclaje para municipios, empresas, plazas comerciales y espacios públicos. Capacidades desde 50L hasta 1,100L.",
    seoDescription: "Fábrica de botes de basura industriales en México. Contenedores para reciclaje, botes comerciales y sistemas de separación. Venta al mayoreo.",
    keywords: [
      "botes de basura industriales",
      "contenedores reciclaje mayoreo",
      "fábrica botes basura México",
      "basureros comerciales",
      "sistemas de separación",
      "botes con pedal al por mayor",
      "contenedores orgánico inorgánico mayoreo",
      "cestos papeleros para oficina mayoreo",
      "proveedor botes basura CDMX",
      "botes de basura 80 litros al por mayor",
      "contenedores para plazas y municipios"
    ],
    icon: Trash2,
    colors: {
      primary: "142 55% 35%",
      primaryForeground: "0 0% 100%",
      accent: "120 60% 45%",
      gradient: "linear-gradient(135deg, hsl(142 50% 30%) 0%, hsl(130 55% 38%) 50%, hsl(120 58% 42%) 100%)"
    },
    stats: {
      clients: "+300 municipios",
      experience: "16 años",
      capacity: "8,000 botes/mes"
    },
    benefits: [
      "Resistencia UV para exteriores",
      "Sistemas de separación de residuos",
      "Colores personalizados disponibles",
      "Rotulado y señalización incluidos"
    ],
    ctaText: "Cotizar Botes de Basura"
  },
  "deportes-y-wellness": {
    slug: "deportes-y-wellness",
    name: "Deportes y Wellness",
    factoryName: "Distribuidora de Equipo Deportivo y Wellness",
    heroTitle: "Distribuidora de Equipo Deportivo y Wellness",
    heroSubtitle: "Distribución mayorista de equipo para gimnasios, yoga, fitness y bienestar. Pesas, tapetes, bandas de resistencia y accesorios para centros deportivos.",
    seoDescription: "Distribuidora mayorista de equipo deportivo y wellness en México. Pesas, tapetes yoga, equipo fitness para gimnasios y centros deportivos.",
    keywords: [
      "equipo deportivo mayoreo",
      "artículos fitness al por mayor",
      "distribuidora gym México",
      "tapetes yoga mayoreo",
      "equipo gimnasio",
      "piso de gimnasio foamy al por mayor",
      "mancuernas plásticas mayoreo",
      "tablas de natación foamy mayoreo",
      "proveedor equipo deportivo CDMX",
      "tapetes foamy ejercicio al por mayor",
      "pisos para gym y crossfit mayoreo"
    ],
    icon: Dumbbell,
    colors: {
      primary: "210 80% 45%",
      primaryForeground: "0 0% 100%",
      accent: "190 85% 50%",
      gradient: "linear-gradient(135deg, hsl(210 75% 40%) 0%, hsl(200 80% 45%) 50%, hsl(190 82% 50%) 100%)"
    },
    stats: {
      clients: "+500 gimnasios",
      experience: "10 años",
      capacity: "15,000 piezas/mes"
    },
    benefits: [
      "Equipo de grado comercial",
      "Garantía extendida incluida",
      "Asesoría para equipamiento",
      "Financiamiento disponible"
    ],
    ctaText: "Cotizar Equipo Deportivo"
  },
  "articulos-infantiles": {
    slug: "articulos-infantiles",
    name: "Artículos Infantiles",
    factoryName: "Distribuidora de Artículos Infantiles",
    heroTitle: "Distribuidora de Artículos Infantiles",
    heroSubtitle: "Distribución mayorista de mobiliario y artículos para guarderías, kinders, escuelas y espacios infantiles. Productos seguros con certificaciones de seguridad.",
    seoDescription: "Distribuidora mayorista de artículos infantiles en México. Mobiliario para guarderías, juegos infantiles, mesas y sillas para escuelas. Productos certificados.",
    keywords: [
      "artículos infantiles mayoreo",
      "mobiliario guarderías",
      "distribuidora escuelas México",
      "mesas sillas kinder",
      "juegos infantiles mayoreo",
      "pisos de foamy infantiles al por mayor",
      "tapete antigolpe para bebé mayoreo",
      "mesas plegables infantiles mayoreo",
      "proveedor artículos infantiles CDMX",
      "pisos ludoteca escuelas al por mayor",
      "mobiliario seguro para niños mayoreo"
    ],
    icon: Baby,
    colors: {
      primary: "340 60% 55%",
      primaryForeground: "0 0% 100%",
      accent: "200 70% 60%",
      gradient: "linear-gradient(135deg, hsl(340 55% 50%) 0%, hsl(320 60% 55%) 50%, hsl(280 65% 60%) 100%)"
    },
    stats: {
      clients: "+400 guarderías",
      experience: "18 años",
      capacity: "2,000 piezas/mes"
    },
    benefits: [
      "Materiales atóxicos certificados",
      "Bordes redondeados de seguridad",
      "Colores estimulantes para niños",
      "Cumplimiento de normas NOM"
    ],
    ctaText: "Cotizar Artículos Infantiles"
  }
};

export function getCategoryTheme(categorySlug: string): CategoryTheme | undefined {
  return categoryThemes[categorySlug];
}

export function getAllCategoryThemes(): CategoryTheme[] {
  return Object.values(categoryThemes);
}

// Mapping from original category names (from CSV) to our theme slugs
export const categoryNameToSlug: Record<string, string> = {
  // Exact matches from CSV
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
  "Artículos Infantiles": "articulos-infantiles",
};

export function getCategorySlugFromName(categoryName: string): string {
  // First try exact match
  if (categoryNameToSlug[categoryName]) {
    return categoryNameToSlug[categoryName];
  }
  
  // Try trimmed match
  const trimmed = categoryName.trim();
  if (categoryNameToSlug[trimmed]) {
    return categoryNameToSlug[trimmed];
  }
  
  // Fallback to slug generation
  return trimmed.toLowerCase()
    .replace(/[áà]/g, 'a')
    .replace(/[éè]/g, 'e')
    .replace(/[íì]/g, 'i')
    .replace(/[óò]/g, 'o')
    .replace(/[úù]/g, 'u')
    .replace(/ñ/g, 'n')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
