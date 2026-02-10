import { Link } from "react-router-dom";
import { ArrowRight, Package } from "lucide-react";
import { Product } from "@/data/types";
import { CategoryTheme } from "@/data/category-themes";

interface CategoryProductGridProps {
  products: Product[];
  theme: CategoryTheme;
}

const CategoryProductGrid = ({ products, theme }: CategoryProductGridProps) => {
  return (
    <section id="productos" className="py-16 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <span className="badge-wholesale mb-4">Catálogo de Productos</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Productos de {theme.name}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Todos nuestros productos están disponibles para venta al mayoreo. 
            Pedido mínimo: 1 tarima por producto.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} theme={theme} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              No hay productos disponibles en esta categoría actualmente.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: Product;
  theme: CategoryTheme;
}

const ProductCard = ({ product, theme }: ProductCardProps) => {
  return (
    <Link
      to={`/producto/${product.slug}`}
      className="group card-product overflow-hidden border border-border hover:border-secondary/30 transition-all duration-300"
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-white flex items-center justify-center p-4">
        <img
          src={product.imageMain}
          alt={product.name}
          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div 
          className="inline-block px-2 py-1 rounded text-xs font-medium mb-2"
          style={{
            backgroundColor: `hsl(${theme.colors.primary} / 0.1)`,
            color: `hsl(${theme.colors.primary})`
          }}
        >
          {theme.name}
        </div>
        
        <h3 className="font-display font-bold text-foreground mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            SKU: {product.sku}
          </span>
          <span className="flex items-center gap-1 font-medium text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
            Cotizar
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
        
        <div className="mt-3 pt-3 border-t border-border">
          <span className="text-xs text-muted-foreground">
            Pedido mínimo: 1 tarima
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryProductGrid;
