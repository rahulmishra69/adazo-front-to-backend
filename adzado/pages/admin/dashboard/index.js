// Layout
import AdminLayout from "../../../components/@core/layouts/admin-layout";
import ProtectRoute from "../../context/protect";

// Sections
import Capcardview from "./card/Capcardview";
import Kpscardview from "./card/Kpscardview";
import Chart from "./chart/index";
import Table from "./table/index";

function Dashboard() {
  return (
    <ProtectRoute>
      <AdminLayout>
        <>
          <div className="bg-[#F8F8F8] dark:dark radial py-10 md:px-10 px-4">
            <h1 className="font-exo font-normal text-[37px] dark:text-white text-black">
              Overview
            </h1>
            <div className="lg:flex items-center justify-between block">
              <Capcardview />
              <Chart />
            </div>
            <div className="lg:flex items-center justify-between block flex-auto">
              <Kpscardview />
              <Table />
            </div>
          </div>
        </>
      </AdminLayout>
    </ProtectRoute>
  );
}
export default Dashboard;
