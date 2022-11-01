import { useRef, useState } from "react";

import {
  MainWrapper,
  CardsWrap,
  SectionOne,
  RadialChartWrapper,
  ChartsWrap,
} from "./Styled/Wrappers";
import SideBar from "./helpers/SideBar";
import InfoCard from "./InfoCard";
import TotalHNY from "../components/TotalHNY";
import LastFundings from "../components/LastFundings";
import RadialChartsComponent from "./Charts/RadialChartsComponent";
import Slider from "./helpers/Slider";
import NetworkChart from "./Charts/NetworkChart";
import Sankey from "../components/Charts/Sankey";

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
          <Slider values={values} setValues={setValues} />
          <ChartsWrap>
            <RadialChartsComponent example={example} />
          </ChartsWrap>
        </RadialChartWrapper>
        <Sankey />
        {/* <NetworkChart /> */}
      </MainWrapper>
    </>
  );
};

export default Outflows;