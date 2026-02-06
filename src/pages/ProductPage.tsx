import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroProduct from "@/components/sections/HeroProduct";
import ProductSpecs from "@/components/sections/ProductSpecs";
import TrustSignals from "@/components/sections/TrustSignals";
import ProductBenefits from "@/components/sections/ProductBenefits";
import QuoteForm from "@/components/sections/QuoteForm";
import ProductFAQ from "@/components/sections/ProductFAQ";
import RelatedProducts from "@/components/sections/RelatedProducts";
import ProductSchema from "@/components/seo/ProductSchema";
import { getProductBySlug } from "@/data/products";
import { getCategoryTheme, getCategorySlugFromName } from "@/data/category-themes";

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Update page title and meta for SEO
  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Mayoreo | Yesh Market`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", 
          `Compra al mayoreo ${product.name}. Fabricante directo en México. SKU: ${product.sku}. Pedido mínimo: 1 tarima. Cotización inmediata para distribuidores y empresas. Envío nacional.`
        );
      }
    }
  }, [product]);

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const categorySlug = getCategorySlugFromName(product.category);
  const theme = getCategoryTheme(categorySlug);

  return (
    <div className="min-h-screen bg-background">
      <ProductSchema product={product} />
      
      <Header categorySlug={categorySlug} />
      
      <main>
        <HeroProduct
          productName={product.name}
          productDescription={`Venta exclusiva al mayoreo de ${product.name}. SKU: ${product.sku}. Fabricación mexicana con garantía de calidad. Disponibilidad inmediata para distribuidores y empresas.`}
          imageUrl={product.imageMain}
          minOrder="1 tarima"
          category={product.category}
          categorySlug={categorySlug}
        />
        
        <ProductSpecs 
          sku={product.sku}
          ean={product.ean}
          category={product.category}
        />
        
        <TrustSignals />
        
        <ProductBenefits />

        {product.faq.length > 0 && (
          <ProductFAQ faqs={product.faq} productName={product.name} />
        )}
        
        <div id="cotizar">
          <QuoteForm productName={product.name} productSku={product.sku} />
        </div>

        <RelatedProducts
          currentSlug={product.slug}
          categorySlug={categorySlug}
          categoryName={product.category}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
