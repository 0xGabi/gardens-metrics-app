import { animated, useSpring } from "react-spring";
import { useRef } from "react";

import InfoCard from "./InfoCard";
import RadialChart from "./Charts/RadialChart";
import SideBar from "./SideBar";
import AddressFlow from "./AddressFlow";
const Test = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const handleClick = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {/* start */}

      <SideBar handleRef={handleClick} />

      <div className="w-full px-6 py-6 mx-auto border-dashed border-2 border-sky-500 ">
        {/* cards */}
        <div className="flex flex-wrap">
          <InfoCard title={"Proposals"} number={"68"} />
          <InfoCard title={"Beneficiaries"} number={"37"} />
          <InfoCard title={"Contributors"} number={"77"} />
        </div>
        {/* chart */}
        <div className=" w-full h-fit border-dashed border-2 border-sky-500 mt-10">
          <div class="flex">
            <div class="w-1/3 border-dashed border-2 border-sky-500 hover:w-full px-3 mb-6  xl:mb-0">
              Total HNY
            </div>
            <div class="w-2/3 border-dashed border-2 border-sky-500 w-full px-3 mb-6  xl:mb-0">
              Latest Porposals details
            </div>
          </div>
        </div>
        <div className="min-w-full h-96	 border-dashed border-2 border-sky-500 mt-10">
          <RadialChart />
        </div>
        <div handleRef={handleClick} ref={ref1} className="min-h-screen">
          Ref
        </div>
        <div handleRef={handleClick} ref={ref2} className="min-h-screen">
          Ref
        </div>
        <div handleRef={handleClick} ref={ref2} className="min-h-screen">
          Ref
        </div>
      </div>
    </>
  );
};

export default Test;
