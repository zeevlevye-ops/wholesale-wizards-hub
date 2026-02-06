import { Factory, Truck, CreditCard, Award, Users, Clock } from "lucide-react";

const benefits = [
  {
    icon: Factory,
    title: "Fabricación Propia",
    description: "Producimos directamente en nuestras instalaciones en México, garantizando control de calidad total."
  },
  {
    icon: Truck,
    title: "Envíos a Todo México",
    description: "Red de distribución nacional con tiempos de entrega optimizados para su negocio."
  },
  {
    icon: CreditCard,
    title: "Facturación Inmediata",
    description: "Factura fiscal CFDI al momento de su compra. Aceptamos múltiples formas de pago."
  },
  {
    icon: Award,
    title: "Certificaciones",
    description: "Cumplimos con normativas mexicanas e internacionales de calidad y sustentabilidad."
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Ejecutivo de cuenta dedicado para empresas con compras recurrentes."
  },
  {
    icon: Clock,
    title: "Producción Rápida",
    description: "Capacidad para pedidos urgentes y producción a la medida de sus necesidades."
  }
];

const ProductBenefits = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge-factory mb-4">Por qué Elegirnos</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Beneficios de Comprar <span className="text-gradient">Directo de Fábrica</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Como fabricantes directos, ofrecemos los mejores precios del mercado sin intermediarios
          </p>
          <div className="section-divider mt-8" />
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-product p-6 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;
