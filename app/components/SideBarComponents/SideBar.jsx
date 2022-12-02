import { useContext } from "react";
import { RefContext } from "~/providers/RefProvider";

import { SideBarWrapper } from "../Styled/Wrappers";
import SideBarButton from "./SideBarButton";
import { IconChart, IconGraph, IconSettings } from "@1hive/1hive-ui";
import ethereumLogo from "~/assets/ethereum.svg";

const SideBar = ({ toggle }) => {
  const { ChartRef, handleScroll } = useContext(RefContext);
  return (
    <SideBarWrapper toggle={toggle}>
      <div className="items-center block w-auto min-h-screen grow basis-full h-screen flex flex-col items-center justify-space-between">
        <div className="w-full h-24 flex-none border-2"></div>
        <div className="flex-1">
          <ul className="h-full flex flex-col justify-center">
            <SideBarButton Img={ethereumLogo} Title={"Dashboard"} />
            <SideBarButton
              Icon={<IconChart />}
              Title={"Timegraph"}
              item={ChartRef}
            />
            <SideBarButton Icon={<IconGraph />} Title={"Flowgraph"} />
            <SideBarButton Title={"Settings"} Icon={<IconSettings />} />
          </ul>
        </div>
        <div className="w-full h-24 flex-none border-2"></div>
      </div>
    </SideBarWrapper>
  );
};

export default SideBar;
