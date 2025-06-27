import { Card } from "@/components/ui/card";

export function DemoSection() {
  return (
    <section id="demo" className="container py-20 md:py-32">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Mira cómo funciona</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Visualiza la potencia de SilentGuard en acción. Así es como nuestra
          app maneja los mensajes de spam y te mantiene informado.
        </p>
      </div>
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
        <div className="w-[140px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-secondary">
          <div className="p-4 space-y-4 flex flex-col">
            <Card className="p-2 rounded-lg bg-card self-start max-w-[80%]">
              <p className="text-xs font-bold text-blue-600 dark:text-blue-400">
                Banco Ficticio
              </p>
              <p className="text-sm">
                ¡Felicidades! Has sido pre-aprobado para un crédito de $50,000.
                Haz clic aquí para reclamarlo: bit.ly/falso
              </p>
            </Card>
            <Card className="p-3 rounded-lg bg-destructive/10 self-center w-full shadow-none border-destructive/50">
              <p className="text-xs font-bold text-destructive">SilentGuard</p>
              <p className="text-sm text-destructive/80">
                Mensaje de SPAM bloqueado. Remitente reportado.
              </p>
            </Card>
            <Card className="p-2 rounded-lg bg-green-100 dark:bg-green-900/50 self-end max-w-[80%] ml-auto">
              <p className="text-xs font-bold text-green-600 dark:text-green-400">
                Mamá
              </p>
              <p className="text-sm">
                Hijo, no te olvides de comprar el pan. Te quiero!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
