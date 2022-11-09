import { DataContext } from "~/providers/DataProvider";
import { useContext } from "react";
import {
  CardsWrap,
  SectionOne,
  RadialChartWrapper,
  ChartsWrap,
} from "../Styled/Wrappers";

import InfoCard from "../InfoCard";
import TotalHNY from "~/components/TotalHNY";
import LastFundings from "~/components/LastFundings";
import RadialChartsComponent from "~/components/Charts/RadialChartsComponent";
import Slider from "~/components/helpers/Slider";
// import NetworkChart from "./Charts/NetworkChart";
import Sankey from "~/components/Charts/Sankey";

const Main = () => {
  const { ProposalsCount } = useContext(DataContext);

  return (
    <>
      <CardsWrap>
        <InfoCard title={"Proposals"} number={ProposalsCount} />
        <InfoCard title={"Beneficiaries"} number={"37"} />
        <InfoCard title={"Contributors"} number={"84"} />
      </CardsWrap>
      {/* chart */}
      <SectionOne>
        <TotalHNY />
        <LastFundings />
      </SectionOne>
      <RadialChartWrapper>
        <Slider />
        <ChartsWrap>
          <RadialChartsComponent />
        </ChartsWrap>
      </RadialChartWrapper>
      <Sankey />
      {/* <NetworkChart /> */}
    </>
  );
};

export default Main;
