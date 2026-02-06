import { Building2, Truck, Shield, Award, Star, Users } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "500+",
    label: "Empresas Atendidas"
  },
  {
    icon: Truck,
    value: "15M+",
    label: "Productos Entregados"
  },
  {
    icon: Star,
    value: "12",
    label: "Años de Experiencia"
  },
  {
    icon: Users,
    value: "32",
    label: "Estados de México"
  }
];

const certifications = [
  "NOM-161-SEMARNAT",
  "ISO 9001:2015",
  "Hecho en México",
  "Empresa Socialmente Responsable"
];

const TrustSignals = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-secondary" />
              </div>
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        
        {/* Certifications */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">
            Certificaciones y Reconocimientos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted border border-border"
              >
                <Shield className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
