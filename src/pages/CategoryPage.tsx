import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroCategory from "@/components/sections/HeroCategory";
import CategoryProductGrid from "@/components/sections/CategoryProductGrid";
import CategorySEOText from "@/components/sections/CategorySEOText";
import TrustSignals from "@/components/sections/TrustSignals";
import ProductBenefits from "@/components/sections/ProductBenefits";
import QuoteForm from "@/components/sections/QuoteForm";
import CategorySchema from "@/components/seo/CategorySchema";
import { getCategoryTheme, getCategorySlugFromName } from "@/data/category-themes";
import { allProducts } from "@/data/products";

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  
  const theme = categorySlug ? getCategoryTheme(categorySlug) : undefined;
  
  // Get products for this category - match by categorySlug
  const products = allProducts.filter(p => {
    const productSlug = getCategorySlugFromName(p.category);
    return productSlug === categorySlug;
  });

  // Scroll to top on category change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  // Update page title and meta for SEO
  useEffect(() => {
    if (theme) {
      document.title = `${theme.factoryName} | Mayoreo México | Yesh Market`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", theme.seoDescription);
      }
    }
  }, [theme]);
  
  if (!theme) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <CategorySchema theme={theme} products={products} />
      
      <Header categorySlug={categorySlug} />
      
      <main>
        <HeroCategory theme={theme} productCount={products.length} />
        
        <TrustSignals />
        
        <CategoryProductGrid products={products} theme={theme} />
        
        <CategorySEOText theme={theme} />
        
        <ProductBenefits />
        
        <div id="cotizar">
          <QuoteForm 
            categoryName={theme.name}
            contextMessage={`Estoy interesado en productos de ${theme.name}`}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
