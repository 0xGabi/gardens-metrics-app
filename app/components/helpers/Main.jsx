import { DataContext } from "~/providers/DataProvider";
import { useContext } from "react";
import {
  CardsWrap,
  SectionOne,
  RadialChartWrapper,
  ChartsWrap,
} from "../Styled/Wrappers";

import InfoCard from "../MainComponents/InfoCard";
import TotalHNY from "~/components/MainComponents/TotalHNY";
import LastFundings from "~/components/MainComponents/LastFundings";
import RadialChartsComponent from "~/components/Charts/RadialChartsComponent";
import Slider from "~/components/helpers/Slider";
// import NetworkChart from "./Charts/NetworkChart";
import Sankey from "~/components/Charts/Sankey";
import AddressFlow from "../Charts/AddressFlow";

import { IconCoin, IconUser, IconGroup } from "@1hive/1hive-ui";

const Main = () => {
  const { ProposalsCount, SumTotalBeneficiaries } = useContext(DataContext);

  return (
    <>
      <CardsWrap>
        <InfoCard
          title={"Funding Proposals"}
          number={ProposalsCount}
          icon={<IconCoin size="large" />}
        />
        <InfoCard
          title={"Beneficiaries"}
          number={SumTotalBeneficiaries}
          icon={<IconUser size="large" />}
        />
        <InfoCard
          title={"Contributors"}
          number={"84"}
          icon={<IconGroup size="large" />}
        />
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
      <AddressFlow />
      {/* <Sankey /> */}
    </>
  );
};

export default Main;
