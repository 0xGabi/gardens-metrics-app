import { createContext } from "react";
import { useRef } from "react";

export const RefContext = createContext(null);

export const RefProvider = ({ children }) => {
  const ChartRef = useRef(null);
  const DashboardRef = useRef(null);
  const AddressFlowRef = useRef(null);

  const handleScroll = (ref) => {
    ref?.current.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
  };

  return (
    <RefContext.Provider
      value={{
        ChartRef,
        DashboardRef,
        AddressFlowRef,
        handleScroll,
      }}
    >
      {children}
    </RefContext.Provider>
  );
};
