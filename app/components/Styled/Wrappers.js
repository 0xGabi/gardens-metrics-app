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
    <section className="flex flex-wrap mt-6 -mx-3 -z-50">{children}</section>
  );
};

export const RadialChartWrapper = ({ children }) => {
  return (
    <div className="flex flex-col rounded-2xl bg-clip-border bg-[#041F46] h-content">
      {children}
    </div>
  );
};

export const ChartsWrap = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row mb-2 bg-[#041F46]">
      {children}
    </div>
  );
};
