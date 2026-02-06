import { Lightbulb, Cog, Palette, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Desarrollo de Producto",
      description: "Creamos productos nuevos según tus especificaciones técnicas y necesidades."
    },
    {
      icon: Cog,
      title: "Fabricación a Medida",
      description: "Adaptamos medidas, materiales y características a tu operación."
    },
    {
      icon: Palette,
      title: "Personalización de Marca",
      description: "Impresión de logo, colores corporativos y empaque personalizado."
    },
    {
      icon: MessageCircle,
      title: "Asesoría Técnica",
      description: "Nuestro equipo de ingeniería te asesora en la selección de productos."
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="badge-factory mb-4">Proyectos Especiales</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
                Soluciones a la Medida para tu Negocio
              </h2>
              <p className="text-muted-foreground text-lg">
                ¿Tienes un proyecto que requiere productos especiales? Nuestro equipo de ingeniería 
                y desarrollo puede fabricar exactamente lo que necesitas.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <Icon className="w-8 h-8 text-secondary mb-3" />
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Card */}
          <div className="relative">
            <div className="bg-primary rounded-3xl p-8 md:p-10 text-primary-foreground relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
              
              <div className="relative space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center">
                  <Cog className="w-8 h-8 text-secondary" />
                </div>
                
                <h3 className="font-display text-2xl md:text-3xl font-bold">
                  ¿Tienes un Proyecto Especial?
                </h3>
                
                <p className="text-primary-foreground/80 text-lg">
                  Cuéntanos sobre tu proyecto y te daremos una solución personalizada. 
                  Trabajamos con empresas de todos los tamaños en todo México.
                </p>

                <ul className="space-y-2 text-primary-foreground/80">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Pedidos desde 1 tarima
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Tiempos de entrega competitivos
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Cotización sin compromiso
                  </li>
                </ul>

                <Button variant="cta" size="xl" className="w-full sm:w-auto">
                  Hablar con un Especialista
                </Button>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-secondary/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
