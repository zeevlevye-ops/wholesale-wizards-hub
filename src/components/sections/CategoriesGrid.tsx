import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getAllCategoryThemes, CategoryTheme } from "@/data/category-themes";

const CategoriesGrid = () => {
  const categories = getAllCategoryThemes();

  return (
    <section id="categorias" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <span className="badge-wholesale mb-4">Nuestras Líneas de Producto</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Categorías de Fabricación y Distribución
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada categoría cuenta con fabricación o distribución especializada. 
            Selecciona una para conocer nuestros productos y solicitar cotización.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CategoryCardProps {
  category: CategoryTheme;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const Icon = category.icon;

  return (
    <Link
      to={`/categoria/${category.slug}`}
      className="group card-product p-6 hover:border-secondary/50 border border-transparent transition-all duration-300"
    >
      <div 
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ 
          background: category.colors.gradient 
        }}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>
      
      <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
        {category.name}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {category.heroSubtitle.substring(0, 100)}...
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {category.stats.clients}
        </span>
        <span className="flex items-center gap-1 text-sm font-medium text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
          Ver productos
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
};

export default CategoriesGrid;
