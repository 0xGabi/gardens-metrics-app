import { DataContext } from "~/providers/DataProvider";
import { useContext } from "react";
import CountUp from "react-countup";
import { Tag } from "@1hive/1hive-ui";
import iconHoney from "~/assets/honey_logo_dark.png";
import beeSvg from "~/assets/bee.svg";

const TotalHNY = ({}) => {
  const { TOTAL_HNY_FUNDING_SUM } = useContext(DataContext);

  return (
    <div className="w-full px-3 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none ">
      <div className="relative flex flex-col min-w-0 break-words bg-[#041f46] shadow-soft-xl rounded-2xl bg-clip-border  ">
        <div className="flex-auto p-4 ">
          <div className="flex flex-col xl:flex-row -mx-3 ">
            <div className="max-w-full px-3 lg:w-1/2 lg:flex-none ">
              <div className="flex flex-col h-full">
                <h2 className="pt-2 mb-4">TOTAL HNY for funding Proposals</h2>
                <h3 className="text-5xl">
                  <CountUp
                    end={TOTAL_HNY_FUNDING_SUM}
                    duration={1.1}
                    scrollSpyDelay={1000}
                  ></CountUp>
                  <Tag className="animate-pulse " background={"#041F46"}>
                    {"+85"}
                  </Tag>
                  {/* <span className="text-sm">{"+ 36.77"}</span> */}
                </h3>

                <p className="mb-44"></p>
              </div>
            </div>
            <div className="max-w-full px-3 lg:w-1/2  lg:flex-none  ">
              <div className="bg-gradient-to-tl from-blue-700 to-black-500 rounded-xl relative flex items-center justify-center max-h-content h-80 md:h-96 lg:h-64 2xl:h-80 ">
                <picture className="w-36 2xl:w-48 flex items-center justify-center ">
                  <img className="w-full" src={beeSvg} />
                </picture>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 32 32"
                >
                  <g fill="none" fill-rule="evenodd">
                    <circle cx="16" cy="16" r="16" fill="" />
                    <g fill="#FFF" fill-rule="nonzero">
                      <path
                        fill-opacity=".602"
                        d="M16.498 4v8.87l7.497 3.35z"
                      />
                      <path d="M16.498 4 9 16.22l7.498-3.35z" />
                      <path
                        fill-opacity=".602"
                        d="M16.498 21.968v6.027L24 17.616z"
                      />
                      <path d="M16.498 27.995v-6.028L9 17.616z" />
                      <path
                        fill-opacity=".2"
                        d="m16.498 20.573 7.497-4.353-7.497-3.348z"
                      />
                      <path
                        fill-opacity=".602"
                        d="m9 16.22 7.498 4.353v-7.701z"
                      />
                    </g>
                  </g>
                </svg> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalHNY;
