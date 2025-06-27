import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, Target } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
              Nuestra Empresa
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Protegiendo tu comunicación
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              En SilentGuard, estamos dedicados a devolverte el control sobre tu
              teléfono, creando un entorno digital más seguro y tranquilo para
              todos.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:gap-16 mt-12">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Proporcionar una solución tecnológica innovadora que proteja a
                los usuarios de llamadas no deseadas y fraudulentas, mejorando
                su seguridad, privacidad y experiencia en el uso del teléfono
                móvil.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ser la aplicación líder en bloqueo inteligente de spam
                telefónico en México, reconocida por su eficacia,
                personalización y contribución a la ciberseguridad ciudadana.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
