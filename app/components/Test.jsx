import { useRef, useState } from "react";

import SideBar from "../components/SideBar";
import InfoCard from "./InfoCard";
import RadialChart from "./Charts/RadialChart";
import Slider from "../components/Slider";

const Test = () => {
  const ref = useRef(null);
  const [values, setValues] = useState([0, 11]);

  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const sliceFunc = (array, start, end) => {
    const newArr = array.slice(start, end);
    return newArr;
  };

  const example = sliceFunc(MONTHS, values[0], values[1]);

  return (
    <>
      {/* <SideBar /> */}
      <div className="w-full px-6 py-6  border-dashed border-2 border-sky-800 ">
        <div className="flex flex-wrap ">
          <InfoCard title={"Proposals"} number={"69"} />
          <InfoCard title={"Beneficiaries"} number={"37"} />
          <InfoCard title={"Contributors"} number={"77"} />
        </div>

        {/* chart */}
        <div className=" flex-auto p-4  border-dashed border-2 border-sky-500 mt-10">
          <div class="flex">
            <div class="w-1/3 border-dashed border-2 border-sky-500 hover:w-full px-3 mb-6  xl:mb-0">
              Total HNY
            </div>

            {/*  */}
            <div class="w-2/3 border-dashed border-2 border-sky-500 w-full px-3 mb-6  xl:mb-0">
              Latest Porposals details
            </div>
          </div>
        </div>
        <div className="min-w-full h-96	 border-dashed border-2 border-sky-500 mt-10">
          {/* <RadialChart example={example} /> */}
        </div>

        <div ref={ref} className="min-h-screen">
          <h1>ref1</h1>
        </div>
      </div>
    </>
  );
};

export default Test;
