import DashboardHeader from "@/components/DashboardHeader";
import KpiCards from "@/components/KpiCards";
import ChartPlaceholders from "@/components/ChartPlaceholders";
import MapPlaceholder from "@/components/MapPlaceholder";
import DataTable from "@/components/DataTable";

const Index = () => (
  <div className="min-h-screen bg-background">
    <DashboardHeader />
    <main className="mx-auto max-w-7xl space-y-6 p-6">
      <KpiCards />
      <ChartPlaceholders />
      <MapPlaceholder />
      <DataTable />
    </main>
  </div>
);

export default Index;
