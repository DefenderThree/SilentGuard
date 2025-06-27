import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-bold">SilentGuard Shield</span>
        </Link>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          Descargar App
        </Button>
      </div>
    </header>
  );
}
