import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#features", label: "Funcionalidades" },
  { href: "#about", label: "Nosotros" },
  { href: "#organization", label: "Equipo" },
  { href: "#spam-check", label: "Verificador" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-7 w-7 text-primary" />
          <span className="font-bold text-lg">SilentGuard Shield</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
           <Link href="#contact">Contáctanos</Link>
        </Button>
      </div>
    </header>
  );
}
