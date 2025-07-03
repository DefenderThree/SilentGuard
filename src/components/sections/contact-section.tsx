import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container text-center">
        <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-semibold mb-4">
          Contacto
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Estamos aquí para ayudarte
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-4">
          ¿Tienes alguna pregunta, sugerencia o necesitas soporte? No dudes en contactarnos.
        </p>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="text-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-primary" />
                <span>Correo Electrónico</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground">Para consultas generales y soporte:</p>
              <a href="mailto:2230152@upt.edu.mx" className="font-semibold text-primary hover:underline">
                2230152@upt.edu.mx
              </a>
              <br/>
              <a href="mailto:2230052@upt.edu.mx" className="font-semibold text-primary hover:underline">
                2230052@upt.edu.mx
              </a>
            </CardContent>
          </Card>
          <Card className="text-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <span>Nuestra Ubicación</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Universidad Politécnica de Tulancingo, Hidalgo, México.
              </p>
               <div className="mt-4 h-48 rounded-lg bg-muted overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.385419835787!2d-98.39767868508588!3d20.12015098647564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d0538b8c92583d%3A0x13d8a7f43f0ac714!2sUniversidad%20Polit%C3%A9cnica%20de%20Tulancingo!5e0!3m2!1ses-419!2smx!4v1689196883204!5m2!1ses-419!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
