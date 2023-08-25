import MiniDrawer from "../../common/MiniDrawer";
import ListTables from "../../components/ListTables";
import StatisticsSection from "../../components/Statistics";
import { MesaProvider } from "../../context/MesaContext";
function DashboardPage() {
  return (
    <>
      <MesaProvider>
        <MiniDrawer />
        <StatisticsSection />
        <ListTables />
      </MesaProvider>
    </>
  );
}

export default DashboardPage;
