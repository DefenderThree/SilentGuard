import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
          Recupera tu tranquilidad.
          <br className="hidden md:block" />
          <span className="text-primary">Dile adiós al spam.</span>
        </h1>
        <p className="max-w-[600px] text-lg text-muted-foreground">
          SilentGuard es tu escudo digital contra llamadas y mensajes no
          deseados. Bloquea el spam de forma inteligente y protege tu privacidad
          sin esfuerzo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90"
          >
            <Link href="#spam-check">Verificar un número</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#features">Conocer más</Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUbFZAIicWdU4Mmsg-gSZBFZ9pzrjDvMyfA&s"
          alt="App Screenshot"
          width={600}
          height={600}
          className="rounded-xl shadow-2xl transition-transform hover:scale-105"
        />
      </div>
    </section>
  );
}
