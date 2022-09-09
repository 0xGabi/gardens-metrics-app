import { useTheme } from "@1hive/1hive-ui";
import { ResponsiveNetwork } from "@nivo/network";
import { useState } from "react";

const data = {
  nodes: [
    {
      id: "Node 1",
      height: 1,
      size: 24,
      color: "rgb(97, 205, 187)",
    },
    {
      id: "Node 2",
      height: 1,
      size: 24,
      color: "rgb(97, 205, 187)",
    },
    {
      id: "Node 3",
      height: 1,
      size: 24,
      color: "rgb(97, 205, 187)",
    },
    {
      id: "Node 4",
      height: 1,
      size: 24,
      color: "rgb(97, 205, 187)",
    },
    {
      id: "Node 5",
      height: 1,
      size: 24,
      color: "rgb(97, 205, 187)",
    },
    {
      id: "Node 6",
      height: 1,
      size: 24,
      color: "rgb(97, 205, 187)",
    },
    {
      id: "Node 7",
      height: 1,
      size: 24,
      color: "rgb(97, 205, 187)",
    },
    {
      id: "1Hive",
      height: 2,
      size: 32,
      color: "rgb(244, 117, 96)",
    },
    {
      id: "Node 1.0",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 1.1",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 1.2",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 1.3",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 1.4",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 1.5",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 1.6",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 1.7",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 1.8",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 2.0",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 2.1",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 2.2",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 3.0",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 3.1",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 3.2",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 4.0",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 4.1",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 4.2",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 4.3",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 4.4",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 4.5",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 4.6",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 4.7",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 5.0",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 5.1",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 5.2",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 5.3",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 5.4",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 5.5",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 5.6",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 5.7",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 5.8",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 6.0",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 6.1",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 6.2",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 6.3",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 7.0",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 7.1",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
    {
      id: "Node 7.2",
      height: 0,
      size: 12,
      color: "rgb(232, 193, 160)",
    },
  ],
  links: [
    {
      source: "1Hive",
      target: "Node 1",
      distance: 80,
    },
    {
      source: "Node 1",
      target: "Node 1.0",
      distance: 50,
    },
    {
      source: "Node 1",
      target: "Node 1.1",
      distance: 50,
    },
    {
      source: "Node 1",
      target: "Node 1.2",
      distance: 50,
    },
    {
      source: "Node 1",
      target: "Node 1.3",
      distance: 50,
    },
    {
      source: "Node 1",
      target: "Node 1.4",
      distance: 50,
    },
    {
      source: "Node 1",
      target: "Node 1.5",
      distance: 50,
    },
    {
      source: "Node 1",
      target: "Node 1.6",
      distance: 50,
    },
    {
      source: "Node 1",
      target: "Node 1.7",
      distance: 50,
    },
    {
      source: "Node 1",
      target: "Node 1.8",
      distance: 50,
    },
    {
      source: "1Hive",
      target: "Node 2",
      distance: 80,
    },
    {
      source: "Node 2",
      target: "Node 2.0",
      distance: 50,
    },
    {
      source: "Node 2",
      target: "Node 2.1",
      distance: 50,
    },
    {
      source: "Node 2",
      target: "Node 2.2",
      distance: 50,
    },
    {
      source: "1Hive",
      target: "Node 3",
      distance: 80,
    },
    {
      source: "Node 3",
      target: "Node 3.0",
      distance: 50,
    },
    {
      source: "Node 3",
      target: "Node 3.1",
      distance: 50,
    },
    {
      source: "Node 3",
      target: "Node 3.2",
      distance: 50,
    },
    {
      source: "1Hive",
      target: "Node 4",
      distance: 80,
    },
    {
      source: "Node 4",
      target: "Node 4.0",
      distance: 50,
    },
    {
      source: "Node 4",
      target: "Node 4.1",
      distance: 50,
    },
    {
      source: "Node 4",
      target: "Node 4.2",
      distance: 50,
    },
    {
      source: "Node 4",
      target: "Node 4.3",
      distance: 50,
    },
    {
      source: "Node 4",
      target: "Node 4.4",
      distance: 50,
    },
    {
      source: "Node 4",
      target: "Node 4.5",
      distance: 50,
    },
    {
      source: "Node 4",
      target: "Node 4.6",
      distance: 50,
    },
    {
      source: "Node 4",
      target: "Node 4.7",
      distance: 50,
    },
    {
      source: "1Hive",
      target: "Node 5",
      distance: 80,
    },
    {
      source: "Node 5",
      target: "Node 3",
      distance: 80,
    },
    {
      source: "Node 5",
      target: "Node 5.0",
      distance: 50,
    },
    {
      source: "Node 5",
      target: "Node 5.1",
      distance: 50,
    },
    {
      source: "Node 5",
      target: "Node 5.2",
      distance: 50,
    },
    {
      source: "Node 5",
      target: "Node 5.3",
      distance: 50,
    },
    {
      source: "Node 5",
      target: "Node 5.4",
      distance: 50,
    },
    {
      source: "Node 5",
      target: "Node 5.5",
      distance: 50,
    },
    {
      source: "Node 5",
      target: "Node 5.6",
      distance: 50,
    },
    {
      source: "Node 5",
      target: "Node 5.7",
      distance: 50,
    },
    {
      source: "Node 5",
      target: "Node 5.8",
      distance: 50,
    },
    {
      source: "1Hive",
      target: "Node 6",
      distance: 80,
    },
    {
      source: "Node 6",
      target: "Node 6.0",
      distance: 50,
    },
    {
      source: "Node 6",
      target: "Node 6.1",
      distance: 50,
    },
    {
      source: "Node 6",
      target: "Node 6.2",
      distance: 50,
    },
    {
      source: "Node 6",
      target: "Node 6.3",
      distance: 50,
    },
    {
      source: "1Hive",
      target: "Node 7",
      distance: 80,
    },
    {
      source: "Node 7",
      target: "Node 7.0",
      distance: 50,
    },
    {
      source: "Node 7",
      target: "Node 7.1",
      distance: 50,
    },
    {
      source: "Node 7",
      target: "Node 7.2",
      distance: 50,
    },
  ],
};

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
        fontSize: 24,
        fill: "#333333",
      },
    },
    ticks: {
      line: {
        stroke: "#777777",
        strokeWidth: 1,
      },
      text: {
        fontSize: 11,
        fill: "#333333",
      },
    },
  },
  grid: {
    line: {
      stroke: "#dddddd",
      strokeWidth: 1,
    },
  },
  legends: {
    title: {
      text: {
        fontSize: 11,
        fill: "#333333",
      },
    },
    text: {
      fontSize: 11,
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
      strokeWidth: 2,
      outlineWidth: 2,
      outlineColor: "#ffffff",
      outlineOpacity: 1,
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
      background: "#ffffff",
      color: "#333333",
      fontSize: 36,
    },
    basic: {},
    chip: {},
    table: {},
    tableCell: {},
    tableCellValue: {},
  },
};

const MyResponsiveNetwork = () => {
  const [repul, setRepul] = useState(15);

  return (
    <div
      style={{ height: "600px", border: "3px solid red", marginTop: "20px" }}
    >
      <ResponsiveNetwork
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        linkDistance={function (e) {
          return e.distance;
        }}
        theme={theme}
        centeringStrength={0.1}
        repulsivity={repul}
        nodeSize={function (n) {
          return n.size;
        }}
        activeNodeSize={function (n) {
          return 1.5 * n.size;
        }}
        nodeColor={function (e) {
          return e.color;
        }}
        nodeBorderWidth={0}
        nodeBorderColor={{
          from: "color",
          modifiers: [["darker", 0.8]],
        }}
        linkThickness={function (n) {
          return 2 + 2 * n.target.data.height;
        }}
        linkBlendMode="multiply"
        motionConfig="wobbly"
      />
    </div>
  );
};

export default MyResponsiveNetwork;
