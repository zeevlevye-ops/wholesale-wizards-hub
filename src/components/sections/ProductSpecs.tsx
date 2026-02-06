import { Phone } from "lucide-react";

interface Specification {
  label: string;
  value: string;
}

interface ProductSpecsProps {
  sku?: string;
  ean?: string;
  category?: string;
}

const ProductSpecs = ({ sku, ean, category }: ProductSpecsProps) => {
  const specifications: Specification[] = [
    { label: "SKU", value: sku || "N/A" },
    { label: "EAN/UPC", value: ean || "N/A" },
    { label: "Categoría", value: category || "General" },
    { label: "Material", value: "Alta calidad industrial" },
    { label: "Origen", value: "Fabricación 100% mexicana" },
    { label: "Garantía", value: "Satisfacción garantizada" },
    { label: "Certificación", value: "Normas mexicanas aplicables" },
    { label: "Disponibilidad", value: "En stock" },
  ];
  return (
    <section id="especificaciones" className="py-20 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Specifications Table */}
          <div>
            <span className="badge-wholesale mb-4">Ficha Técnica</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-8">
              Especificaciones del Producto
            </h2>
            
            <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-soft">
              <table className="w-full">
                <tbody>
                  {specifications.map((spec, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-muted/30" : "bg-card"} hover:bg-secondary/5 transition-colors`}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-muted-foreground border-b border-border">
                        {spec.label}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-foreground border-b border-border">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
          </div>
          
          {/* Customization Options */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Opciones de Personalización
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ofrecemos personalización completa para adaptarnos a las necesidades de tu marca y negocio.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="card-product p-5">
                <h4 className="font-semibold text-foreground mb-2">Impresión Personalizada</h4>
                <p className="text-sm text-muted-foreground">
                  Logo y diseño de tu empresa impreso en hasta 4 colores. Pedido mínimo: 5,000 piezas.
                </p>
              </div>
              
              <div className="card-product p-5">
                <h4 className="font-semibold text-foreground mb-2">Medidas Especiales</h4>
                <p className="text-sm text-muted-foreground">
                  Fabricamos en cualquier medida según tus requerimientos específicos.
                </p>
              </div>
              
              <div className="card-product p-5">
                <h4 className="font-semibold text-foreground mb-2">Desarrollo de Producto</h4>
                <p className="text-sm text-muted-foreground">
                  ¿Necesitas un producto único? Desarrollamos nuevos productos bajo especificaciones.
                </p>
              </div>
            </div>
            
            <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
              <h4 className="font-display font-bold text-lg mb-2">¿Tienes un proyecto especial?</h4>
              <p className="text-sm opacity-80 mb-4">
                Nuestro equipo de ingeniería puede desarrollar productos a la medida de tu negocio.
              </p>
              <a href="tel:+525525897917" className="inline-flex items-center gap-2 text-secondary font-bold text-lg hover:underline">
                <Phone className="w-5 h-5" />
                Habla con un especialista al 55 2589 7917
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;
