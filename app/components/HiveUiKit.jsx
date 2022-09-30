import {
  useTheme,
  GU,
  Box,
  Bar,
  BackButton,
  Card,
  Split,
  DataView,
  IdentityBadge,
  Amount,
  Tag,
  TokenAmount,
  Accordion,
  TokenBadge,
  EthIdenticon,
  DateRangePicker,
  Slider,
  AddressField,
  CircleGraph,
  Distribution,
  LoadingRing,
  ToastHub,
  Toast,
  Button,
  SyncIndicator,
  Popover,
  Modal,
  LinkBase,
  useViewport,
} from "@1hive/1hive-ui";
import React, { useState } from "react";

import styled from "styled-components";

export const MyCard = () => (
  <Card width="500px">Card content{/* Your card's content goes here */}</Card>
);

const HiveUiKit = () => {
  const [range, setRange] = useState({
    start: null,
    end: null,
  });
  const [progress, setProgress] = useState({
    progress: "123",
  });
  const [opened, setOpened] = useState(false);

  const open = () => setOpened(true);
  const close = () => setOpened(false);
  const { within, below, above } = useViewport();

  const theme = useTheme();

  return (
    <Wrapper>
      <div style={{ border: "2px solid red" }}>
        {below("medium") && <div>small</div>}
        {within("medium", "large") && <div>medium</div>}
        {above("large") && <div>large</div>}
      </div>
      <LinkBase href="https://example.com/" external>
        Example
      </LinkBase>
      <>
        <Button onClick={open}>Open modal</Button>
        <Modal visible={opened} onClose={close}>
          {/* modal content */}
        </Modal>
      </>
      {/* <SyncIndicator /> */}
      <ToastHub threshold={1} timeout={1}>
        <Toast timeout={1}>
          {(toast) => (
            <Button onClick={() => toast("hello world")}>Click me</Button>
          )}
        </Toast>
      </ToastHub>
      <LoadingRing mode={"half-circle"} />
      <Bar primary={<BackButton />} />
      <Box heading={"Beneficiaries"}>Beneficiaries</Box>
      <Split
        primary={<Box>Primary</Box>}
        secondary={<Box heading="Secondary">Secondary content</Box>}
      />
      {/* <IdentityBadge
        customLabel="Custom Label User"
        entity="0xc41e4c10b37d3397a99d4a90e7d85508a69a5c4c"
      />
      <DataView
        fields={["Account", "Amount"]}
        entries={[
          { account: "0x", amount: "-7.900,33 ANT" },
          { account: "0x", amount: "-8.760,90 ANT" },
          { account: "0x", amount: "+5.321 ANT" },
        ]}
        renderEntry={({ account, amount }) => {
          return [<IdentityBadge entity={account} />, <div>{amount}</div>];
        }}
      /> */}
      <Tag mode="new">New update</Tag>
      <DateRangePicker
        startDate={range.start}
        endDate={range.end}
        onChange={setRange}
      />
      <Slider value={progress} onUpdate={(value) => ({ progress: value })} />
      <AddressField address="0xcafE1A77e84698c83CA8931F54A755176eF75f2C" />
      <CircleGraph
        value={80}
        label={(value) => Math.round(100)}
        size={120}
        strokeWidth={6}
      />
      <Box>
        <Distribution
          heading="Fruit shares"
          items={[
            { item: "Bananas", percentage: 37 },
            { item: "Apples", percentage: 22 },
            { item: "Cherries", percentage: 15 },
            { item: "Oranges", percentage: 12 },
            { item: "Grapefruits", percentage: 12 },
            { item: "Rest", percentage: 2 },
          ]}
        />
      </Box>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* border: 2px solid ${({ theme }) => theme.warning}; */
  display: flex;
  flex-direction: column;
  margin: ${1 * GU}px;
  padding: ${4 * GU}px;
  width: 100vw;

  & h1,
  h2,
  h3 {
    text-align: center;
    color: ${({ theme }) => theme.surface};
  }
`;
export default HiveUiKit;
