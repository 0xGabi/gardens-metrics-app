import { useRef, useState } from "react";

import {
  MainWrapper,
  CardsWrap,
  SectionOne,
  RadialChartWrapper,
} from "./Styled/Wrappers";
import SideBar from "./helpers/SideBar";
import InfoCard from "./InfoCard";
import TotalHNY from "../components/TotalHNY";
import LastFundings from "../components/LastFundings";
import RadialChart from "./Charts/RadialChart";
import Slider from "./helpers/Slider";

const Outflows = () => {
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
      <SideBar />
      <MainWrapper>
        <CardsWrap>
          <InfoCard title={"Proposals"} number={"69"} />
          <InfoCard title={"Beneficiaries"} number={"37"} />
          <InfoCard title={"Contributors"} number={"77"} />
        </CardsWrap>
        {/* chart */}
        <SectionOne>
          <TotalHNY />
          <LastFundings />
        </SectionOne>
        <RadialChartWrapper>
          {/* <RadialChart example={example} /> */}
        </RadialChartWrapper>
      </MainWrapper>
    </>
  );
};

export default Outflows;
