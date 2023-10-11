import Grid from "../grid";
import Navbar from "../navbar";
import { topGridItems } from "./meta";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 my-4 sm:mx-8 mx-6 flex-1 ">
      <Navbar />
      <div className="flex flex-col overflow-auto gap-6">
        <div className="text-white font-semibold sm:text-[2rem] text-[1.25rem]">
          Good Morning
        </div>
        <Grid gridItems={topGridItems} />
      </div>
    </div>
  );
};
export default Dashboard;
