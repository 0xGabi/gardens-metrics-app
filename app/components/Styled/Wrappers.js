//Wraps all the info area, NOT the sideBar
export const MainWrapper = ({ children }) => {
  return (
    <div className="w-full px-6 py-6">
      <div className=""></div>
      {children}
    </div>
  );
};
//Wraps the InfoCards component
export const CardsWrap = ({ children }) => {
  return (
    <div className="flex flex-col xl:flex-row flex-wrap -mx-3 border-2 border-[#067427]">
      {children}
    </div>
  );
};

//Wraps sectionOne --- Info, Total HNY + hny SVG
export const SectionOne = ({ children }) => {
  return <section className="flex-wrap md:flex mt-10">{children}</section>;
};

export const RadialChartWrapper = ({ children }) => {
  return <div className=" flex-col flex h-fit p-4 mt-2">{children}</div>;
};

export const ChartsWrap = ({ children }) => {
  return (
    <div className="ms:flex-col  md:flex mt-5 p-3 mb-2 border-dashed border-2 border-sky-300 h-full">
      {children}
    </div>
  );
};
