import { DataProvider } from "~/providers/DataProvider";

import { RefProvider } from "~/providers/RefProvider";

import { MainWrapper } from "../Styled/Wrappers";

import SideBar from "../SideBarComponents/SideBar";
import Main from "~/components/MainComponents/Main";
import TopNav from "../TopNavComponent/TopNav";

const Outflows = () => {
  // const [toggleSidebar, setToogleSidebar] = useState(false);
  return (
    <>
      <DataProvider>
        <RefProvider>
          <SideBar />
          <MainWrapper>
            <TopNav />
            <Main />
          </MainWrapper>
        </RefProvider>
      </DataProvider>
    </>
  );
};

export default Outflows;
