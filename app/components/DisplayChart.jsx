import {
  Card,
  Tag,
  GU,
  useViewport,
  IconGroup,
  IconUser,
  IconCoin,
  Split,
  Box,
  CircleGraph,
  TokenBadge,
} from "@1hive/1hive-ui";

import styled from "styled-components";

import RadialChart from "../components/Charts/RadialChart";

const DisplayChart = ({ total }) => {
  return (
    <Wrapper>
      <Card width="300px">
        <CardContent>
          <p>TOTAL HONEY FUNDINGS</p>
          <Circle>{total}</Circle>
        </CardContent>
      </Card>
      <Card width="720px" height="400px">
        <RadialChart />
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${4 * GU}px;
  margin-left: ${15 * GU}px;
  margin-right: ${15 * GU}px;
`;
const CardContent = styled.div`
  height: 100%;
  width: 100%;

  padding: ${2 * GU}px;

  &:hover {
    opacity: 0.8;
  }

  p {
    text-align: center;
    margin-bottom: 45px;
  }
`;
const Circle = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
`;

export default DisplayChart;
