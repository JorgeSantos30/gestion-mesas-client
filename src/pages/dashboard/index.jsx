import ListDiners from "../../components/ListDiners";
import ListTables from "../../components/ListTables";
import StatisticsSection from "../../components/Statistics";
import { MesaProvider } from "../../context/MesaContext";
function DashboardPage() {
  return (
    <>
      <MesaProvider>
        <StatisticsSection />
        <ListTables />
        <ListDiners />
      </MesaProvider>
    </>
  );
}

export default DashboardPage;
