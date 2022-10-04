import { Card, GU, useViewport } from "@1hive/1hive-ui";

import styled from "styled-components";

import RadialChart from "../components/Charts/RadialChart";

const DisplayChart = ({ total, data }) => {
  const { below, above } = useViewport();

  return (
    <Wrapper compactMode={below("large")}>
      <Card>
        <CardContent compactMode={below("large")}>
          <p>TOTAL HONEY FUNDINGS</p>
          <Circle>{total}</Circle>
        </CardContent>
      </Card>
      <Card width="830px" height="500px">
        <p>HNY spent por month 2021</p>
        <RadialChart data={data} />
      </Card>
    </Wrapper>
  );
};

export default DisplayChart;

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ compactMode }) => (compactMode ? "column" : "row")};
  justify-content: space-between;

  & > div:first-child {
    height: ${({ compactMode }) => (compactMode ? "120px" : "500px")};
    width: ${({ compactMode }) => (compactMode ? "100%" : "300px")};
    margin-bottom: ${4 * GU}px;
  }

  & > div:last-child {
    width: ${({ compactMode }) => (compactMode ? "100%" : "830px")};
  }
`;
const CardContent = styled.div`
  height: 100%;
  width: 100%;
  padding: ${GU}px;
  display: flex;
  flex-direction: ${({ compactMode }) => (compactMode ? "row" : "column")};
  justify-content: space-around;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  p {
    text-align: center;
  }
`;
const Circle = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  border: 3px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;
