import CountUp from "react-countup";

const CountUp = () => {
  return (
    <>
      {" "}
      <CountUp
        end={6812}
        duration={1.5}
        enableScrollSpy={true}
        scrollSpyDelay={1000}
        prefix="HNY "
      ></CountUp>
    </>
  );
};

export default CountUp;
