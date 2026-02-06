import { useState } from "react";
import { Send, Building2, User, Mail, Phone, Package, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface QuoteFormProps {
  productName?: string;
  productSku?: string;
  categoryName?: string;
  contextMessage?: string;
}

const QuoteForm = ({ productName, productSku, categoryName, contextMessage }: QuoteFormProps) => {
  const contextLabel = productName || categoryName || "Productos";
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "¡Cotización Enviada!",
      description: "Nuestro equipo te contactará en menos de 24 horas.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="cotizar" className="py-20 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-factory mb-4">Cotización Sin Compromiso</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-4 mb-4">
            Solicita tu Cotización de {contextLabel}
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Completa el formulario y recibe una propuesta personalizada en menos de 24 horas hábiles.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-10 shadow-strong">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-secondary" />
                  Empresa / Negocio
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="Nombre de tu empresa"
                  className="input-b2b"
                />
              </div>
              
              {/* Contact Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-secondary" />
                  Nombre de Contacto
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Tu nombre completo"
                  className="input-b2b"
                />
              </div>
              
              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Mail className="w-4 h-4 text-secondary" />
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="correo@empresa.com"
                  className="input-b2b"
                />
              </div>
              
              {/* Phone */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-secondary" />
                  Teléfono / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+52 55 1234 5678"
                  className="input-b2b"
                />
              </div>
              
              {/* Quantity */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Package className="w-4 h-4 text-secondary" />
                  Cantidad Estimada
                </label>
                <select
                  name="quantity"
                  required
                  className="input-b2b"
                >
                  <option value="">Selecciona un rango</option>
                  <option value="1000-4999">1,000 - 4,999 piezas</option>
                  <option value="5000-9999">5,000 - 9,999 piezas</option>
                  <option value="10000-24999">10,000 - 24,999 piezas</option>
                  <option value="25000-49999">25,000 - 49,999 piezas</option>
                  <option value="50000+">50,000+ piezas</option>
                </select>
              </div>
              
              {/* Frequency */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Package className="w-4 h-4 text-secondary" />
                  Frecuencia de Compra
                </label>
                <select
                  name="frequency"
                  required
                  className="input-b2b"
                >
                  <option value="">Selecciona frecuencia</option>
                  <option value="unica">Compra única</option>
                  <option value="mensual">Mensual</option>
                  <option value="quincenal">Quincenal</option>
                  <option value="semanal">Semanal</option>
                </select>
              </div>
              
              {/* Message */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-secondary" />
                  Detalles Adicionales
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Cuéntanos sobre tu negocio, necesidades de personalización, o cualquier detalle importante..."
                  className="input-b2b resize-none"
                />
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                🔒 Tu información está segura y no será compartida.
              </p>
              <Button 
                type="submit" 
                variant="cta" 
                size="xl"
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Cotización
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
