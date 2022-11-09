import { useContext } from "react";
import { DataContext } from "~/providers/DataProvider";

const TotalHNY = ({ amount }) => {
  const { TOTAL_HNY_FUNDING_SUM } = useContext(DataContext);

  return (
    <div className="flex-auto p-4 ">
      <div className="flex flex-wrap">
        <div className="max-w-full px-3 lg:w-1/2 lg:flex-none ">
          <div className="flex flex-col h-full">
            <h2 className="pt-2 mb-4">TOTAL HNY for funding Proposals</h2>
            <h3 className="text-5xl">
              {TOTAL_HNY_FUNDING_SUM}
              <span className="text-sm">{"+ 450"}</span>
            </h3>

            <p className="mb-44">...</p>
            <a>1hive.org</a>
          </div>
        </div>
        <div className="w-full min-h-max md:px-2 lg:w-1/2  ml-auto ">
          <div className="h-full bg-gradient-to-tl from-blue-700 to-black-500 rounded-xl text-center">
            <h2 className="h-64 ">HNY IMAGE</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalHNY;
