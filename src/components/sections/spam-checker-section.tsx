"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { runSpamCheck } from "@/app/actions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import type { SpamCheckResult } from "@/app/actions";
import { SpamCheckResultDisplay } from "@/components/spam-check-result";

const formSchema = z.object({
  phoneNumber: z
    .string()
    .min(10, {
      message: "El número debe tener 10 dígitos.",
    })
    .max(10, {
      message: "El número debe tener 10 dígitos.",
    })
    .regex(/^\d+$/, "Solo se admiten números."),
});

export function SpamCheckerSection() {
  const [result, setResult] = useState<SpamCheckResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await runSpamCheck(values);
      if (res.error) {
        setError(res.error);
      } else {
        setResult(res.data);
      }
    } catch (e) {
      setError("Ocurrió un error inesperado. Por favor, inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="spam-check" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Verifica un Número
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Ingresa un número de teléfono de 10 dígitos para consultar nuestra
              base de datos de spam y obtener un análisis de riesgo
              instantáneo.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md space-y-4">
          <Card>
            <CardContent className="p-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Número de teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej: 5512345678" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      "Verificar Número"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          {error && (
            <p className="text-sm font-medium text-destructive text-center">
              {error}
            </p>
          )}
          {result && <SpamCheckResultDisplay result={result} />}
        </div>
      </div>
    </section>
  );
}
