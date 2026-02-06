import { Factory, Shield, Truck, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryTheme } from "@/data/category-themes";

interface HeroCategoryProps {
  theme: CategoryTheme;
  productCount: number;
}

const HeroCategory = ({ theme, productCount }: HeroCategoryProps) => {
  const Icon = theme.icon;

  return (
    <section 
      className="relative overflow-hidden"
      style={{
        background: theme.colors.gradient
      }}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      <div className="container relative py-16 md:py-24">
        <div className="max-w-4xl space-y-8 animate-slide-up">
          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            <span className="badge-factory">
              <Factory className="w-3.5 h-3.5" />
              {theme.factoryName.includes("Fábrica") ? "Fabricación Directa" : "Distribución Directa"}
            </span>
            <span className="badge-wholesale">
              Solo Mayoreo
            </span>
          </div>
          
          {/* Icon */}
          <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <Icon className="w-10 h-10 text-white" />
          </div>
          
          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
            {theme.heroTitle}
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed">
            {theme.heroSubtitle}
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-6 py-4">
            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm opacity-70">Productos Disponibles</p>
                <p className="font-bold text-lg">{productCount} productos</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Factory className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm opacity-70">Experiencia</p>
                <p className="font-bold text-lg">{theme.stats.experience}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm opacity-70">Pedido Mínimo</p>
                <p className="font-bold text-lg">1 tarima</p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <a href="#productos">
              <Button variant="cta" size="xl">
                Ver Productos
              </Button>
            </a>
            <a href="#cotizar">
              <Button variant="quote" size="xl" className="border-white/30 text-white hover:bg-white/10">
                {theme.ctaText}
              </Button>
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 pt-4 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Calidad Garantizada
            </span>
            <span className="flex items-center gap-2">
              <Truck className="w-4 h-4" />
              Envío Nacional
            </span>
            <span className="flex items-center gap-2">
              <Factory className="w-4 h-4" />
              {theme.stats.clients}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCategory;
