import {
  Card,
  Tag,
  GU,
  useViewport,
  IconGroup,
  IconUser,
  IconCoin,
} from "@1hive/1hive-ui";
import styled from "styled-components";

export const EachCard = ({
  title,
  width = "300px",
  height = "100px",
  Icon,
  tagValue,
  mode,
  compactMode,
}) => (
  <Card width={width} height={height} compactMode>
    <CardContent>
      <div>{Icon}</div>
      <Wrapper style={{ flexDirection: "column" }}>
        <p>{title}</p>
        <Tag mode={mode}>{tagValue}</Tag>
      </Wrapper>
    </CardContent>
  </Card>
);

const CardDashboard = ({}) => {
  const { within, below, above } = useViewport();
  return (
    <>
      <Wrapper>
        <EachCard
          compactMode={below("medium")}
          title={"Funding Proposals"}
          tagValue={"67"}
          mode={"new"}
          Icon={<IconCoin size="large" />}
        />
        <EachCard
          title={"Beneficiaries"}
          tagValue={"38"}
          Icon={<IconUser size="large" />}
        />
        <EachCard
          title={"Contributors"}
          tagValue={"78"}
          Icon={<IconGroup size="large" />}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: ${4 * GU}px;
  display: flex;
  justify-content: space-between;
  & > div {
    margin-right: ${GU}px;
  }
`;

const CardContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  & > div {
    margin: ${GU}px;
  }
`;

export default CardDashboard;
