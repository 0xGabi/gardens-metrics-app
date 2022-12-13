import { useContext } from "react";
import { RefContext } from "~/providers/RefProvider";

import { SideBarWrapper } from "../Styled/Wrappers";
import SideBarButton from "./SideBarButton";
import { IconChart, IconGraph, IconSettings, IconHome } from "@1hive/1hive-ui";
import ethereumLogo from "~/assets/ethereum.svg";

import gardensLogoDarkTwo from "~/assets/logo_type_dark.png";

const SideBar = ({ toggle }) => {
  const { ChartRef, DashboardRef, AddressFlowRef } = useContext(RefContext);

  return (
    <SideBarWrapper toggle={toggle}>
      <div className="items-center block w-auto min-h-screen grow basis-full h-screen flex flex-col items-center justify-space-between ">
        <div className="w-full h-24 grid justify-items-center content-center">
          <picture className="w-28 2xl:w-36 flex items-center justify-center">
            <img className="w-full" src={gardensLogoDarkTwo} />
          </picture>
        </div>
        <div className="flex-1">
          <ul className="h-full flex flex-col justify-center">
            <SideBarButton
              item={DashboardRef}
              Icon={<IconHome />}
              Title={"Dashboard"}
            />
            <SideBarButton
              Icon={<IconChart />}
              Title={"TimeGraph"}
              item={ChartRef}
            />
            <SideBarButton
              item={AddressFlowRef}
              Icon={<IconGraph />}
              Title={"AddressesFlow"}
            />
            {/* <SideBarButton Title={"Others"} Icon={<IconSettings />} /> */}
          </ul>
        </div>
        <div className="w-full h-24 flex items-center justify-center">
          <button className="w-full">
            <a
              className="w-full rounded bg-clip-border  w-full  bg-gradient-to-tl from-blue-700 to-black-500 px-8 py-2 text-gray"
              href="https://forum.1hive.org/c/ideas/11"
              target="_blank"
            >
              Documentation
            </a>
          </button>
        </div>
      </div>
    </SideBarWrapper>
  );
};

export default SideBar;
