import { DataProvider } from "~/providers/DataProvider";

import { useState } from "react";

import { MainWrapper } from "../Styled/Wrappers";

import SideBar from "../SideBarComponents/SideBar";
import Main from "~/components/helpers/Main";
import TopNav from "../TopNavComponent/TopNav";

const Outflows = () => {
  // const [toggleSidebar, setToogleSidebar] = useState(false);
  return (
    <>
      <DataProvider>
        <SideBar />
        <MainWrapper>
          <TopNav />
          <Main />
        </MainWrapper>
      </DataProvider>
    </>
  );
};

export default Outflows;
