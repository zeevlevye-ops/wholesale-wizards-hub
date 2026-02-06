import { Phone, Mail, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface HeaderProps {
  categorySlug?: string;
}

const Header = ({ categorySlug }: HeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const isCategoryPage = location.pathname.startsWith("/categoria/");

  const handleCatalogClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHome) {
      document.getElementById("categorias")?.scrollIntoView({ behavior: "smooth" });
    } else if (isCategoryPage) {
      document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" });
    } else if (categorySlug) {
      navigate(`/categoria/${categorySlug}`);
    } else {
      navigate("/");
    }
  };

  const handleCotizarClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("cotizar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="w-full bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container flex flex-wrap items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+525525897917" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              <span>55 2589 7917</span>
            </a>
            <a href="mailto:ventas@yeshmarket.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />
              <span>ventas@yeshmarket.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Factory className="w-4 h-4 text-secondary" />
            <span className="font-medium">Fabricante Directo en México</span>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
              <span className="text-primary font-display font-bold text-xl">Y</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-foreground">Yesh Market</h1>
              <p className="text-xs text-muted-foreground">Proveedor Mayorista B2B</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#"
              onClick={handleCatalogClick}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Catálogo
            </a>
            <a 
              href="#cotizar"
              onClick={handleCotizarClick}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Cotizar
            </a>
            <a href="mailto:ventas@yeshmarket.com">
              <Button variant="cta" size="sm">
                Solicitar Catálogo
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
