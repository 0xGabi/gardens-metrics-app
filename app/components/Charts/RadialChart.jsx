import { RefContext } from "~/providers/RefProvider";
import { useContext } from "react";
import { ResponsiveRadialBar } from "@nivo/radial-bar";
import { useTheme } from "@1hive/1hive-ui";

const RadialCharttt = ({ data, totalSum }) => {
  const theme = useTheme();
  const { ChartRef } = useContext(RefContext);

  console.log(ChartRef);

  return (
    <div ref={ChartRef} className="h-[696px] mt-5 w-full flex flex-col">
      <ResponsiveRadialBar
        data={data}
        startAngle={-136}
        endAngle={184}
        padding={0.35}
        margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
        colors={{ scheme: "blues" }}
        borderColor={{
          from: "color",
          modifiers: [["darker", "0.7"]],
        }}
        borderWidth={1}
        enableTracks={false}
        tracksColor="#fffafa"
        enableRadialGrid={false}
        enableCircularGrid={false}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        enableLabels={true}
        labelsSkipAngle={3}
        labelsTextColor={theme.helpContent}
        legends={[
          {
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 60,
            translateY: 0,
            itemsSpacing: 14,
            itemDirection: "right-to-left",
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#DEE2E7",
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
      <div className="text-center">{totalSum}</div>
    </div>
  );
};

export default RadialCharttt;
