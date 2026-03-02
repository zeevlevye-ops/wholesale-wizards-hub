import { Phone, Mail, Factory, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";

interface HeaderProps {
  categorySlug?: string;
}

const Header = ({ categorySlug }: HeaderProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const isHome = location.pathname === "/";
  const isCategoryPage = location.pathname.startsWith("/categoria/");

  const handleCatalogClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
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
    setOpen(false);
    document.getElementById("cotizar")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="w-full bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-1.5 md:py-2">
        <div className="container flex items-center justify-between gap-2 text-xs md:text-sm overflow-hidden">
          <div className="flex items-center gap-3 md:gap-6">
            <a href="tel:+525525897917" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">55 2589 7917</span>
              <span className="sm:hidden">Llamar</span>
            </a>
            <a href="mailto:ventas@yeshmarket.com" className="flex items-center gap-1.5 hover:text-secondary transition-colors hidden sm:flex">
              <Mail className="w-3.5 h-3.5" />
              <span>ventas@yeshmarket.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <Factory className="w-3.5 h-3.5 text-secondary" />
            <span className="font-medium text-xs">Fabricante Directo</span>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
              <span className="text-primary font-display font-bold text-lg md:text-xl">Y</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-lg md:text-xl text-foreground">Yesh Market</h1>
              <p className="text-[10px] md:text-xs text-muted-foreground">Proveedor Mayorista B2B</p>
            </div>
          </Link>
          
          {/* Desktop nav */}
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

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="font-display">Menú</SheetTitle>
              <nav className="flex flex-col gap-4 mt-6">
                <a 
                  href="#"
                  onClick={handleCatalogClick}
                  className="text-base font-medium text-foreground py-2 border-b border-border"
                >
                  Catálogo
                </a>
                <a 
                  href="#cotizar"
                  onClick={handleCotizarClick}
                  className="text-base font-medium text-foreground py-2 border-b border-border"
                >
                  Cotizar
                </a>
                <a href="tel:+525525897917" className="text-base font-medium text-foreground py-2 border-b border-border flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  55 2589 7917
                </a>
                <a href="mailto:ventas@yeshmarket.com" className="text-base font-medium text-foreground py-2 border-b border-border flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  ventas@yeshmarket.com
                </a>
                <a href="mailto:ventas@yeshmarket.com" className="mt-4">
                  <Button variant="cta" size="lg" className="w-full">
                    Solicitar Catálogo
                  </Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
