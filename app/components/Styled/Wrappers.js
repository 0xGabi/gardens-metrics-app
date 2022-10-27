//Wraps all the info area, NOT the sideBar
export const MainWrapper = ({ children }) => {
  return (
    <div className="w-full px-6 py-6 border-solid border-2 border-sky-500  ">
      <div className=""></div>
      {children}
    </div>
  );
};
//Wraps the InfoCards component
export const CardsWrap = ({ children }) => {
  return <div className="flex flex-wrap">{children}</div>;
};

//Wraps sectionOne --- Info, Total HNY + hny SVG
export const SectionOne = ({ children }) => {
  return <sectio className="flex-wrap md:flex mt-10">{children}</sectio>;
};

export const RadialChartWrapper = ({ children }) => {
  return (
    <div className="min-w-full h-96 p-4	 border-dashed border-2 border-sky-500 mt-10">
      {children}
    </div>
  );
};
