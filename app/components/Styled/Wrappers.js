//Wraps all the info area, NOT the sideBar
export const MainWrapper = ({ children }) => {
  return (
    <div className="w-full px-6 overflow-y-scroll overscroll-contain scrollbar-hide">
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
  return (
    <aside className={"hidden lg:block min-w-62.5 h-screen xl:left-0 2xl:mr-4"}>
      {children}
    </aside>
  );
};
