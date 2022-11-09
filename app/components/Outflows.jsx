import { DataProvider } from "~/providers/DataProvider";

import { MainWrapper } from "./Styled/Wrappers";

import SideBar from "../components/helpers/SideBar";
import Main from "~/components/helpers/Main";

const Outflows = () => {
  return (
    <>
      <DataProvider>
        <SideBar />
        <MainWrapper>
          <Main />
        </MainWrapper>
      </DataProvider>
    </>
  );
};

export default Outflows;
