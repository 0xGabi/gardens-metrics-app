import { ResponsiveSankey } from "@nivo/sankey";
import { IdentityBadge, EthIdenticon } from "@1hive/1hive-ui";

const data = {
  nodes: [
    {
      id: "1Hive",
      nodeColor: "hsl(150, 70%, 50%)",
    },
    {
      id: `0xft7...98it`,
      nodeColor: "hsl(188, 70%, 50%)",
    },
    {
      id: "0xft7...98ir",
      nodeColor: "hsl(188, 70%, 50%)",
    },
    {
      id: "0xft7...98ie",
      nodeColor: "hsl(188, 70%, 50%)",
    },
    {
      id: "0xft7...98iw",
      nodeColor: "hsl(188, 70%, 50%)",
    },
    {
      id: "0xft7...98ia",
      nodeColor: "hsl(188, 70%, 50%)",
    },
    {
      id: "0xft7...98is",
      nodeColor: "hsl(188, 70%, 50%)",
    },
    {
      id: "0xft7...98id",
      nodeColor: "hsl(188, 70%, 50%)",
    },
    {
      id: "0xft7...98sq",
      nodeColor: "hsl(188, 70%, 50%)",
    },

    {
      id: "0xft7...98se",
      nodeColor: "hsl(188, 70%, 50%)",
    },
    {
      id: "0xft7...98sr",
      nodeColor: "hsl(188, 70%, 50%)",
    },
    {
      id: "0xft7...98st",
      nodeColor: "hsl(188, 70%, 50%)",
    },
    {
      id: "0xft7...98sy",
      nodeColor: "hsl(188, 70%, 50%)",
    },
    {
      id: "0xft7...98su",
      nodeColor: "hsl(188, 70%, 50%)",
    },
    {
      id: "0xft7...98si",
      nodeColor: "hsl(188, 70%, 50%)",
    },
    {
      id: "0xft7...98so",
      nodeColor: "hsl(188, 70%, 50%)",
    },
    {
      id: "0xft7...98sp",
      nodeColor: "hsl(188, 70%, 50%)",
    },
    {
      id: "0xft7...98sw",
      nodeColor: "hsl(188, 70%, 50%)",
    },
  ],
  links: [
    {
      source: "1Hive",
      target: "0xft7...98it",
      value: 91,
    },
    {
      source: "1Hive",
      target: "0xft7...98ir",
      value: 45,
    },
    {
      source: "1Hive",
      target: "0xft7...98ie",
      value: 60,
    },
    {
      source: "1Hive",
      target: "0xft7...98iw",
      value: 80,
    },
    {
      source: "1Hive",
      target: "0xft7...98ia",
      value: 50,
    },
    {
      source: "1Hive",
      target: "0xft7...98is",
      value: 344,
    },
    {
      source: "1Hive",
      target: "0xft7...98id",
      value: 667,
    },
    {
      source: "1Hive",
      target: "0xft7...98sq",
      value: 500,
    },
    {
      source: "1Hive",
      target: "0xft7...98sw",
      value: 50,
    },
    {
      source: "1Hive",
      target: "0xft7...98se",
      value: 30,
    },
    {
      source: "1Hive",
      target: "0xft7...98sr",
      value: 120,
    },
    {
      source: "1Hive",
      target: "0xft7...98st",
      value: 287,
    },
    {
      source: "1Hive",
      target: "0xft7...98sy",
      value: 334,
    },
    {
      source: "1Hive",
      target: "0xft7...98su",
      value: 400,
    },
    {
      source: "1Hive",
      target: "0xft7...98si",
      value: 667,
    },
    {
      source: "1Hive",
      target: "0xft7...98so",
      value: 855,
    },
  ],
};

const Sankey = () => {
  return (
    <div
      //   style={{ width: "800px", height: "800px" }}
      className=" border-dashed border-2 border-sky-500 w-1/2 h-[38rem] "
    >
      <ResponsiveSankey
        data={data}
        margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
        align="center"
        sort="descending"
        colors={{ scheme: "nivo" }}
        nodeOpacity={1}
        nodeHoverOthersOpacity={0.35}
        nodeThickness={18}
        nodeSpacing={24}
        nodeBorderWidth={0}
        nodeInnerPadding={6}
        nodeBorderColor={{
          from: "color",
          modifiers: [["darker", 0.8]],
        }}
        nodeBorderRadius={3}
        linkOpacity={0.5}
        linkHoverOthersOpacity={0.1}
        linkContract={10}
        enableLinkGradient={true}
        labelPosition="outside"
        labelOrientation="horizontal"
        labelPadding={20}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1]],
        }}
        // legends={[
        //   {
        //     anchor: "bottom-right",
        //     direction: "column",
        //     translateX: 150,
        //     itemWidth: 100,
        //     itemHeight: 14,
        //     itemDirection: "right-to-left",
        //     itemsSpacing: 2,
        //     itemTextColor: "#999",
        //     symbolSize: 14,
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

export default Sankey;
