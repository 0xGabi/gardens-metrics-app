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
];
const data2 = [
  {
    id: "Supermarket",
    data: [
      {
        x: "Vegetables",
        y: 257,
      },
      {
        x: "Fruits",
        y: 159,
      },
      {
        x: "Meat",
        y: 201,
      },
    ],
  },
  {
    id: "Combini",
    data: [
      {
        x: "Vegetables",
        y: 207,
      },
      {
        x: "Fruits",
        y: 254,
      },
      {
        x: "Meat",
        y: 46,
      },
    ],
  },

  {
    id: "Marché",
    data: [
      {
        x: "Vegetables",
        y: 30,
      },
      {
        x: "Fruits",
        y: 87,
      },
    ],
  },
];

const MyResponsiveRadialBar = () => {
  const [datish, setDatish] = useState(data);
  const [motion, setMotion] = useState("gentle");
  return (
    <div
      style={{ height: "600px", border: "3px solid red", marginTop: "20px" }}
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
          mass: 99,
          tension: 31,
          friction: 126,
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
