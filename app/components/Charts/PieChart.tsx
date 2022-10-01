import { ResponsivePie } from "@nivo/pie";
import { useViewport, GU } from "@1hive/1hive-ui";
import styled from "styled-components";
import { useTheme } from "@1hive/1hive-ui";
import { theme } from "public/aragon-ui/types";

const PieChart = () => {
  const theme = useTheme();
  //DEMO data
  const data = [
    {
      id: "JUN",
      label: "June",
      value: 150,
      color: "hsl(20, 70%, 50%)",
    },
    {
      id: "JUL",
      label: "July",
      value: 376,
      color: "hsl(40, 70%, 50%)",
    },
    {
      id: "AGO",
      label: "August",
      value: 509,
      color: "hsl(153, 70%, 50%)",
    },
    {
      id: "SEP",
      label: "September",
      value: 455,
      color: "hsl(79, 70%, 50%)",
    },
    {
      id: "OCT",
      label: "October",
      value: 633,
      color: "hsl(360, 70%, 50%)",
    },
  ];

  return (
    <div style={{ height: "600px", border: "3px solid red" }}>
      <ResponsivePie
        data={data}
        margin={{ top: 50, right: 150, bottom: 150, left: 150 }}
        startAngle={76}
        innerRadius={0.5}
        padAngle={2}
        cornerRadius={10}
        activeOuterRadiusOffset={45}
        borderWidth={3}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.4]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.content}
        arcLinkLabelsThickness={4}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 20]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
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
  );
};

export default PieChart;
