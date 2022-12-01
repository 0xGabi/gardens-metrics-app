import { DataProvider } from "~/providers/DataProvider";

import { MainWrapper } from "./Styled/Wrappers";

import SideBar from "./SideBar";
import Main from "~/components/helpers/Main";
import TopNav from "./TopNav";

const Outflows = () => {
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
