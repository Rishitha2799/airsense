import { Activity, MapPin, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const kpis = [
  {
    title: "Average AQI",
    value: "72",
    subtitle: "Moderate",
    icon: Activity,
    color: "text-accent" as const,
    bg: "bg-accent/10" as const,
  },
  {
    title: "Worst AQI Location",
    value: "156",
    subtitle: "Industrial Zone B",
    icon: MapPin,
    color: "text-destructive" as const,
    bg: "bg-destructive/10" as const,
  },
  {
    title: "Reliability Score",
    value: "94.2%",
    subtitle: "High confidence",
    icon: ShieldCheck,
    color: "text-secondary" as const,
    bg: "bg-secondary/10" as const,
  },
];

const KpiCards = () => (
  <div className="grid gap-4 sm:grid-cols-3">
    {kpis.map((kpi) => (
      <Card key={kpi.title} className="shadow-sm">
        <CardContent className="flex items-start gap-4 p-5">
          <div className={`rounded-lg p-2.5 ${kpi.bg}`}>
            <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
          </div>
          <div className="space-y-0.5">
            <p className="text-xs font-medium text-muted-foreground">{kpi.title}</p>
            <p className="text-2xl font-bold tracking-tight text-card-foreground">{kpi.value}</p>
            <p className="text-xs text-muted-foreground">{kpi.subtitle}</p>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default KpiCards;
