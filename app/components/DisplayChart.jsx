import { Card, GU, useViewport, Tag } from "@1hive/1hive-ui";

import styled from "styled-components";

import RadialChart from "../components/Charts/RadialChart";
import AddressFlow from "../components/AddressFlow";

const DisplayChart = ({ total, data, data2, data3 }) => {
  const { below, above } = useViewport();

  return (
    <>
      <Wrapper compactMode={below("large")}>
        <Card>
          <CardContent compactMode={below("large")}>
            <p>TOTAL HONEY FUNDINGS</p>
            <Circle>{total}</Circle>
          </CardContent>
        </Card>
        <Card width="830px" height="500px">
          <RadialChart data={data} data2={data2} />
        </Card>
      </Wrapper>
      <AddressDiv>
        <AddressFlow data={data3} />
      </AddressDiv>
    </>
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
    margin-bottom: ${6 * GU}px;
  }

  & > div:nth-child(2) {
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
  border: 3px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;

const AddressDiv = styled.div`
  width: 100%;
`;
