import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQItem } from "@/data/types";

interface ProductFAQProps {
  faqs: FAQItem[];
  productName: string;
}

const ProductFAQ = ({ faqs, productName }: ProductFAQProps) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <span className="badge-wholesale mb-4">Preguntas Frecuentes</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
            Todo Sobre <span className="text-gradient">{productName}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Resuelve tus dudas antes de realizar tu pedido mayorista
          </p>
          <div className="section-divider mt-8" />
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ProductFAQ;
