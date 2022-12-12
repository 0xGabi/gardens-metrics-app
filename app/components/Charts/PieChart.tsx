import { RefContext } from "~/providers/RefProvider";
import { useContext } from "react";
import { ResponsivePie } from "@nivo/pie";
import HoneyAmount from "../HelperComponents/HoneyAmount";

import { useTheme } from "@1hive/1hive-ui";
import { theme } from "public/aragon-ui/types";

const PieChart = ({ data, totalSum }) => {
  const { ChartRef } = useContext(RefContext);

  const theme = useTheme();

  return (
    <div ref={ChartRef} className="mt-5 w-full flex flex-col relative ">
      <div className="h-[696px] w-full flex">
        <ResponsivePie
          data={data}
          margin={{ top: 20, right: 60, bottom: 20, left: 60 }}
          startAngle={-180}
          endAngle={360}
          innerRadius={0.5}
          padAngle={2}
          cornerRadius={8}
          activeOuterRadiusOffset={45}
          colors={{ scheme: "blues" }}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.4]],
          }}
          arcLinkLabelsSkipAngle={0}
          arcLinkLabelsTextColor={theme.content}
          arcLinkLabelsThickness={2}
          arcLinkLabelsStraightLength={1}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 20]],
          }}
          motionConfig="molasses"
          transitionMode="startAngle"
          // defs={[
          //   {
          //     id: "dots",
          //     type: "patternDots",
          //     background: "inherit",
          //     color: "rgba(255, 255, 255, 0.3)",
          //     size: 4,
          //     padding: 1,
          //     stagger: true,
          //   },
          //   {
          //     id: "lines",
          //     type: "patternLines",
          //     background: "inherit",
          //     color: "rgba(255, 255, 255, 0.3)",
          //     rotation: -45,
          //     lineWidth: 6,
          //     spacing: 10,
          //   },
          // ]}
          // fill={[
          //   {
          //     match: {
          //       id: "ruby",
          //     },
          //     id: "dots",
          //   },
          //   {
          //     match: {
          //       id: "c",
          //     },
          //     id: "dots",
          //   },
          //   {
          //     match: {
          //       id: "go",
          //     },
          //     id: "dots",
          //   },
          //   {
          //     match: {
          //       id: "python",
          //     },
          //     id: "dots",
          //   },
          //   {
          //     match: {
          //       id: "lisp",
          //     },
          //     id: "lines",
          //   },
          //   {
          //     match: {
          //       id: "elixir",
          //     },
          //     id: "lines",
          //   },
          //   {
          //     match: {
          //       id: "javascript",
          //     },
          //     id: "lines",
          //   },
          // ]}
          // legends={[
          //   {
          //     anchor: "bottom",
          //     direction: "row",
          //     justify: false,
          //     translateX: 0,
          //     translateY: 56,
          //     itemsSpacing: 0,
          //     itemWidth: 100,
          //     itemHeight: 18,
          //     itemTextColor: "#999",
          //     itemDirection: "left-to-right",
          //     itemOpacity: 1,
          //     symbolSize: 18,
          //     symbolShape: "circle",
          //     effects: [
          //       {
          //         on: "hover",
          //         style: {
          //           itemTextColor: "#000",
          //         },
          //       },
          //     ],
          //   },
          // ]}
        />
      </div>
      <div className="absolute top-[330px] w-full text-center  flex items-center justify-center">
        <div className="place-items-center  w-fit">
          <HoneyAmount amount={totalSum} />
        </div>
        {/* {totalSum} */}
      </div>
    </div>
  );
};

export default PieChart;
