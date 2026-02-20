import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const pins = [
  { label: "Station A", x: "25%", y: "35%", status: "good" },
  { label: "Station B", x: "55%", y: "22%", status: "moderate" },
  { label: "Station C", x: "70%", y: "60%", status: "unhealthy" },
  { label: "Station D", x: "40%", y: "70%", status: "good" },
];

const statusColor: Record<string, string> = {
  good: "text-secondary",
  moderate: "text-accent",
  unhealthy: "text-destructive",
};

const MapPlaceholder = () => (
  <Card className="shadow-sm">
    <CardHeader className="pb-2">
      <CardTitle className="text-sm font-semibold text-card-foreground">Location-Based AQI Map</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="relative h-56 w-full overflow-hidden rounded-lg bg-muted">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-xs text-muted-foreground">Map visualization placeholder</p>
        </div>
        {pins.map((pin) => (
          <div
            key={pin.label}
            className="absolute flex flex-col items-center"
            style={{ left: pin.x, top: pin.y }}
          >
            <MapPin className={`h-5 w-5 drop-shadow ${statusColor[pin.status]}`} />
            <span className="mt-0.5 rounded bg-card px-1.5 py-0.5 text-[10px] font-medium text-card-foreground shadow-sm">
              {pin.label}
            </span>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default MapPlaceholder;
