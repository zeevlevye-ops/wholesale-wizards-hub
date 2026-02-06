import { Check, Truck, Shield, Factory, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProductProps {
  productName: string;
  productDescription: string;
  imageUrl: string;
  minOrder: string;
  category: string;
  categorySlug?: string;
  rating?: number;
  ratingCount?: number;
}

const HeroProduct = ({
  productName = "Bolsas Biodegradables",
  productDescription = "Fabricación directa de productos de alta calidad para comercio, restaurantes y distribuidores.",
  imageUrl,
  minOrder = "1 tarima",
  category = "Productos Mayoreo",
  categorySlug,
  rating,
  ratingCount
}: HeroProductProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-95" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      <div className="container relative py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="badge-factory">
                <Factory className="w-3.5 h-3.5" />
                Directo de Fábrica
              </span>
              <span className="badge-wholesale">
                Solo Mayoreo
              </span>
            </div>
            
            {/* Category */}
            <p className="text-secondary font-medium uppercase tracking-wider text-sm">
              {category}
            </p>
            
            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
              {productName}
            </h1>
            
            {/* Description */}
            <p className="text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              {productDescription}
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center gap-3 text-primary-foreground">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Package className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm opacity-70">Pedido Mínimo</p>
                  <p className="font-bold text-lg">{minOrder}</p>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="cta" size="xl" onClick={() => {
                document.getElementById("cotizar")?.scrollIntoView({ behavior: "smooth" });
              }}>
                Solicitar Cotización
              </Button>
              <Button variant="quote" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" onClick={() => {
                document.getElementById("especificaciones")?.scrollIntoView({ behavior: "smooth" });
              }}>
                Ver Especificaciones
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-primary-foreground/70 text-sm">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-secondary" />
                Facturación Inmediata
              </span>
              <span className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-secondary" />
                Envío Nacional
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-secondary" />
                Garantía de Calidad
              </span>
            </div>
          </div>
          
          {/* Product Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-strong bg-card/10 backdrop-blur-sm border border-white/10">
                <img
                  src={imageUrl}
                  alt={productName}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl p-4 shadow-strong">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">En Stock</p>
                    <p className="font-bold text-foreground">Disponible</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 translate-x-8 translate-y-8">
              <div className="w-full h-full rounded-3xl bg-secondary/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProduct;
