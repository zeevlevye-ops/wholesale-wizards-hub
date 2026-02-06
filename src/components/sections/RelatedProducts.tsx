import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { allProducts } from "@/data/products";

interface RelatedProductsProps {
  currentSlug: string;
  categorySlug: string;
  categoryName: string;
}

const RelatedProducts = ({ currentSlug, categorySlug, categoryName }: RelatedProductsProps) => {
  const relatedProducts = useMemo(() => {
    return allProducts
      .filter(p => p.categorySlug === categorySlug && p.slug !== currentSlug)
      .sort(() => Math.random() - 0.5)
      .slice(0, 6);
  }, [currentSlug, categorySlug]);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-10">
          <span className="badge-wholesale mb-4">Productos Relacionados</span>
          <h2 className="font-display text-3xl font-bold text-foreground mt-4">
            Más Productos de {categoryName}
          </h2>
          <p className="text-muted-foreground mt-2">
            Descubre más opciones de nuestra línea de {categoryName.toLowerCase()} para mayoreo
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <Link
              key={product.slug}
              to={`/producto/${product.slug}`}
              className="group card-product overflow-hidden border border-border hover:border-secondary/30 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.imageMain}
                  alt={`${product.name} - Venta al mayoreo en México`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-foreground mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">SKU: {product.sku}</span>
                  <span className="flex items-center gap-1 font-medium text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                    Cotizar <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
                <div className="mt-3 pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    Pedido mínimo: 1 tarima
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
