import { Factory, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <span className="text-primary font-display font-bold text-xl">Y</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">Yesh Market</h3>
                <p className="text-xs text-primary-foreground/70">Fabricante y Proveedor Mayorista</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md mb-6">
              Somos fabricantes directos en México. Abastecemos empresas, hoteles, restaurantes y distribuidores con productos de alta rotación a precios competitivos.
            </p>
            <div className="flex items-center gap-2">
              <Factory className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">Fabricación 100% Mexicana</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Categorías</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/categoria/cajas-plasticas" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  Cajas Plásticas
                </Link>
              </li>
              <li>
                <Link to="/categoria/equipamiento-cocina" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  Equipamiento Cocina
                </Link>
              </li>
              <li>
                <Link to="/categoria/fast-food" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  Fast Food
                </Link>
              </li>
              <li>
                <Link to="/categoria/racks-y-estanteria" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  Racks y Estantería
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+525525897917" className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  <Phone className="w-4 h-4 shrink-0" />
                  55 2589 7917
                </a>
              </li>
              <li>
                <a href="mailto:ventas@yeshmarket.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                  <Mail className="w-4 h-4 shrink-0" />
                  ventas@yeshmarket.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>Av. Yucatán 54-16, Roma Nte., Cuauhtémoc, 06700 CDMX</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© 2024 Yesh Market. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-secondary transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-secondary transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
