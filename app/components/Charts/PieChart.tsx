import { RefContext } from "~/providers/RefProvider";
import { useContext } from "react";
import { ResponsivePie } from "@nivo/pie";
import HoneyAmount from "../HelperComponents/HoneyAmount";

import { useTheme, Tag } from "@1hive/1hive-ui";
import { theme } from "public/aragon-ui/types";

const PieChart = ({ data, totalSum, year = "2021" }) => {
  const { ChartRef } = useContext(RefContext);

  const theme = useTheme();

  return (
    <div ref={ChartRef} className="mt-5 w-full flex flex-col relative ">
      <div className="absolute top-[20px] w-full text-center  flex items-center justify-center md:mb-20">
        <div className="place-items-center w-fit">
          <Tag>{year}</Tag>
        </div>
        {/* {totalSum} */}
      </div>
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
        />
      </div>
      <div className="absolute top-[335px] w-full text-center  flex items-center justify-center">
        <div className="place-items-center w-fit">
          <HoneyAmount amount={totalSum} />
        </div>
        {/* {totalSum} */}
      </div>
    </div>
  );
};

export default PieChart;
