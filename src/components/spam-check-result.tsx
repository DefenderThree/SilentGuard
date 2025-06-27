import {
  AlertCircle,
  CheckCircle2,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { SpamCheckResult } from "@/app/actions";

export function SpamCheckResultDisplay({ result }: { result: SpamCheckResult }) {
  const { isSpam, riskLevel, reason, city, reportCount } = result;

  const riskStyles = {
    Alto: "border-destructive/50 bg-destructive/5 text-destructive",
    Medio:
      "border-yellow-500/50 bg-yellow-500/5 text-yellow-600 dark:text-yellow-400",
    Bajo: "border-green-500/50 bg-green-500/5 text-green-600 dark:text-green-400",
  };

  const RiskIcon = isSpam ? ShieldAlert : CheckCircle2;
  const riskColor =
    riskLevel === "Alto"
      ? "text-destructive"
      : riskLevel === "Medio"
      ? "text-yellow-500"
      : "text-green-500";

  return (
    <Card
      className={cn(
        "transition-all animate-in fade-in-50",
        riskStyles[riskLevel]
      )}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <RiskIcon className={cn("h-8 w-8", riskColor)} />
          <div className="flex flex-col">
            <span
              className={cn("text-sm", riskStyles[riskLevel], "text-opacity-70")}
            >
              Nivel de Riesgo
            </span>
            <span className={cn("text-2xl", riskColor)}>{riskLevel}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-base text-card-foreground/80">{reason}</p>
        <div className="flex flex-wrap gap-4 text-sm">
          {city && (
            <div className="flex items-center gap-2 rounded-full border bg-background/50 px-3 py-1 text-card-foreground/90">
              <AlertCircle className="h-4 w-4" />
              <span>
                Ciudad principal: <strong>{city}</strong>
              </span>
            </div>
          )}
          {reportCount && (
            <div className="flex items-center gap-2 rounded-full border bg-background/50 px-3 py-1 text-card-foreground/90">
              <TrendingUp className="h-4 w-4" />
              <span>
                <strong>{reportCount}</strong> reportes recientes
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
