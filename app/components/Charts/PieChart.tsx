import { ResponsivePie } from "@nivo/pie";

const PieChart = () => {
  const data = [
    {
      id: "hack",
      label: "hack",
      value: 236,
      color: "hsl(20, 70%, 50%)",
    },
    {
      id: "elixir",
      label: "elixir",
      value: 406,
      color: "hsl(40, 70%, 50%)",
    },
    {
      id: "rust",
      label: "rust",
      value: 408,
      color: "hsl(153, 70%, 50%)",
    },
    {
      id: "java",
      label: "java",
      value: 480,
      color: "hsl(79, 70%, 50%)",
    },
    {
      id: "python",
      label: "python",
      value: 599,
      color: "hsl(360, 70%, 50%)",
    },
  ];

  console.log(data);
  return (
    <div style={{ height: "600px", border: "3px solid red" }}>
      <ResponsivePie
        data={data}
        margin={{ top: 50, right: 150, bottom: 150, left: 150 }}
        startAngle={29}
        innerRadius={0.5}
        padAngle={2}
        cornerRadius={10}
        activeOuterRadiusOffset={8}
        borderWidth={3}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.4]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
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
              id: "scala",
            },
            id: "lines",
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
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
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
    </div>
  );
};

export default PieChart;
