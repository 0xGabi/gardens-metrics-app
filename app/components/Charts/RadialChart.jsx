import { RefContext } from "~/providers/RefProvider";
import { useContext } from "react";
import { ResponsiveRadialBar } from "@nivo/radial-bar";
import HoneyAmount from "../HelperComponents/HoneyAmount";
import { useTheme } from "@1hive/1hive-ui";

const RadialCharttt = ({ data, totalSum }) => {
  const theme = useTheme();
  const { ChartRef } = useContext(RefContext);
  return (
    <div ref={ChartRef} className="mt-5 w-full flex flex-col relative ">
      <div className="h-[696px] w-full flex ">
        <ResponsiveRadialBar
          data={data}
          valueFormat=">-.2f"
          startAngle={-143}
          endAngle={143}
          innerRadius={0.05}
          padding={0.3}
          padAngle={2}
          cornerRadius={5}
          // margin={{ top: 40, right: 150, bottom: 40, left: 40 }}
          colors={{ scheme: "blues" }}
          borderWidth={2}
          borderColor={{
            from: "color",
            modifiers: [["darker", "0.7"]],
          }}
          enableTracks={false}
          enableRadialGrid={false}
          enableCircularGrid={false}
          radialAxisStart={null}
          circularAxisOuter={null}
          enableLabels={true}
          label="value"
          labelsSkipAngle={1}
          labelsTextColor={theme.helpContent}
          motionConfig="molasses"
          transitionMode="pushOut"
          legends={[
            {
              dataFrom: "keys",
              anchor: "left",
              direction: "row",
              justify: false,
              translateX: 105,
              translateY: -300,
              itemWidth: 20,
              itemHeight: 10,
              itemsSpacing: 19,
              symbolSize: 17,
              itemDirection: "left-to-right",
            },
          ]}
        />
        {/* <div className="absolute top-[460px] lg:left-[250px] 2xl:left-[550px]"> */}
        <div className="absolute top-[480px] w-full text-center  flex items-center justify-center">
          <div className="place-items-center  w-fit">
            <HoneyAmount amount={totalSum} />
          </div>
          {/* {totalSum} */}
        </div>
      </div>
      {/* <ResponsiveRadialBar
        data={data}
        startAngle={-143}
        endAngle={143}
        padding={0.3}
          padAngle={2}
        // margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
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
        // legends={[
        //   {
        //     anchor: "right",
        //     direction: "column",
        //     justify: false,
        //     translateX: 60,
        //     translateY: 0,
        //     itemsSpacing: 14,
        //     itemDirection: "right-to-left",
        //     itemWidth: 100,
        //     itemHeight: 18,
        //     itemTextColor: "#DEE2E7",
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
      /> */}
    </div>
  );
};

export default RadialCharttt;
