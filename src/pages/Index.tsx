import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroCorporate from "@/components/sections/HeroCorporate";
import CategoriesGrid from "@/components/sections/CategoriesGrid";
import TrustSignals from "@/components/sections/TrustSignals";
import ProductBenefits from "@/components/sections/ProductBenefits";
import ProjectsSection from "@/components/sections/ProjectsSection";
import QuoteForm from "@/components/sections/QuoteForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroCorporate />
        
        <CategoriesGrid />
        
        <TrustSignals />
        
        <ProductBenefits />
        
        <ProjectsSection />
        
        <div id="cotizar">
          <QuoteForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
