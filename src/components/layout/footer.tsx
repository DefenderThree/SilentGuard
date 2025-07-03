import { Logo } from "@/components/icons/logo";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} SilentGuard Shield. Todos los derechos
            reservados.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <div className="flex flex-col md:flex-row gap-x-4">
               <a href="mailto:2230152@upt.edu.mx" className="hover:text-primary transition-colors">2230152@upt.edu.mx</a>
               <a href="mailto:2230052@upt.edu.mx" className="hover:text-primary transition-colors">2230052@upt.edu.mx</a>
            </div>
        </div>
      </div>
    </footer>
  );
}
