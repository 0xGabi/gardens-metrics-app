import { RefContext } from "~/providers/RefProvider";
import { useContext } from "react";
const InfoCard = ({ title, number, icon }) => {
  const { DashboardRef } = useContext(RefContext);

  return (
    <>
      <div
        ref={DashboardRef}
        className="flex-1 px-3 mb-6  xl:mb-0  mx-4  rounded-2xl bg-clip-border bg-[#041F46]"
      >
        <div
          className="relative flex flex-col min-w-0 shadow-soft-xl
      "
        >
          <div className="flex-auto p-2">
            <div className="flex flex-row -mx-2">
              <div className="flex-none w-3/4 px-3">
                <p className="mb-0 font-sans text-sm ">{title}</p>
                <h3 className="mb-0 font-semibold text-3xl md:text-4xl 	">
                  {number}
                </h3>
              </div>

              <div className="px-3 text-right basis-1/3 ">
                <div className="inline-block w-16 h-16 text-center rounded-lg bg-gradient-to-tl from-blue-700 to-black-500">
                  <i className="relative top-2 left-2">{icon}</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;
