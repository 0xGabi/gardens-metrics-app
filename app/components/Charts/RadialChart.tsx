import { useTheme, Accordion } from "@1hive/1hive-ui";
import { ResponsiveRadialBar } from "@nivo/radial-bar";
import { useLoaderData } from "@remix-run/react";

import { useState } from "react";
import styled from "styled-components";

const theme = {
  background: "#041F46",
  textColor: "#333333",
  fontSize: 25,
  axis: {
    domain: {
      line: {
        stroke: "#777777",
        strokeWidth: 1,
      },
    },
    legend: {
      text: {
        fontSize: 16,
        fill: "#333333",
      },
    },
    ticks: {
      line: {
        stroke: "#777777",
        strokeWidth: 0,
      },
      text: {
        fontSize: 22,
        fill: "#DFE3EA",
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

const MyResponsiveRadialBar = ({ example }) => {
  const { gardensOutflows, gardensBeneficiaries } = useLoaderData();
  const outflows = gardensOutflows;

  console.log(gardensOutflows);

  console.log(example);
  // const [dataChart, setDataChart] = useState(data);
  // const [year, setYear] = useState("2021");

  // const set = (data: any, selectedYear: string) => {
  //   setDataChart(data);
  //   setYear(selectedYear);
  // };
  const filtereByMonthAndYearTEST_2021 = (obj: any, month: any, year: any) => {
    const data1 = [];

    for (let i = 0; i <= month.length; i++) {
      //filter month and year
      const byMonthAndyear = obj.filter((out: any) => {
        return (
          out.transferAt.month === month[i] && out.transferAt.year === year
        );
      });
      if (byMonthAndyear.length !== 0) data1.push(byMonthAndyear);
    }
    //sum total of byMonthAndyear requested amount
    const SUM_byMonthAndyear = data1.map((any) =>
      any.reduce(function (acc: any, v: any) {
        acc[v.transferAt.month] =
          (acc[v.transferAt.month] || 0) + Number(v.requestedAmount);
        return acc;
      }, {})
    );
    //
    const xMonth_yValue = SUM_byMonthAndyear.map((xAndy) => ({
      x: Object.keys(xAndy).toString(),
      y: Number(Object.values(xAndy)),
    }));

    const data = [
      {
        id: year,
        data: xMonth_yValue,
      },
    ];

    return data;
  };

  const datafrom2021 = filtereByMonthAndYearTEST_2021(
    outflows,
    example,
    "2021"
  );
  const datafrom2022 = filtereByMonthAndYearTEST_2021(
    outflows,
    example,
    "2022"
  );

  const data = [
    {
      id: "Supermarket",
      data: [
        {
          x: "Vegetables",
          y: 201,
        },
        {
          x: "Fruits",
          y: 87,
        },
        {
          x: "Meat",
          y: 152,
        },
      ],
    },
    {
      id: "Combini",
      data: [
        {
          x: "Vegetables",
          y: 96,
        },
        {
          x: "Fruits",
          y: 56,
        },
        {
          x: "Meat",
          y: 261,
        },
      ],
    },
    {
      id: "Online",
      data: [
        {
          x: "Vegetables",
          y: 101,
        },
        {
          x: "Fruits",
          y: 295,
        },
        {
          x: "Meat",
          y: 204,
        },
      ],
    },
  ];
  const theme = useTheme();
  return (
    <>
      {/* <Accordion
        items={[
          [
            <div>Filtered year</div>,
            [
              <ButtonYear onClick={() => set(data2, "2022")}>2022</ButtonYear>,
              <ButtonYear22 onClick={() => set(data, "2021")}>
                2021
              </ButtonYear22>,
            ],
          ],
        ]}
      />
      <Year>{year}</Year> */}
      <ResponsiveRadialBar
        data={datafrom2022}
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
    </>
  );
};

const Year = styled.p`
  position: absolute;
  padding: 10px, 15px;
  top: 100px;
  left: 50px;
  z-index: 100;
  background-color: ${({ theme }) => theme.surfaceUnder};
`;

const ButtonYear = styled.button`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0px;
  border: none;
  padding: 10px 15px;
  color: ${({ theme }) => theme.surfaceContent};
  background-color: ${({ theme }) => theme.surfaceUnder};

  cursor: pointer;
  z-index: 100;
`;
const ButtonYear22 = styled.button`
  position: absolute;
  width: 100%;
  top: 50px;
  left: 0px;
  border: none;
  padding: 10px 15px;
  color: ${({ theme }) => theme.surfaceContent};
  background-color: ${({ theme }) => theme.surfaceUnder};

  cursor: pointer;
  z-index: 100;
`;

export default MyResponsiveRadialBar;
