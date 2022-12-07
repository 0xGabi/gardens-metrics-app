//Wraps all the info area, NOT the sideBar
export const MainWrapper = ({ children }) => {
  return (
    <div className="w-full px-6 overflow-y-scroll overscroll-contain">
      <div className=""></div>
      {children}
    </div>
  );
};
//Wraps the InfoCards component
export const CardsWrap = ({ children }) => {
  return (
    <div className="flex flex-col xl:flex-row flex-wrap -mx-3 ">{children}</div>
  );
};

//Wraps sectionOne --- Info, Total HNY + hny SVG
export const SectionOne = ({ children }) => {
  return (
    <section className="flex flex-wrap mt-14 mb-12 lg:mb-6 2xl:mb-12 -z-50  ">
      {children}
    </section>
  );
};

//Wraps Slider and the Charts=Wrap
export const RadialChartWrapper = ({ children }) => {
  return (
    <div className="flex flex-col rounded-2xl bg-clip-border bg-[#041F46] h-content  mb-12">
      {children}
    </div>
  );
};

//Wraps the RadialChart
export const ChartsWrap = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row mb-2 bg-[#041F46]">
      {children}
    </div>
  );
};

//Wraps entire SideBar
export const SideBarWrapper = ({ children, toggle }) => {
  // const [toggleSidebar, setToogleSidebar] = useState(false);
  // const toggleClass = "fixed top-0 left-0 z-30 bg-[#031A3A]";

  // const openLargeScreen =
  //   "hidden lg:block min-w-62.5 h-screen shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent ml-4  mr-4 2xl:mr-8 ";

  // const closeMediumScreen =
  //   "fixed top-0 left-0 z-30 bg-[#031A3A] min-w-62.5 h-screen shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent ml-4  mr-4 2xl:mr-8 border-2 lg:relative block";

  return (
    <aside
      className={
        "hidden lg:block min-w-62.5 h-screen xl:left-0 2xl:mr-4"
        // toggle ? openLargeScreen : closeMediumScreen

        // +
        // // "fixed top-0 left-0 z-30 bg-[#031A3A]"
        // "hidden lg:relative block min-w-62.5 h-screen shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent ml-4  mr-4 2xl:mr-8 border-2"
        // +
        // (toggle ? null : toggleClass)
      }
    >
      {children}
    </aside>
  );
};
