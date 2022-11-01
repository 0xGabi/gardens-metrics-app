import { useRanger } from "react-ranger";
import styled from "styled-components";
import { useTheme } from "@1hive/1hive-ui";

const Slider = ({ values, setValues }) => {
  const { getTrackProps, ticks, segments, handles } = useRanger({
    min: 0,
    max: 11,
    stepSize: 1,
    values,
    onChange: setValues,
  });

  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Dec",
  ];

  const valueToMonth = (val) => {
    return MONTHS.map((month, idx) => {
      if (val === idx) {
        return month;
      }
    });
  };

  return (
    <div className="">
      <Track {...getTrackProps()}>
        {ticks.map(({ value }) => (
          <Tick>
            <TickLabel>{value}</TickLabel>
          </Tick>
        ))}
        {segments.map(({ getSegmentProps }, i) => (
          <Segment {...getSegmentProps()} index={i} />
        ))}
        {handles.map(({ value, active, getHandleProps, activeHandleIndex }) => (
          <button
            {...getHandleProps({
              style: {
                appearance: "none",
                border: "none",
                background: "transparent",
                outline: "none",
              },
            })}
          >
            <Handle active={active}>{valueToMonth(value)}</Handle>
          </button>
        ))}
      </Track>
    </div>
  );
};

export default Slider;

export const Track = styled("div")`
  display: block;
  height: 8px;
  width: 97%;
  margin: auto;
`;

export const Tick = styled("div")`
  :before {
    content: "";
    position: absolute;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    height: 5px;
    width: 2px;
    transform: translate(-50%, 0.7rem);
  }
`;

export const TickLabel = styled("div")`
  position: absolute;
  font-size: 0.6rem;
  color: rgba(0, 0, 0, 0.5);
  top: 100%;
  transform: translate(-50%, 1.2rem);
  white-space: nowrap;
`;

export const Segment = styled("div")`
  background: ${(props) =>
    props.index === 0
      ? "rgb(124 224 214)"
      : props.index === 1
      ? "#65779a"
      : props.index === 2
      ? "rgb(124 224 214)"
      : "rgb(124 224 214)"};
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const Handle = styled("div")`
  background: ${({ theme }) => theme.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.6rem;
  height: 1.8rem;
  border-radius: 10px;
  border: 1px solid rgb(124 224 214);
  font-size: 0.9rem;
  white-space: nowrap;
  color: white;

  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  transform: ${(props) =>
    props.active ? "translateY(-100%) scale(1.2)" : "translateY(0) scale(0.9)"};
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;