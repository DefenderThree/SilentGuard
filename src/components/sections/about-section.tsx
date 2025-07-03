import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Zap, HeartHandshake, ShieldCheck, Eye, Target } from "lucide-react";

const values = [
  {
    icon: <Integrity className="h-8 w-8 text-primary" />,
    title: "Integridad y Confianza",
    description: "Operamos con total transparencia y honestidad.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Innovación Constante",
    description: "Buscamos siempre la mejor tecnología para ir un paso adelante.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "Compromiso con el Usuario",
    description: "Nuestros usuarios son el centro de todo lo que hacemos.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Privacidad por Diseño",
    description: "Construimos nuestra app con la privacidad como pilar.",
  },
];

function Integrity(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6 space-y-20">
        
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-semibold">
              Nuestra Filosofía
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Apasionados por un mundo digital más seguro
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              SilentGuard Shield nació de la idea de un grupo de estudiantes de ingeniería en software apasionados por la ciberseguridad. Cansados de las interrupciones y los riesgos del spam telefónico, decidimos crear una solución real, inteligente y accesible para todos en México.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full mt-1">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Misión</h3>
                  <p className="text-sm text-muted-foreground">Proteger a los usuarios de llamadas no deseadas, mejorando su seguridad y privacidad.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full mt-1">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Visión</h3>
                  <p className="text-sm text-muted-foreground">Ser la app líder en bloqueo inteligente de spam, reconocida por su eficacia y contribución a la ciberseguridad.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/700x500.png"
              alt="Nuestro Equipo"
              width={700}
              height={500}
              className="rounded-xl shadow-2xl"
              data-ai-hint="team brainstorming ideas"
            />
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-semibold mb-4">
            Nuestros Valores
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Los pilares de nuestro trabajo
          </h2>
          <p className="max-w-[900px] mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
            Estos son los principios que guían cada decisión que tomamos y cada línea de código que escribimos.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {values.map((value) => (
            <Card key={value.title} className="flex flex-col items-center text-center p-6 border-2 border-transparent hover:border-primary/50 hover:shadow-xl transition-all duration-300">
               <div className="mb-4 bg-primary/10 p-4 rounded-full">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
