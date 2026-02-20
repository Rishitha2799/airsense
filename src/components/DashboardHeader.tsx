import { Wind } from "lucide-react";

const DashboardHeader = () => (
  <header className="flex items-center gap-3 border-b border-border bg-card px-6 py-4">
    <div className="flex items-center justify-center rounded-lg bg-primary p-2">
      <Wind className="h-5 w-5 text-primary-foreground" />
    </div>
    <div>
      <h1 className="text-xl font-bold tracking-tight text-card-foreground">AirSense Dashboard</h1>
      <p className="text-xs text-muted-foreground">Hyper-Local Air Quality Monitoring</p>
    </div>
    <span className="ml-auto rounded-full bg-secondary/15 px-3 py-1 text-xs font-medium text-secondary">
      Live
    </span>
  </header>
);

export default DashboardHeader;
