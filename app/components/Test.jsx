import { useRef, useState, useEffect, useCallback } from "react";

import InfoCard from "./InfoCard";
import RadialChart from "./Charts/RadialChart";
import SideBar from "./SideBar";
import AddressFlow from "./AddressFlow";
import styles from "../styles/app.css";
const Test = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  //   const { ref1, ref2, ref3 } = useRef(null);
  //   const handleClick = () => {
  //     ref.current?.scrollIntoView({ behavior: "smooth" });

  //   };
  const [count, setCount] = useState(9);

  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(12);
  //  example
  let min = 0;
  let max = 12;
  function onChange() {
    ({ min, max }) => console.log(`min = ${min}, max = ${max}`);
  }

  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);
  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );
  // Set width of the range to decrease from the left side

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);
  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);
  // Get min and max values when their state changes

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const sliceFunc = (array, start, end) => {
    const newArr = array.slice(start, end);
    return newArr;
  };

  const example = sliceFunc(MONTHS, minVal, maxVal);

  function months(config) {
    let cfg = config || {};
    let count = cfg.count || 12;
    let values = [];
    let i, value;

    for (i = 0; i < count; ++i) {
      value = MONTHS[Math.ceil(i) % 12];
      values.push(value);
    }

    return values;
  }

  return (
    <>
      {/* start */}

      <div className="w-full px-6 py-6 mx-auto border-dashed border-2 border-sky-500 ">
        {/* cards */}
        <div className="flex flex-wrap">
          <InfoCard title={"Proposals"} number={"68"} />
          <InfoCard title={"Beneficiaries"} number={"37"} />
          <InfoCard title={"Contributors"} number={"77"} />
        </div>
        {/* chart */}
        <div className=" w-full h-fit border-dashed border-2 border-sky-500 mt-10">
          <div class="flex">
            <div class="w-1/3 border-dashed border-2 border-sky-500 hover:w-full px-3 mb-6  xl:mb-0">
              Total HNY
            </div>
            <div class="w-2/3 border-dashed border-2 border-sky-500 w-full px-3 mb-6  xl:mb-0">
              Latest Porposals details
            </div>
          </div>
        </div>
        <div className="min-w-full h-96	 border-dashed border-2 border-sky-500 mt-10">
          <RadialChart example={example} />
        </div>
        <div
          //   handleRef={handleClick}
          ref={ref1}
          className="min-h-screen"
        >
          <div className="container">
            <input
              type="range"
              min={min}
              max={max}
              value={minVal}
              onChange={(event) => {
                const value = Math.min(Number(event.target.value), maxVal - 1);
                setMinVal(value);
                minValRef.current = value;
              }}
              className="thumb thumb--left"
              style={{ zIndex: minVal > max - 100 && "5" }}
            />
            <input
              type="range"
              min={min}
              max={max}
              value={maxVal}
              onChange={(event) => {
                const value = Math.max(Number(event.target.value), minVal + 1);
                setMaxVal(value);
                maxValRef.current = value;
              }}
              className="thumb thumb--right"
            />

            <div className="slider">
              <div className="slider__track" />
              <div ref={range} className="slider__range" />
              <div className="slider__left-value">{minVal}</div>
              <div className="slider__right-value">{maxVal}</div>
            </div>
          </div>
          <h1>ref1</h1>

          <button onClick={() => setStart(start + 1)}>UP start</button>
          <br></br>
          <button onClick={() => setStart(start - 1)}>DOWN start</button>
          {example.map((month) => (
            <p>{month}</p>
          ))}
        </div>

        <div
          // handleRef={handleClick}
          ref={ref2}
          className="min-h-screen"
        >
          Ref 2
        </div>
        <div
          // handleRef={handleClick}
          ref={ref3}
          className="min-h-screen"
        >
          Ref 3
        </div>
      </div>
    </>
  );
};

export default Test;
