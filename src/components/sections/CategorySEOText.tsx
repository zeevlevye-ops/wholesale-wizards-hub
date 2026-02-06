import { Check } from "lucide-react";
import { CategoryTheme } from "@/data/category-themes";

interface CategorySEOTextProps {
  theme: CategoryTheme;
}

const CategorySEOText = ({ theme }: CategorySEOTextProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              {theme.factoryName} en México
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              {theme.seoDescription} Con más de <strong>{theme.stats.experience}</strong> de experiencia 
              en el mercado mexicano, hemos servido a <strong>{theme.stats.clients}</strong> en todo el país.
            </p>

            <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
              ¿Por qué elegir nuestra {theme.name.toLowerCase()}?
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 not-prose mb-8">
              {theme.benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
              Capacidad de producción y distribución
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Nuestra capacidad de producción de <strong>{theme.stats.capacity}</strong> nos permite 
              atender pedidos de cualquier volumen. Trabajamos con empresas de todos los tamaños, 
              desde pequeños negocios hasta grandes corporativos y cadenas nacionales.
            </p>

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 not-prose">
              <h4 className="font-display text-lg font-bold text-foreground mb-3">
                Términos de búsqueda relacionados
              </h4>
              <div className="flex flex-wrap gap-2">
                {theme.keywords.map((keyword, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-card rounded-full text-sm text-muted-foreground border border-border"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mt-8">
              <strong>Pedido mínimo: 1 tarima.</strong> Realizamos envíos a toda la República Mexicana. 
              Contamos con facturación electrónica y aceptamos múltiples formas de pago para distribuidores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySEOText;
