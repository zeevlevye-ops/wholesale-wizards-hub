import { Factory, Users, Package, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroCorporate = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-95" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      
      <div className="container relative py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Badge */}
          <div className="flex justify-center gap-3">
            <span className="badge-factory">
              <Factory className="w-3.5 h-3.5" />
              Grupo Industrial
            </span>
            <span className="badge-wholesale">
              Solo Mayoreo
            </span>
          </div>
          
          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
            Fabricación y Distribución
            <span className="block text-secondary">Mayorista en México</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Somos un grupo de empresas especializadas en fabricación y distribución al mayoreo. 
            Más de <strong>15 categorías de productos</strong> para abastecer tu negocio con precios directos de fábrica.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-5 border border-primary-foreground/10">
              <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">+5,000</div>
              <div className="text-sm text-primary-foreground/70">Clientes Activos</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-5 border border-primary-foreground/10">
              <Package className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">+500K</div>
              <div className="text-sm text-primary-foreground/70">Productos Entregados</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-5 border border-primary-foreground/10">
              <MapPin className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">32</div>
              <div className="text-sm text-primary-foreground/70">Estados de México</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-5 border border-primary-foreground/10">
              <Award className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">+25</div>
              <div className="text-sm text-primary-foreground/70">Años de Experiencia</div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="pt-6">
            <a href="#categorias">
              <Button variant="cta" size="xl">
                Ver Nuestras Categorías
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCorporate;
