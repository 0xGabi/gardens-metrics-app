import { useTheme } from "@1hive/1hive-ui";
import { ResponsiveRadialBar } from "@nivo/radial-bar";
import { useState } from "react";
const data = [
  {
    id: "2021",
    data: [
      {
        x: "June",
        y: 376,
      },
      {
        x: "July",
        y: 290,
      },
      {
        x: "Ago",
        y: 120,
      },
      {
        x: "Sep",
        y: 443,
      },
      {
        x: "Oct",
        y: 567,
      },
    ],
  },
  {
    id: "2022",
    data: [
      {
        x: "June",
        y: 446,
      },
      {
        x: "July",
        y: 477,
      },
      {
        x: "Ago",
        y: 55,
      },
      {
        x: "Sep",
        y: 226,
      },
      {
        x: "Oct",
        y: 900,
      },
    ],
  },
];
const data2 = [
  {
    id: "2021",
    data: [
      {
        x: "June",
        y: 376,
      },
      {
        x: "July",
        y: 290,
      },
      {
        x: "Ago",
        y: 120,
      },
      {
        x: "Sep",
        y: 443,
      },
      {
        x: "Oct",
        y: 567,
      },
    ],
  },
];

const theme = {
  background: "#2C3A58",
  textColor: "#333333",
  fontSize: 11,
  axis: {
    domain: {
      line: {
        stroke: "#777777",
        strokeWidth: 1,
      },
    },
    legend: {
      text: {
        fontSize: 12,
        fill: "#333333",
      },
    },
    ticks: {
      line: {
        stroke: "#777777",
        strokeWidth: 0,
      },
      text: {
        fontSize: 17,
        fill: "#e01a1a",
      },
    },
  },
  grid: {
    line: {
      stroke: "#dddddd",
      strokeWidth: 3,
    },
  },
  legends: {
    title: {
      text: {
        fontSize: 19,
        fill: "#333333",
      },
    },
    text: {
      fontSize: 13,
      fill: "#333333",
    },
    ticks: {
      line: {},
      text: {
        fontSize: 10,
        fill: "#333333",
      },
    },
  },
  annotations: {
    text: {
      fontSize: 13,
      fill: "#333333",
      outlineWidth: 2,
      outlineColor: "#ffffff",
      outlineOpacity: 1,
    },
    link: {
      stroke: "#000000",
      strokeWidth: 1,
      outlineWidth: 2,
      outlineColor: "#ffffff",
      outlineOpacity: 1,
    },
    outline: {
      stroke: "#000000",
      strokeWidth: 7,
      outlineWidth: 4,
      outlineColor: "#ffffff",
      outlineOpacity: 0.65,
    },
    symbol: {
      fill: "#000000",
      outlineWidth: 2,
      outlineColor: "#ffffff",
      outlineOpacity: 1,
    },
  },
  tooltip: {
    container: {
      background: "#28449a",
      color: "#333333",
      fontSize: 6,
    },
    basic: {},
    chip: {},
    table: {},
    tableCell: {},
    tableCellValue: {},
  },
};

const MyResponsiveRadialBar = () => {
  const [datish, setDatish] = useState(data);
  const [motion, setMotion] = useState("gentle");
  return (
    <div
      style={{ height: "600px", border: "3px solid red", marginTop: "80px" }}
    >
      <button
        style={{ color: "#042940", backgroundColor: "#f4f4f4" }}
        onClick={() => (datish === data ? setDatish(data2) : setDatish(data))}
      >
        CHANGE DATA
      </button>
      <ResponsiveRadialBar
        data={datish}
        valueFormat=" >-.2f"
        startAngle={92}
        endAngle={-183}
        innerRadius={0.4}
        theme={theme}
        padding={0.1}
        padAngle={3}
        margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
        colors={{ scheme: "greens" }}
        borderWidth={2}
        borderColor={{
          from: "color",
          modifiers: [["darker", 3]],
        }}
        tracksColor="#eceaea"
        enableRadialGrid={true}
        enableCircularGrid={true}
        radialAxisStart={{ tickSize: 7, tickPadding: 9, tickRotation: 1 }}
        enableLabels={true}
        label="value"
        labelsSkipAngle={11}
        motionConfig={{
          mass: 184,
          tension: 223,
          friction: 31,
          clamp: true,
          precision: 0.01,
          velocity: 0,
        }}
        transitionMode="startAngle"
        ariaLabel="grid"
        legends={[
          {
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 75,
            translateY: 0,
            itemsSpacing: 2,
            itemDirection: "left-to-right",
            itemWidth: 124,
            itemHeight: 18,
            itemTextColor: "#999",
            symbolSize: 18,
            symbolShape: "square",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#DBF227",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default MyResponsiveRadialBar;
