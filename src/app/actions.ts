"use server";

import { z } from "zod";
import {
  checkSpamNumber,
  spamCheckInputSchema,
  spamCheckOutputSchema,
} from "@/ai/flows/spam-checker";

export type SpamCheckResult = z.infer<typeof spamCheckOutputSchema>;

export async function runSpamCheck(input: {
  phoneNumber: string;
}): Promise<{ data: SpamCheckResult | null; error: string | null }> {
  const parsedInput = spamCheckInputSchema.safeParse(input);

  if (!parsedInput.success) {
    return { data: null, error: parsedInput.error.errors[0].message };
  }

  try {
    const result = await checkSpamNumber(parsedInput.data);
    return { data: result, error: null };
  } catch (e: any) {
    console.error("AI flow failed", e);
    return {
      data: null,
      error: "El servicio de verificación no está disponible en este momento.",
    };
  }
}
