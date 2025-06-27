import { PhoneOff, MessageCircleX, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <PhoneOff className="h-10 w-10 text-primary" />,
    title: "Bloqueo de Llamadas",
    description:
      "Nuestra IA identifica y cuelga automáticamente las llamadas de números reportados como spam, fraude o extorsión, antes de que tu teléfono suene.",
  },
  {
    icon: <MessageCircleX className="h-10 w-10 text-primary" />,
    title: "Filtro de Mensajes",
    description:
      "Analizamos y enviamos a una carpeta separada los SMS y mensajes de WhatsApp que provienen de remitentes desconocidos o sospechosos.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Respuestas Automáticas",
    description:
      "Configura respuestas automáticas por SMS o WhatsApp para notificar a los remitentes de spam que su número ha sido bloqueado y reportado.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="container py-20 md:py-32">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Funcionalidades Principales
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Descubre cómo SilentGuard te protege activamente con tecnología de
          punta.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center p-6 rounded-lg border bg-card shadow-sm transition-transform hover:scale-105 hover:shadow-lg"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
