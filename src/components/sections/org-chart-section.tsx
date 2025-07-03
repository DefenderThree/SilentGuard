import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Code, Megaphone, Settings } from 'lucide-react';

const TeamCard = ({ name, title, initials }: { name: string; title: string, initials: string }) => (
  <div className="flex items-center gap-4">
    <Avatar className="h-16 w-16">
      <AvatarImage src={`https://placehold.co/100x100.png`} data-ai-hint="person portrait"/>
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
    <div>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-muted-foreground">{title}</p>
    </div>
  </div>
);

export function OrgChartSection() {
  return (
    <section id="organization" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-semibold">
            Nuestra Estructura
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Conoce al Equipo</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Somos un equipo cohesionado y multifuncional, trabajando juntos para lograr nuestra misión.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
                <CardHeader className="flex flex-row items-center gap-4 p-0 mb-4">
                     <div className="bg-primary/10 p-3 rounded-full">
                        <Code className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Desarrollo e IA</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                    <p className="text-muted-foreground">El corazón técnico de SilentGuard. Creamos y mantenemos la tecnología que te protege.</p>
                    <TeamCard name="Líder de Desarrollo" title="Lead Developer" initials="LD" />
                    <TeamCard name="Desarrollador Frontend" title="UI/UX Specialist" initials="DF" />
                    <TeamCard name="Desarrollador Backend" title="System Architect" initials="DB" />
                    <TeamCard name="Ingeniero IA/ML" title="AI Specialist" initials="IA" />
                </CardContent>
            </Card>
             <Card className="p-6">
                <CardHeader className="flex flex-row items-center gap-4 p-0 mb-4">
                     <div className="bg-primary/10 p-3 rounded-full">
                        <Megaphone className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Marketing y Crecimiento</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                     <p className="text-muted-foreground">Llevamos nuestra solución a quienes más la necesitan y comunicamos nuestra visión.</p>
                    <TeamCard name="Líder de Marketing" title="Growth Hacker" initials="LM" />
                    <TeamCard name="Creador de Contenido" title="Content Strategist" initials="CC" />
                </CardContent>
            </Card>
             <Card className="p-6">
                <CardHeader className="flex flex-row items-center gap-4 p-0 mb-4">
                     <div className="bg-primary/10 p-3 rounded-full">
                        <Settings className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Operaciones y Estrategia</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                     <p className="text-muted-foreground">Nos aseguramos de que el proyecto avance, cumpliendo nuestras metas y visión a largo plazo.</p>
                    <TeamCard name="Director General" title="Project Lead" initials="DG" />
                    <TeamCard name="Líder de Operaciones" title="Operations Manager" initials="LO" />
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
