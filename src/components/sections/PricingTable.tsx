import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PriceTier {
  quantity: string;
  pricePerUnit: string;
  savings: string;
  popular?: boolean;
}

interface PricingTableProps {
  priceTiers?: PriceTier[];
}

const defaultPriceTiers: PriceTier[] = [
  {
    quantity: "1,000 - 4,999",
    pricePerUnit: "$0.85",
    savings: "Precio Base"
  },
  {
    quantity: "5,000 - 9,999",
    pricePerUnit: "$0.72",
    savings: "15% de ahorro"
  },
  {
    quantity: "10,000 - 24,999",
    pricePerUnit: "$0.60",
    savings: "29% de ahorro",
    popular: true
  },
  {
    quantity: "25,000 - 49,999",
    pricePerUnit: "$0.52",
    savings: "39% de ahorro"
  },
  {
    quantity: "50,000+",
    pricePerUnit: "$0.45",
    savings: "47% de ahorro"
  }
];

const PricingTable = ({ priceTiers = defaultPriceTiers }: PricingTableProps) => {
  return (
    <section id="precios" className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge-wholesale mb-4">Precios por Volumen</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Mientras Más Compras, <span className="text-gradient">Más Ahorras</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Precios exclusivos para distribuidores y empresas. Sin intermediarios, directo de fábrica.
          </p>
          <div className="section-divider mt-8" />
        </div>
        
        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {priceTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 transition-all duration-300 ${
                tier.popular
                  ? "bg-primary text-primary-foreground scale-105 shadow-strong z-10"
                  : "bg-card border border-border hover:border-secondary/50 hover:shadow-medium"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="badge-factory text-[10px]">Más Vendido</span>
                </div>
              )}
              
              <div className="text-center space-y-4">
                <p className={`text-sm font-medium ${tier.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  Cantidad
                </p>
                <p className={`font-display font-bold text-lg ${tier.popular ? "text-primary-foreground" : "text-foreground"}`}>
                  {tier.quantity}
                </p>
                <div className={`text-3xl font-display font-bold ${tier.popular ? "text-secondary" : "text-gradient"}`}>
                  {tier.pricePerUnit}
                  <span className={`text-sm font-normal ${tier.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>/pieza</span>
                </div>
                <p className={`text-xs font-semibold ${tier.popular ? "text-secondary" : "text-success"}`}>
                  {tier.savings}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            ¿Necesitas un volumen personalizado? Contáctanos para una cotización especial.
          </p>
          <Button variant="cta" size="lg">
            Solicitar Cotización Personalizada
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
            <Check className="w-5 h-5 text-success shrink-0" />
            <span className="text-sm text-muted-foreground">Precios en MXN + IVA</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
            <Check className="w-5 h-5 text-success shrink-0" />
            <span className="text-sm text-muted-foreground">Válido para compras a partir de pedido mínimo</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50">
            <Check className="w-5 h-5 text-success shrink-0" />
            <span className="text-sm text-muted-foreground">Condiciones especiales para distribuidores</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
