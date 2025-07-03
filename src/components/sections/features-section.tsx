import { PhoneOff, MessageCircleX, ShieldCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <PhoneOff className="h-8 w-8 text-primary" />,
    title: "Bloqueo de Llamadas",
    description:
      "Nuestra IA identifica y cuelga automáticamente las llamadas de números reportados como spam, fraude o extorsión, antes de que tu teléfono suene.",
  },
  {
    icon: <MessageCircleX className="h-8 w-8 text-primary" />,
    title: "Filtro de Mensajes",
    description:
      "Analizamos y enviamos a una carpeta separada los SMS y mensajes de WhatsApp que provienen de remitentes desconocidos o sospechosos.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Respuestas Automáticas",
    description:
      "Configura respuestas automáticas por SMS o WhatsApp para notificar a los remitentes de spam que su número ha sido bloqueado y reportado.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="container py-20 md:py-32">
      <div className="text-center space-y-4 mb-12">
         <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-semibold">
            Funcionalidades
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Protección Inteligente a tu Alcance
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Descubre cómo SilentGuard te protege activamente con tecnología de
          punta.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="flex flex-col items-center text-center p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mb-5 bg-secondary p-4 rounded-full">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
