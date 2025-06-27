import { z } from "zod";
import { ai } from "@/ai/genkit";

export const spamCheckInputSchema = z.object({
  phoneNumber: z
    .string()
    .length(10, "El número de teléfono debe tener 10 dígitos.")
    .regex(/^\d+$/, "El número de teléfono solo debe contener dígitos."),
});

export const spamCheckOutputSchema = z.object({
  isSpam: z.boolean(),
  riskLevel: z.enum(["Alto", "Medio", "Bajo"]),
  reason: z.string(),
  city: z.string().optional(),
  reportCount: z.number().optional(),
});

export const checkSpamNumber = ai.defineFlow(
  {
    name: "checkSpamNumber",
    inputSchema: spamCheckInputSchema,
    outputSchema: spamCheckOutputSchema,
  },
  async ({ phoneNumber }) => {
    // This is a mock implementation.
    // In a real scenario, this would query a database and use an LLM
    // to analyze report verbiage, frequency, and other factors.
    console.log(`Checking spam status for: ${phoneNumber}`);

    // Simulate network delay and processing time.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock logic based on phone number for deterministic results.
    const lastDigit = parseInt(phoneNumber.slice(-1));

    if (lastDigit <= 3) {
      // High risk
      return {
        isSpam: true,
        riskLevel: "Alto",
        reason:
          "Este número ha sido reportado múltiples veces por estafas de phishing y llamadas de extorsión. Se recomienda bloquear inmediatamente.",
        city: "Ciudad de México",
        reportCount: Math.floor(Math.random() * 100) + 50,
      };
    } else if (lastDigit <= 6) {
      // Medium risk
      return {
        isSpam: true,
        riskLevel: "Medio",
        reason:
          "Asociado con telemarketing agresivo y encuestas no solicitadas. Varios usuarios han reportado llamadas insistentes.",
        city: "Guadalajara",
        reportCount: Math.floor(Math.random() * 30) + 20,
      };
    } else {
      // Low risk
      return {
        isSpam: false,
        riskLevel: "Bajo",
        reason:
          "No se encontraron reportes significativos para este número. Parece ser seguro.",
      };
    }
  }
);
