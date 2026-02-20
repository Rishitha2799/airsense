import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const rows = [
  { location: "Residential Zone A", aqi: 45, pm25: 12, pm10: 28, status: "Good" },
  { location: "Commercial District", aqi: 72, pm25: 24, pm10: 45, status: "Moderate" },
  { location: "Industrial Zone B", aqi: 156, pm25: 68, pm10: 102, status: "Unhealthy" },
  { location: "School Campus", aqi: 38, pm25: 10, pm10: 22, status: "Good" },
  { location: "Highway Corridor", aqi: 98, pm25: 42, pm10: 71, status: "Moderate" },
];

const statusVariant: Record<string, string> = {
  Good: "bg-secondary/15 text-secondary border-secondary/30",
  Moderate: "bg-accent/15 text-accent border-accent/30",
  Unhealthy: "bg-destructive/15 text-destructive border-destructive/30",
};

const DataTable = () => (
  <Card className="shadow-sm">
    <CardHeader className="pb-2">
      <CardTitle className="text-sm font-semibold text-card-foreground">Air Quality Data</CardTitle>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-xs">Location</TableHead>
            <TableHead className="text-xs text-right">AQI</TableHead>
            <TableHead className="text-xs text-right">PM2.5</TableHead>
            <TableHead className="text-xs text-right">PM10</TableHead>
            <TableHead className="text-xs">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.location}>
              <TableCell className="text-sm font-medium">{row.location}</TableCell>
              <TableCell className="text-sm text-right font-mono">{row.aqi}</TableCell>
              <TableCell className="text-sm text-right font-mono">{row.pm25}</TableCell>
              <TableCell className="text-sm text-right font-mono">{row.pm10}</TableCell>
              <TableCell>
                <Badge variant="outline" className={`text-[11px] ${statusVariant[row.status]}`}>
                  {row.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

export default DataTable;
