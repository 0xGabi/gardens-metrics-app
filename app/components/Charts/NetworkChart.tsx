import { useTheme } from "@1hive/1hive-ui";
import { useLoaderData } from "@remix-run/react";
import {
  formatDate,
  formatDate_TWO,
  formatAmount,
  formatAddress,
} from "~/utils/format";
import { Network, ResponsiveNetwork } from "@nivo/network";
import { useState } from "react";
import { GardensData } from "~/queries/Queries";
import { id } from "ethers/lib/utils";
import {
  identity,
  xor,
} from ".pnpm/@types+lodash@4.14.182/node_modules/@types/lodash";

const MyResponsiveNetwork = () => {
  const data = {
    nodes: [
      {
        id: "0x661b…e7ef",
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
        source: "0x661b…e7ef",
        target: "Node 1.0",
        distance: 50,
      },
      {
        source: "0x661b…e7ef",
        target: "Node 1.1",
        distance: 50,
      },
      {
        source: "0x661b…e7ef",
        target: "Node 1.2",
        distance: 50,
      },
      {
        source: "0x661b…e7ef",
        target: "Node 1.3",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "0x661b…e7ef",
        distance: 80,
      },
      {
        source: "0x661b…e7ef",
        target: "Node 1.4",
        distance: 50,
      },
      {
        source: "0x661b…e7ef",
        target: "Node 1.5",
        distance: 50,
      },
      {
        source: "0x661b…e7ef",
        target: "Node 1.6",
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
        source: "0x661b…e7ef",
        target: "Node 1.7",
        distance: 50,
      },
      {
        source: "0x661b…e7ef",
        target: "Node 1.8",
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
        fontSize: 18,
      },
      basic: {},
      chip: {},
      table: {},
      tableCell: {},
      tableCellValue: {},
    },
  };

  const datashi = {
    nodes: [
      {
        id: "Node 7.2",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.3",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.4",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.5",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.6",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.7",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.8",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.9",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.10",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.11",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.12",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.13",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.14",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.15",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.16",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.17",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.18",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.16",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.16",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.19",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.20",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.21",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.22",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.23",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.24",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.25",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.26",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.27",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.28",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.29",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.30",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.31",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.32",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.33",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.34",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.35",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.36",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.37",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.38",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.39",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.40",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.41",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.42",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.43",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.44",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.45",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.46",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "Node 7.47",
        height: 0,
        size: 12,
        color: "rgb(232, 193, 160)",
      },
      {
        id: "1Hive",
        height: 0,
        size: 24,
        color: "rgb(194, 160, 232)",
      },
    ],
    links: [
      {
        source: "1Hive",
        target: "Node 7.2",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.3",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.4",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.2",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.5",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.6",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.2",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.2",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.7",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.8",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.9",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.10",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.11",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.12",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.13",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.2",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.2",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.2",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.14",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.15",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.16",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.17",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.18",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.19",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.20",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.21",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.22",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.23",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.24",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.25",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.26",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.27",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.28",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.29",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.30",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.31",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.32",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.33",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.34",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.35",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.36",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.37",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.38",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.39",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.40",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.41",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.42",
        distance: 50,
      },
      {
        source: "1Hive",
        target: "Node 7.43",
        distance: 50,
      },
    ],
  };
  const [nodeId, setNodeId] = useState<string | null>(null);
  const [repul, setRepul] = useState<number>(100);

  const { gardensData } = useLoaderData();

  console.log(gardensData);

  const dataaa = () => {
    const dataaaaaa = {
      nodes: [
        {
          id: "1Hive",
          height: 1,
          size: 36,
          color: "rgb(97, 205, 187)",
        },
        {
          id: "0x661b…e7ef",
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
          id: "Node 2",
          height: 1,
          size: 24,
          color: "rgb(97, 205, 187)",
        },
        {
          id: "Node 1.0",
          height: 1,
          size: 24,
          color: "rgb(232, 193, 160)",
        },
        {
          id: "Node 1.1",
          height: 1,
          size: 24,
          color: "rgb(232, 193, 160)",
        },
      ],
      links: [
        {
          source: "1Hive",
          target: "0x661b…e7ef",
          distance: 80,
        },
        {
          source: "1Hive",
          target: "Node 2",
          distance: 80,
        },
        {
          source: "1Hive",
          target: "Node 3",
          distance: 80,
        },
        {
          source: "0x661b…e7ef",
          target: "Node 1.0",
          distance: 50,
        },
        {
          source: "0x661b…e7ef",
          target: "Node 1.1",
          distance: 50,
        },
      ],
    };

    return dataaaaaa;
  };

  // let nodes = [];
  // let links = [];
  // const LETSSEE = (address: any) => {
  //   for (let i = 0; i <= address.length; i++) {
  //     nodes[i] = {
  //       id: address[i] || "1Hive",
  //       height: 0,
  //       size: 12,
  //       color: "rgb(216, 41, 164)",
  //     };
  //     links[i] = {
  //       source: "1Hive",
  //       target: address[i] || address[i - 1],
  //       distance: 50,
  //     };
  //   }
  //   return { nodes, links };
  // };

  return (
    <div
      style={{ height: "400px", border: "3px solid red", marginTop: "20px" }}
    >
      <button
        style={{
          color: "#042940",
          backgroundColor: "#f4f4f4",
          overflow: "hidden",
        }}
        onClick={() => setRepul(repul + 10)}
      >
        +
      </button>
      <button
        style={{ color: "#042940", backgroundColor: "#f4f4f4" }}
        onClick={() => setRepul(repul - 10)}
      >
        -
      </button>
      {nodeId && <h2>node: {nodeId}</h2>}
      <ResponsiveNetwork
        data={data}
        margin={{ top: 76, right: 0, bottom: 0, left: 0 }}
        linkDistance={function (e) {
          return e.distance;
        }}
        theme={theme}
        centeringStrength={0.1}
        //
        distanceMin={500}
        distanceMax={300}
        //obtengo el ID del nodo!!!
        onClick={(node) => {
          setNodeId(nodeId === node.id ? null : node.id);
        }}
        //
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
          modifiers: [["darker", 0]],
        }}
        linkThickness={function (n) {
          return 2 + 2 * n.target.data.height;
        }}
        linkColor="#affb8e
        "
      />
    </div>
  );
};

export default MyResponsiveNetwork;
